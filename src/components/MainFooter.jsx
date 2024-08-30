'use client'
import { Poppins } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaEnvelope, FaFacebook, FaInstagram, FaInstagramSquare, FaMapMarkerAlt, FaPhone, FaTwitter } from 'react-icons/fa'
const poppins = Poppins({ subsets: ['latin'], style: 'normal', weight: '400' })

export default function MainFooter() {
    const pathname = usePathname()
    return (
        <footer className={`mx-auto containter max-w-full bg-gradient-to-br from-slate-900
    via bg-slate-500 to-black flex flex-wrap justify-between items-center p-8`}>
            <nav className='container w-auto flex flex-col gap-8 justify-center
        items-center'>
                <Image
                    className='container max-w-[100px] mx-auto w-[70%] h-[70%]'
                    width={44}
                    height={44}
                    src='/images/logo.png'
                    alt='logo' />

                <nav className={`${poppins.className} p-4 uppercase container max-w-screen flex flex-col text-white items-start justify-evenly gap-4`}>
                    <Link
                        className={`${pathname === '/' && 'active'}`}
                        href={'/'}>
                        Home
                    </Link>
                    <Link
                        className={`${pathname === '/product' && 'active'}`}
                        href={'/product'}>
                        Product
                    </Link>
                    <Link
                        className={`${pathname === '/about' && 'active'}`}
                        href={'/about'}>
                        About
                    </Link>
                    <Link
                        className={`${pathname === '/contact' && 'active'}`}
                        href={'/contact'}>
                        Contact
                    </Link>

                </nav>
            </nav>

            <nav className='container w-auto flex flex-col gap-4 justify-center
        items-center'>
                <h1 className={`${poppins.className} text-center text-white text-3xl`}>CONTACT US</h1>

                <nav className={`${poppins.className} 
            p-4 container max-w-screen flex 
            flex-col text-white items-center justify-evenly
             gap-4`}>
                    <Link
                        className={`flex gap-x-2 items-start`}
                        href={'/'}>
                        <FaMapMarkerAlt fill='white' size={20} /> Address: LAGOS, NIGERIA
                    </Link>
                    <Link
                        className={`flex gap-x-2 items-start`}
                        href={'/about'}>
                        <FaPhone fill='white' size={20} /> <p className='flex flex-col'><span>Call: +234-93 923 3914,</span> 08065350031</p>
                    </Link>
                    <Link
                        className={`flex gap-x-2 items-start`}
                        href={'/contact'}>
                        <FaEnvelope fill='white' size={20} /> <p className='flex flex-col'><span>Email: favyscents@gmail.com,</span> kelechiorunta1@gmail.com</p>
                    </Link>

                </nav>
            </nav>

            <nav className='container w-auto flex flex-col gap-4 justify-center
        items-center'>
                <h1 className={`${poppins.className} text-center text-white text-3xl`}>CONTACT US</h1>

                <nav className={`${poppins.className} 
            p-4 container max-w-screen flex 
            flex-col text-white items-center justify-evenly
             gap-4`}>
                    <Link
                        className={`flex gap-x-2 items-start`}
                        href={'/'}>
                        <FaMapMarkerAlt fill='white' size={20} /> Address: LAGOS, NIGERIA
                    </Link>
                    <Link
                        className={`flex gap-x-2 items-start`}
                        href={'/about'}>
                        <FaPhone fill='white' size={20} /> <p className='flex flex-col'><span>Call: +234-93 923 3914,</span> 08065350031</p>
                    </Link>
                    <Link
                        className={`flex gap-x-2 items-start`}
                        href={'/contact'}>
                        <FaEnvelope fill='white' size={20} /> <p className='flex flex-col'><span>Email: favyscents@gmail.com,</span> kelechiorunta1@gmail.com</p>
                    </Link>

                </nav>
            </nav>

            <nav className='container max-w-full w-[70%] mx-auto mt-8 flex justify-evenly items-center gap-2'>
                <FaFacebook fill='white' size={20} />
                <FaTwitter fill='white' size={20} />
                <FaInstagram fill='white' size={20} />
                <FaInstagramSquare fill='white' size={20} />
            </nav>

            <hr className='block border-1 border-white container max-w-full w-[50%] mx-auto mt-8' />

            <p className={`${poppins.className} container text-white max-w-full w-[57%] mx-auto mt-8`}>
                ©2024 All Rights Reserved By AppWorld Inc. For enquiries, contact the developer on 08065350031.
            </p>
        </footer>
    )
}
