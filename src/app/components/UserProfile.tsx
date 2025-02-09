import Image from "next/image";
import React from "react";

export const UserProfile = () => {
  return (
    <div className="flex items-center space-x-4">
      <p className="hidden cursor-not-allowed lg:inline">Welcome, User</p>
      <Image
        className="cursor-pointer rounded"
        src="/avatar.jpg"
        alt="Avatar"
        width={30}
        height={30}
      />
    </div>
  );
};
