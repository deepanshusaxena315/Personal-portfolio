import { Bluetooth, Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"
import { cn } from "../lib/util"

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(true)

    useEffect(() => {
        const savedtheme = localStorage.getItem("theme");
        if(savedtheme ==="dark"){
            setIsDarkMode(true);
            document.documentElement.classList.add('dark');
        }
        if(savedtheme === "light"){
            document.documentElement.classList.remove('dark');
            setIsDarkMode(false);
        }
    }, [])
    
    

    const toggletheme = ()=>{
        if(isDarkMode){
            document.documentElement.classList.remove('dark');
            setIsDarkMode(false);
            localStorage.setItem("theme","light")
        }else{
            setIsDarkMode(true);
            document.documentElement.classList.add('dark');
            localStorage.setItem("theme","dark")
        }
    }
  return (
    <button 
        onClick={toggletheme}
        className={cn(
            "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
            "focus:outline-hidden"
        )}
    >
        {isDarkMode ? <Sun className="h-6 w-6 text-yellow-300"/>:<Moon className="h-6 w-6 text-blue-900"/>}
    </button>
  )
}

