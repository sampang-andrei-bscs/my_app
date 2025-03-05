"use client";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { UploadButton } from "~/utils/uploadthing";

export  function TopNav(){
  const router = useRouter();
  return(
    <nav className="flex w-full items-center justify-between  text-x1 font-semibold border-b p-4 ">
      <div>Gallery</div>
      <div className="flex flex-row">
        <SignedOut>
            <SignInButton />
        </SignedOut>
        <SignedIn>
         <UploadButton endpoint="imageUploader"
         onClientUploadComplete={() => {
          router.refresh();
         }}/>
            <UserButton/>
        </SignedIn>
      </div>
    </nav>
  );
}