import { Button } from "@/components/ui/button";
import { Poppins } from "next/font/google";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { LoginButton } from "@/components/auth/login-button";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"]
})

export default function Home() {
  return (
    <main className="flex h-full flex-col space-y-6 items-center justify-center bg-blue-500">
      <div className="space-y-6 text-center">
        <h1 className={cn("text-6xl text-white font-semibold drop-shadow-md", font.className)}>
         🔐Auth
        </h1>
        <p className="text-lg text-white">
          A simple authentication service
        </p>
      </div>

      <LoginButton>
          <Button variant="secondary" size="lg">
            Sign in
          </Button>
        </LoginButton>
    </main>
  );
}
