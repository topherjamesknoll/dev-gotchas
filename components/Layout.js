import { useTheme } from "@geist-ui/core";

const Layout = ({ children }) => {
  const theme = useTheme();
  return (
    <div
      style={{
        height: "100vh",
        display: "grid",
        gridTemplateAreas: "'nav' 'main'",
        gridTemplateRows: "56px auto",
      }}
    >
      <nav
        style={{
          backgroundColor: theme.palette.foreground,
          color: theme.palette.background,
          display: "flex",
          alignItems: "center",
          padding: "1rem 2rem",
        }}
      >
        Development Gotchas
      </nav>
      <div
        style={{
          overflowY: "auto",
        }}
      >
        <div
          style={{
            maxWidth: "1000px",
            padding: "4rem 2rem",
            margin: "0 auto",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
