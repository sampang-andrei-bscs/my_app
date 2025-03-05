import Link from "next/link";
import { db } from "~/server/db";
import {SignedOut, SignedIn} from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import { getMyImages } from "~/server/queries";
import Image from "next/image";

export const dynamic = "force-dynamic";


async function Images(){
  const images = await getMyImages();
  
  return(
<div className="mt-4 flex flex-wrap justify-center gap-4">
        {images.map((image) => (
          <div key={image.id} className= "flex w-48 flex-col"> 
          <Image
           src= {image.url}
           style={ {objectFit: "contain" }} 
           width={200}
           height={200}
           alt={image.name}/>
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
       <Images />
      </SignedIn>
      
    </main>
  );
}