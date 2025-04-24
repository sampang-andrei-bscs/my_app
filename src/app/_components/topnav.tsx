"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { SimpleUploadButton } from "./upload-button";
import Image from "next/image";
import Link from "next/link";

export function TopNav() {
  return (
    <nav className="w-full flex flex-col">
      {/* Blue Header with Logo and Text */}
      <div className="flex items-center bg-blue-800 px-6 py-2">
        <Link href="/" className="flex items-center gap-4">
          <Image src="/hcclogo.png" alt="HCC Logo" width={60} height={60} />
          <div className="text-white font-bold text-lg leading-tight">
            HOLY CROSS COLLEGE
            <br />
            <span className="text-sm">STA. ANA, PAMPANGA</span>
          </div>
        </Link>
        <div className="ml-auto flex items-center gap-4">
        
        </div>
      </div>

      {/* Yellow Bar with Motto */}
      <div className="bg-yellow-400 px-6 py-1 text-blue-900 font-semibold text-sm tracking-wide">
        Fides • Caritas • Libertas
      </div>
    </nav>
  );
}
