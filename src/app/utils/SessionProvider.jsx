"use client"
import { SessionProvider } from "next-auth/react";

const SexProvider = ({ children }) => {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  );
};

module.exports = SexProvider;
