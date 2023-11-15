import "./globals.css";
import SessionProvider from "./utils/SessionProvider";

export const metadata = {
  title: "No Linger",
  description: "No Linger by oxxo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full bg-gray-900">
      <body>
        <SessionProvider>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
