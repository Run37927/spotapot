import React from 'react'
import Link from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { ArrowRight, Plus } from 'lucide-react'
import { buttonVariants } from './ui/button'
import { cn } from '@/lib/utils'
import { getAuthSession } from '@/lib/auth'
import UserAccountNav from './UserAccountNav'
import Image from 'next/image'

async function Navbar() {
    const session = await getAuthSession();

    return (
        <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-sm transition-all">
            <MaxWidthWrapper>
                <div className='flex h-14 items-center justify-between'>
                    <Link href='/' className='z-40'>
                        <Image
                            src='/logo.png'
                            width={50}
                            height={50}
                            alt='spot-a-pot logo'
                            priority
                            quality={95}
                        />
                    </Link>

                    <div className='flex items-center space-x-1.5'>
                        <>
                            <Link
                                href='/submit-post'
                                className={cn(buttonVariants({
                                    variant: "outline",
                                    size: "sm",
                                }), "cursor-pointer")}>

                                <p className='font-semibold text-sm flex items-center gap-1'>
                                    <Plus className='h-4 w-4 text-center' />
                                    <span className=''>Spot a Pot</span>
                                </p>

                            </Link>

                            {true ? (
                                <UserAccountNav session={session} />
                            ) : (
                                <Link href='/sign-in' className={cn(buttonVariants({ size: "sm" }), "flex items-center justify-center group px-4")}>
                                    <span>Sign in</span>
                                    <ArrowRight className='ml-1.5 transform h-4 w-4 transition-transform duration-300 group-hover:translate-x-1' />
                                </Link>
                            )}
                        </>
                    </div>
                </div>
            </MaxWidthWrapper>
        </nav>
    )
}

export default Navbar