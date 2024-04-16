import { Button } from '@/components/ui/button'

import Logo from './Logo'

const Footer = () => {
  return (
    <div className='flex items-center w-full p-6 bg-background z-50 dark:bg-[#1F1F1F]'>
      <Logo />
      <div className='md:ml-auto w-full justify-between md:justify-end flex items-center gap-x-2 text-muted-foreground'>
        <Button
          size='sm'
          variant='ghost'
        >
          Privacy Policy
        </Button>
        <Button
          size='sm'
          variant='ghost'
        >
          Terms & Conditions
        </Button>
      </div>
    </div>
  )
}

export default Footer
