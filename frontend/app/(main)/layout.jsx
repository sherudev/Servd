const MainLayout = ({ children }) => {
  return (
    <div className="pt-10" suppressHydrationWarning>
      {children}
    </div>
  );
};

export default MainLayout;
