import React from 'react'

const HeroSection = () => {
  return (
    <section
        id='hero'
        className='relative min-h-screen flex flex-col items-center justify-center px-4'>
        <div className='container max-w-4xl mx-auto text-center z-10'>
            <div className='space-y-6'>
                <h1 className='text-4xl md:text-6xl font-bold tracking-tight'>
                    <span className='opacity-0 animate-fade-in'>Hi, I'm</span>
                    <span className='opacity-0 text-primary animate-fade-in-delay-1'> Deepanshu</span>
                    <span className='opacity-0 text-gradient ml-2 animate-fade-in-delay-2'> Saxena</span>
                </h1>
                <p className='text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3'>
                    Hi i make websites
                </p>
                <div className='pt-4 opacity-0 animate-fade-in-delay-4'>
                    <a href="#projects" className='cosmic-button'>
                        View My Work
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection
