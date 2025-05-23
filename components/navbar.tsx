"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { UserButton, useUser, SignOutButton, SignInButton } from "@clerk/nextjs";
import { Poppins } from "next/font/google";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { MobileSidebar } from "@/components/mobile-sidebar";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { useProModal } from "@/hooks/use-pro-modal";
import Image from 'next/image';

const font = Poppins({ weight: "600", subsets: ["latin"] });

interface NavbarProps {
    isPro: boolean;
    tier: string;
}

export const Navbar = ({ isPro, tier }: NavbarProps) => {
    const proModal = useProModal();
    const { isSignedIn, user } = useUser();
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null;
    }

    return (
        <div className="fixed w-full z-50 flex justify-between items-center py-2 px-4 h-16 border-b border-primary/10 bg-secondary">
            <div className="flex items-center">
                <MobileSidebar isPro={isPro} />
                <Link href="/">
                    <div className="flex items-center">
                        <Image src="/logo.png" alt="Logo" width={40} height={40} />
                        <h1 className={cn("hidden md:block text-xl md:text-3xl font-bold text-primary ml-2", font.className)}>
                            CUBEOPS AI COMPANION <span className="text-muted-foreground text-sm"></span>
                        </h1>
                    </div>
                </Link>
            </div>
            <div className="flex items-center gap-x-3">
                {!isSignedIn && (
                    <SignInButton>
                        <Button size="sm">Sign in</Button>
                    </SignInButton>
                )}
                {isSignedIn && (
                    <SignOutButton>
                        <Button variant="outline">Sign out</Button>
                    </SignOutButton>
                )}
                {isPro && (
                    <Link href="/settings">
                        <Button size="sm" variant="premium">
                            {tier === "pro" ? "Pro plan" : "Unlimited plan"}
                        </Button>
                    </Link>
                )}
                {!isPro && (
                    <Button onClick={proModal.onOpen} size="sm" variant="premium">
                        Upgrade
                        <Sparkles className="h-4 w-4 fill-white text-white ml-2" />
                    </Button>
                )}
                <ModeToggle />
                <UserButton afterSignOutUrl="/" />
            </div>
        </div>
    );
};