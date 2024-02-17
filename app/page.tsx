import Image from "next/image";
import {BackgroundGradientAnimation} from "@/components/ui/background-gradient-animation";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <BackgroundGradientAnimation />
      
    </main>
  );
}
