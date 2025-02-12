import "~/styles/globals.css";
import {ClerkProvider} from '@clerk/nextjs';
import "@uploadthing/react/styles.css";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import {TopNav} from "./_components/topnav"
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "./api/uploadthing/core";

export const metadata: Metadata = {
  title: "my_app",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};



export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
      <NextSSRPlugin
         
          routerConfig={extractRouterConfig(ourFileRouter)}
        />
      
        
        <TopNav/>
        {children}
        </body>
    </html>
    </ClerkProvider>
  );
}