"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SheetContent, Sheet, SheetTrigger } from "@/components/ui/sheet";
import { ModeToggle } from "@/components/mode-toogle";
import Image from "next/image";
import { useTheme } from "next-themes";

export default function MainNavbar() {
  const { theme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full bg-background">
      <div className="container flex h-16 items-center justify-between px-2 md:px-6">
        <Link href="#" className="flex items-center " prefetch={false}>
          {theme === "dark" ? (
            <Image
              src="/Landsacpe-dark.svg"
              alt="Les"
              width={191}
              height={56}
              className="h-10 hidden md:block"
            />
          ) : (
            <Image
              src="/Landsacpe.svg"
              alt="Les"
              width={191}
              height={56}
              className="h-10 hidden md:block"
            />
          )}
          <Image
            src="/Luxi-Hosting-Logo.svg"
            alt="Les"
            width={191}
            height={56}
            className="h-10 block md:hidden pr-24"
          />
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          <Link
            href="#"
            className="text-sm font-medium hover:text-primary transition-colors"
            prefetch={false}
          >
            Home
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:text-primary transition-colors"
            prefetch={false}
          >
            About Us
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:text-primary transition-colors"
            prefetch={false}
          >
            Services
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:text-primary transition-colors"
            prefetch={false}
          >
            Doctors
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:text-primary transition-colors"
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" className="hidden md:block">
            Login
          </Button>
          <Button size="sm" className="hidden md:block">
            Sign Up
          </Button>
          <ModeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <MenuIcon className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="md:hidden">
              <div className="grid gap-4 p-4">
                <Link
                  href="#"
                  className="text-sm font-medium hover:text-primary transition-colors"
                  prefetch={false}
                >
                  Home
                </Link>
                <Link
                  href="#"
                  className="text-sm font-medium hover:text-primary transition-colors"
                  prefetch={false}
                >
                  About Us
                </Link>
                <Link
                  href="#"
                  className="text-sm font-medium hover:text-primary transition-colors"
                  prefetch={false}
                >
                  Services
                </Link>
                <Link
                  href="#"
                  className="text-sm font-medium hover:text-primary transition-colors"
                  prefetch={false}
                >
                  Doctors
                </Link>
                <Link
                  href="#"
                  className="text-sm font-medium hover:text-primary transition-colors"
                  prefetch={false}
                >
                  Contact
                </Link>
                <div className="flex items-center gap-4">
                  <Button variant="outline" size="sm">
                    Login
                  </Button>
                  <Button size="sm">Sign Up</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
