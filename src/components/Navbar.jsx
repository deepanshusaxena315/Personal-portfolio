import React, { useEffect } from 'react'
import { cn } from '../lib/util'
import { useState } from 'react'
import { X } from 'lucide-react'
import { Menu } from 'lucide-react'

const Navitems = [
    {name:"Home",href:"#hero"},
    {name:"About",href:"#about"},
    {name:"Skills",href:"#skills"},
    {name:"Projects",href:"#projects"},
    {name:"Contact",href:"#contact"},
];
const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(()=>{
        const handleScroll =()=>{
            setIsScrolled(window.scrollY >10);
        }
        window.addEventListener("scroll",handleScroll);
        return () => window.removeEventListener("scroll",handleScroll);
    },[])


  return (
    <nav className={cn("fixed w-full transition-all duration-300 z-50",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
    )}>
      <div className='container flex items-center justify-between'>
        <a className='font-bold text-xl text-primary flex items-center'
            href='#hero'>
            <span className='relative z-10'>
                <span className='text-glow text-foreground'>Deepanshu</span>{" "} Portfolio
            </span>
        </a>
        {/* desktop navbar */}
        <div className='hidden md:flex space-x-8'>
            {Navitems.map((item,key)=>(
                <a className='hover:text-primary text-foreground/80 transition-colors duration-300'
                 key={key} href={item.href}> {item.name}</a>
            ))}
        </div>

        {/* mobile navbar */}
        <button 
            onClick={()=>setIsMenuOpen((prev)=>(!prev))}
            className='md:hidden z-50 p-2 text-foreground'
            aria-label={isMenuOpen? "Close Menu": "Open Menu"}
            >{isMenuOpen ? <X size={24}/>: <Menu size={24}/>}
        </button>

        <div className={cn("fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen ? "opacity-100 pointer-events-auto":
                        "opacity-0 pointer-events-none"
        )}>
            <div className='flex flex-col space-y-8 text-xl'>
            {Navitems.map((item,key)=>(
                <a className='hover:text-primary text-foreground/80 transition-colors duration-300'
                    onClick={()=>setIsMenuOpen(false)}
                 key={key} href={item.href}> {item.name}</a>
            ))}
            </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
