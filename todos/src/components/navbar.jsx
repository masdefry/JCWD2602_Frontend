import Image from 'next/image'

export default function Navbar(){
    return(
        <>
               {/* Mobile */}
                <div className='flex justify-between px-5 py-5 md:px-32 lg:px-32 bg-white'>
                    {/* Left */}
                    <div className='block md:hidden lg:hidden'>
                        English 
                    </div>
                    <div className='hidden md:block lg:block'>
                        <Image 
                            src='/images/Logo2.jpg'
                            width={100}
                            height={100}
                            alt='Logo'
                        />
                    </div>

                    {/* Center */}
                    <div className='block md:hidden lg:hidden'>
                        <Image 
                            src='/images/Logo2.jpg'
                            width={100}
                            height={100}
                            alt='Logo'
                        />
                    </div>
                    <div className='gap-5 hidden md:flex lg:flex'>
                        <div>
                            Menu-1
                        </div>
                        <div>
                            Menu-2
                        </div>
                    </div>

                    {/* Right */}
                    <div className='block md:hidden lg:hidden'> 
                        Icon Menu
                    </div>
                    <div className='hidden md:block lg:block'>
                        English 
                    </div>
                </div>
        </>
    )
}