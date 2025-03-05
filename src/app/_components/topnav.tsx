"use client";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { UploadButton } from "~/utils/uploadthing";
import { SimpleUploadButton } from "./upload-button";

export  function TopNav(){
  return(
    <nav className="flex w-full items-center justify-between  text-x1 font-semibold border-b p-4 ">
      <div>Gallery</div>
      <div className="flex flex-row items-center gap-4">
        <SignedOut>
            <SignInButton />
        </SignedOut>
        <SignedIn>
         <SimpleUploadButton />
            <UserButton/>
        </SignedIn>
      </div>
    </nav>
  );
}