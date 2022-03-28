import React, {useState} from 'react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import toast, { Toaster } from 'react-hot-toast'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    const testToast = () => toast.error("ERROR - Not yet implemted")
  return (
    <div className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg'>
        <div><Toaster/></div>
        <div className='px-2 flex justify-between items-center w-full h-full'>
            <div className='flex items-center'>
                <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>MTG-MASTER</h1>
                <ul className='hidden md:flex'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Cards</li>
                    <li>Collection</li>
                    <li>Inventory</li>
                </ul>
            </div>
            <div className='hidden md:flex pr-4'>
                <button className='border-none bg-transparent text-black mr-4'>Sign In</button>
                <button className='px-8 py-3' onClick={testToast}>Sign Up</button>
            </div>

            <div className='md:hidden' onClick={handleClick}>
                {!nav ? <MenuIcon className='w-5' /> : <XIcon className='w-5' />}
                
            </div>

        </div>

        <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
            <li className='border-b-2 border-zinc-300 w-full'>Home</li>
            <li className='border-b-2 border-zinc-300 w-full'>About</li>
            <li className='border-b-2 border-zinc-300 w-full'>Cards</li>
            <li className='border-b-2 border-zinc-300 w-full'>Collection</li>
            <li className='border-b-2 border-zinc-300 w-full'>Inventory</li>
            <div className='flex flex-col my-4'>
                <button className='bg-transparent text-indigo-600 px-8 py-3 mb-4'>Sign In</button>
                <button className='px-8 py-3'>Sign Up</button>
            </div>
        </ul>
    </div>
  )
}

export default Navbar