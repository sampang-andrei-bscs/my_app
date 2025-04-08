"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";

 
export default function NotificationHandler(){
    const searchParams = useSearchParams();
    const router = useRouter();

    useEffect(() => {
      if (searchParams.get("deleted")){
        toast.success( <span className="text-lg">Image Deleted</span>);

        router.replace("/", undefined);
      }
    
     
    }, [searchParams, router]);

    return null;
    
}