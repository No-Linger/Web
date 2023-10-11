import "./globals.css";

export const metadata = {
  title: "No Linger",
  description: "No Linger by oxxo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
