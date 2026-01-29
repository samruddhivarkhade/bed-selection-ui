import "../styles/BedUI.css";

export const metadata = {
  title: "Bed Selection UI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
