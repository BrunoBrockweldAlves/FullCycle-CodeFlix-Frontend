"use client";
import React, { useEffect, useState } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    ${isScrolled && "bg-black"}
    px-4
    py-4

    lg:px-10
    lg:py-4
    transition-all`}
    >
      <div className="flex items-center space-x-4 md:space-x-8">
        <img src="/logo.png" alt="CodeFlix" width={120} height={120} />
        <ul className="hidden md:flex md:space-x-4">
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>Latest</li>
        </ul>
      </div>

      <div className="flex items-center space-x-4">
        <p className="hidden cursor-not-allowed lg:inline">Welcome, User</p>
        <img
          className="cursor-pointer rounded"
          src="/avatar.jpg"
          alt="Avatar"
          width={30}
          height={30}
        />
      </div>
    </header>
  );
}
