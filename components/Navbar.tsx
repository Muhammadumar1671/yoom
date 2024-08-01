import { Link as Icon } from 'lucide-react'; // Import the icon you need
import Link from 'next/link'; // Import Link for navigation in Next.js
import Image from 'next/image'; // Import Image from next/image
import React from 'react';
import MobileNav from './MobileNav';


const Navbar = () => {
  return (
    <nav className="flex justify-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/icons/logo.svg"
          width={32}
          height={32}
          alt="yoom"
          className="w-10 h-10 max-sm:w-8 max-sm:h-8"
        />
        <p className="text-[26px] font-extrabold text-white max-sm:hidden">yoom</p>
      </Link>

      <div className='flex-between gap-5'>
     
        <MobileNav/>
 
      </div>

    </nav>
  );
}

export default Navbar;
