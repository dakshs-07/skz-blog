import Link from 'next/link'
import React from 'react'

function Links() {
  return (
    <div className="fixed left-0 py-10 z-1000">
      <div className="flex flex-col gap-6">
        <Link href="/">
          <span className="bg-red-700 text-white w-full p-2 hover:bg-red-900">
            SKZ YouTube
          </span>
        </Link>
        <Link href="/">
          <span className="bg-blue-400 text-white w-full p-2 hover:bg-blue-800">
            SKZ Instagram
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Links