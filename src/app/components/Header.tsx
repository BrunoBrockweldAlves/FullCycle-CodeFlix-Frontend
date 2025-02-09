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
    fixed
    top-0
    z-50
    flex
    w-full

    items-center
    justify-between
    ${useScroll() && "bg-black"}
    px-4
    py-4

    lg:px-10
    lg:py-4
    transition-all`}
    >
      <div className="flex items-center space-x-4 md:space-x-8">
        {Logo()}
        {NavLinks()}
      </div>
      {UserProfile()}
    </header>
  );
}
