import Link from "next/link";
import { db } from "~/server/db";
import {SignedOut, SignedIn} from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import { getMyImages } from "~/server/queries";
import Image from "next/image";
import NotificationHandler from "./components/notification-handler";

export const dynamic = "force-dynamic";


async function Images(){
  const images = await getMyImages();
  
  return(
<div className=" flex flex-wrap justify-center gap-4 p-4">
        {images.map((image) => (
          <div key={image.id} className= "flex h-48 w-48 flex-col"> 
          <Link href={`img/${image.id}`}>
          <div className="relative aspect-video bg-zinc-900">
            <Image
           src= {image.url}
           style={ {objectFit: "contain", objectPosition: "top"}} 
           width={192}
           height={192}
           className="h-full w-full object-contain object-top"
           alt={image.name}/>
           </div>
           </Link>
          <div>{image.name}</div>
          
          </div>

          
        ))}

      </div>
  );
}

export default async function HomePage() {


  return (
    <main className="">
      <SignedOut>
        <div className="h-full w-full text-2x1 text-center">Please Sign In Above</div>
      </SignedOut>

      <SignedIn>
        <NotificationHandler />
       <Images />
      </SignedIn>
      
    </main>
  );
}