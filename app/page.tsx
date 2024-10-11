// app/page.tsx
"use client"; 

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Yönlendirme
    router.push("/characters");
  }, [router]);

  return null; 
}
