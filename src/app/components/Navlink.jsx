'use client';

import { Suspense } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import Search from './Search.jsx'

export default function Navlink() {
    const pathname = usePathname();


    return(
        <div className="flex m-auto gap-4 p-4 w-6/12 bg-yellow-600 rounded-lg min-w-max max-w-screen-lg mt-2.5 ">
            <Link href='/'>
                <h2 className="font-sans text-xl font-semibold cursor-pointer">Recipes</h2>
            </Link>
            <Suspense>
                <Search />
            </Suspense>
            

            <Link
                href="/"
                className={clsx(
                    "hover:text-gray-200 cursor-pointer text-lg", 
                    {
                    "font-bold text-white": pathname === '/',
                },
              )}
                 >Home</Link>
            <Link
                href="/recipes"
                className={clsx(
                    "hover:text-gray-200 cursor-pointer text-lg", 
                    {
                    "font-bold text-white": pathname === '/recipes',
                },
              )}
                 >Recipes</Link>
            <Link
             href='/about'
            className={clsx(
                    "hover:text-gray-200 cursor-pointer text-lg", 
                    {
                    "font-bold text-white": pathname === '/about',
                },
              )}
             >About</Link>
            <Link
                href='/contact'
                className={clsx(
                    "hover:text-gray-200 cursor-pointer text-lg mr-auto", 
                    {
                    "font-bold text-white": pathname === '/contact',
                },
              )}
                
                >Contact</Link>
            <Image
            src="/brownie.png"
            width={32}
            height={32}
            className="hidden md:block"
            alt="Brownie icon"
          />
        </div>
    )
}


