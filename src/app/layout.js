import "./globals.css";
import SessionProvider from "./utils/SessionProvider";
import { getServerSession } from "next-auth";


export const metadata = {
  title: "No Linger",
  description: "No Linger by oxxo",
};

export default async function RootLayout({ children }) {

  const session = await getServerSession();
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
