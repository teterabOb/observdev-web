"use client"
import Image from "next/image";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { FaYoutube, FaLinkedin, FaTwitter } from "react-icons/fa";
import { NavbarDemo } from "@/components/ui/navbar";
import { TypewriterEffectDemo } from "@/components/ui/typewritter-effect-demo";
import { InfiniteMovingCardsDemo } from "@/components/ui/infinite-moving-cards-demo";

export default function Home() {
  return (


    <main className="flex min-h-screen flex-col items-center justify-between">
  
        <TypewriterEffectDemo></TypewriterEffectDemo>
        <InfiniteMovingCardsDemo></InfiniteMovingCardsDemo>
  
    </main>

  );
}
