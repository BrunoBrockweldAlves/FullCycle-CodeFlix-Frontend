'use client';

import { useState } from "react";

export default function BugButton() {
    const [clicked, setClicked] = useState(false);

        if (clicked) {
            throw new Error("BugButton Error!");
        }

    return(
        <button onClick={() => setClicked(true)} className="bg-red-500 text-white font-bold px-4 py-2 rounded hover:bg-red-700">
            Click me to throw an error
        </button>
    );
}