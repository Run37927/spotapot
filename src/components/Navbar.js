import React from 'react'
import Link from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { ArrowRight, Plus } from 'lucide-react'
import { Button, buttonVariants } from './ui/button'
import { cn } from '@/lib/utils'
import { getAuthSession } from '@/lib/auth'
import UserAccountNav from './UserAccountNav'
import Image from 'next/image'
import PostButton from './PostButton'

async function Navbar() {
    const session = await getAuthSession();

    return (
        <nav className='absolute top-3 left-5 z-30'>
            <Link href='/' className='flex items-center gap-1'>
                <Image
                    src='/logo.png'
                    width={50}
                    height={50}
                    alt='spot-a-pot logo'
                    priority
                    quality={95}
                />
                <h1 className='font-medium text-zinc-800 text-lg'>
                    Spot-A-Pot
                </h1>
            </Link>
        </nav>
    )
}

export default Navbar