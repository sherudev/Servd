import { auth, currentUser } from "@clerk/nextjs/server";

const STRAPI_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;

export const checkUser = async () => {
  const user = await currentUser();

  if (!user) {
    console.log("No User found");
    return null;
  }

  if (!STRAPI_API_TOKEN) {
    console.error("❌ STRAPI_API_TOKEN is missing in .env.local");
    return null;
  }

  // Check if user has Pro plan
  const { has } = await auth();
  const subscriptionTier = has({ plan: "pro" }) ? "pro" : "free";

  try {
    // Check if user exists in Strapi
    const existingUserResponse = await fetch(
      `${STRAPI_URL}/api/users?filters[clerkId][$eq]=${user.id}`,
      {
        headers: {
          Authorization: `Bearer ${STRAPI_API_TOKEN}`,
        },
        cache: "no-store",
      },
    );

    if (!existingUserResponse.ok) {
      const errorText = await existingUserResponse.text();
      console.error("Strapi error response:", {
        url: `${STRAPI_URL}/api/users?filters[clerkId][$eq]=${user.id}`,
        status: existingUserResponse.status,
        body: errorText.slice ? errorText.slice(0, 2000) : errorText,
      });
      return null;
    }

    const existingUserRaw = await existingUserResponse.json();
    // Strapi typically returns { data: [...] } — normalize that shape
    const existingUserItems = existingUserRaw?.data ?? existingUserRaw;

    if (Array.isArray(existingUserItems) && existingUserItems.length > 0) {
      const first = existingUserItems[0];
      const existingUser = first?.attributes
        ? { id: first.id, ...first.attributes }
        : first;

      // Update subscription tier if changed
      if (existingUser.subscriptionTier !== subscriptionTier) {
        await fetch(`${STRAPI_URL}/api/users/${existingUser.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${STRAPI_API_TOKEN}`,
          },
          body: JSON.stringify({ subscriptionTier }),
        });
      }

      return { ...existingUser, subscriptionTier };
    }

    // Get authenticated role
    const rolesResponse = await fetch(
      `${STRAPI_URL}/api/users-permissions/roles`,
      {
        headers: {
          Authorization: `Bearer ${STRAPI_API_TOKEN}`,
        },
      },
    );

    if (!rolesResponse.ok) {
      const text = await rolesResponse.text();
      console.error("Strapi roles fetch failed:", {
        url: `${STRAPI_URL}/api/users-permissions/roles`,
        status: rolesResponse.status,
        body: text.slice ? text.slice(0, 2000) : text,
      });
      return null;
    }

    const rolesRaw = await rolesResponse.json();
    // roles endpoint can vary — try multiple shapes
    const rolesList = rolesRaw?.roles ?? rolesRaw?.data ?? rolesRaw;
    const authenticatedRole = Array.isArray(rolesList)
      ? rolesList.find((role) => role.type === "authenticated")
      : rolesList?.find?.((role) => role.type === "authenticated");

    if (!authenticatedRole) {
      console.error("❌ Authenticated role not found");
      return null;
    }

    // Create new user
    const userData = {
      username:
        user.username || user.emailAddresses[0].emailAddress.split("@")[0],
      email: user.emailAddresses[0].emailAddress,
      password: `clerk_managed_${user.id}_${Date.now()}`,
      confirmed: true,
      blocked: false,
      role: authenticatedRole.id,
      clerkId: user.id,
      firstName: user.firstName || "",
      lastName: user.lastName || "",
      imageUrl: user.imageUrl || "",
      subscriptionTier,
    };

    const newUserResponse = await fetch(`${STRAPI_URL}/api/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${STRAPI_API_TOKEN}`,
      },
      body: JSON.stringify(userData),
    });

    if (!newUserResponse.ok) {
      const errorText = await newUserResponse.text();
      console.error("❌ Error creating user:", {
        url: `${STRAPI_URL}/api/users`,
        status: newUserResponse.status,
        body: errorText.slice ? errorText.slice(0, 2000) : errorText,
      });
      return null;
    }

    const newUserRaw = await newUserResponse.json();
    // normalize possible { data: {...} } shape
    const newUser = newUserRaw?.data ?? newUserRaw;
    return newUser;
  } catch (error) {
    console.error("❌ Error in checkUser:", error.message);
    return null;
  }
};
