import React from "react";

export default function Header() {
  return (
    <header
      className="
    fixed
    top-0
    z-50
    flex
    w-full

    items-center
    justify-between
    px-3
    py-3

    lg:px-10
    lg:py-6

    bg-black
  "
    >
      <img src="/logo.png" alt="CodeFlix" width={120} height={120} />
      <ul className="flex space-x-4">
        <li>Home</li>
        <li>TV Shows</li>
        <li>Movies</li>
        <li>Latest</li>
      </ul>
    </header>
  );
}
