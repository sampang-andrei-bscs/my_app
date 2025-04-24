import Link from "next/link";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import NotificationHandler from "./components/notification-handler";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="relative min-h-screen w-full font-sans overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hccbg.png" // Make sure this image is in your /public folder
          alt="School Background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="opacity-80"
        />
      </div>

      {/* Overlay Button */}
      <div className="flex h-screen items-center justify-center">
        <Link href="/request-certificate">
          <button className="bg-blue-800 text-white text-2xl px-8 py-5 rounded-xl font-bold shadow-xl hover:bg-blue-900 transition">
            REQUEST CERTIFICATE
          </button>
        </Link>
      </div>

      {/* Authenticated Content */}
    
        <NotificationHandler />
    

    </main>
  );
}
