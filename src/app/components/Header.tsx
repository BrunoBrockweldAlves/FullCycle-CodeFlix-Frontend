"use client";
import React from "react";
import { UserProfile } from "./UserProfile";
import { NavLinks } from "./NavLinks";
import { Logo } from "./Logo";
import { useScroll } from "../hooks/useScroll";

export default function Header() {
  return (
    <header
      className={`
    ${useScroll() && "bg-black"}
    fixed top-0 z-50
    flex w-full items-center justify-between
    bg-gradient-to-b from-transparent to-black
    p-2
    px-4

    transition-all
    lg:px-16
    lg:py-4
    `}
    >
      <div className="flex items-center space-x-4 md:space-x-8">
        {Logo()}
        {NavLinks()}
      </div>
      {UserProfile()}
    </header>
  );
}
