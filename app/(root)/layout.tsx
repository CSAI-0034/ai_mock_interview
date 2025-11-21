import Link from 'next/link'
import React, { ReactNode } from 'react'

const RootLayout = ({children}: {children: ReactNode}) => {
  return (
    <div className='root-layout'>
      <nav>
        <Link href='/' className='flex items-center gap-2'>
          <img src="/logo.svg" alt="Logo" width={32} height={38}/>
          <h2 className='text-primary-100'>Prepwise</h2>
        </Link>
      </nav>
      {children}
    </div>
  )
}

export default RootLayout