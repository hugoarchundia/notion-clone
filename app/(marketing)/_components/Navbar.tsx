'use client'

import { Spinner } from '@/components/Spinner'
import ToggleTheme from '@/components/ToggleTheme'
import { Button } from '@/components/ui/button'
import useScrollTop from '@/hooks/useScrollTop'
import { cn } from '@/lib/utils'
import { SignInButton, UserButton } from '@clerk/clerk-react'
import { useConvexAuth } from 'convex/react'
import Link from 'next/link'
import Logo from './Logo'

const Navbar = () => {
  const { isAuthenticated, isLoading } = useConvexAuth()
  const scrolled = useScrollTop()

  return (
    <div
      className={cn(
        'z-50 bg-background dark:bg-[#1F1F1F] fixed top-0 flex items-center w-full p-6',
        scrolled && 'border-b shadow-sm'
      )}
    >
      <Logo />
      <div className='md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2'>
        {isLoading && <Spinner />}
        {!isAuthenticated && !isLoading && (
          <>
            <SignInButton mode='modal'>
              <Button
                variant='ghost'
                size='sm'
              >
                Log In
              </Button>
            </SignInButton>
            <SignInButton mode='modal'>
              <Button size='sm'>Get Jotion Free</Button>
            </SignInButton>
          </>
        )}
        {isAuthenticated && !isLoading && (
          <>
            <Button
              variant='ghost'
              size='sm'
              asChild
            >
              <Link href='/documents'>Enter Jotion</Link>
            </Button>
            <UserButton />
          </>
        )}
        <ToggleTheme />
      </div>
    </div>
  )
}

export default Navbar
