import { Text, useTheme } from "@geist-ui/core";
import Link from "next/link";

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
        }}
      >
        <div
          style={{
            width: "1000px",
            margin: "0 auto",
            padding: "1rem 2rem",
          }}
        >
          <Text span b>
            Development Gotchas
          </Text>
          <Text span>
            {" "}
            by{" "}
            <Link href={"https://www.linkedin.com/in/topherjamesknoll"}>
              Topher
            </Link>
          </Text>
        </div>
      </nav>
      <main
        style={{
          overflowY: "auto",
        }}
      >
        <div
          style={{
            width: "1000px",
            margin: "0 auto",
            padding: "4rem 2rem",
          }}
        >
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
