import "../styles/global.css";
import "../styles/global.css";

export const metadata = {
  title: "Prompotopia",
  description: "Description here for the website",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
