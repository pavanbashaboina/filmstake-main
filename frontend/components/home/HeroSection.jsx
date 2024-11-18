"use client"

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Link from 'next/link';
import { slides } from '@/lib/utils/helper';


const MinimalSlider = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const containerRef = useRef(null);
    const previewRefs = useRef([]);
    const bgRef = useRef(null);
    const mainImageRef = useRef(null);
    const castContainerRef = useRef(null);

    useEffect(() => {
        // Initial setup of images
        gsap.set('.preview-image', {
            scale: 0.8,
            opacity: 0.7,
            filter: 'grayscale(100%)',
            transformOrigin: 'center center'
        });

        gsap.set(`.preview-image-${activeIndex}`, {
            scale: 1,
            opacity: 1,
            filter: 'grayscale(0%)'
        });

        // Set up auto-slide interval
        const interval = setInterval(() => {
            if (!isPaused && !isAnimating) {
                const nextIndex = (activeIndex + 1) % slides.length;
                animateSlideChange(nextIndex);
            }
        }, 5000);

        return () => clearInterval(interval);
    }, [activeIndex, isPaused, isAnimating]);

    const animateSlideChange = (newIndex) => {
        if (isAnimating || newIndex === activeIndex) return;
        
        setIsAnimating(true);

        // Fade out cast container and main image
        gsap.to([mainImageRef.current, castContainerRef.current], {
            opacity: 0,
            duration: 0.4,
            ease: "power2.inOut",
            onComplete: () => {
                setActiveIndex(newIndex);
                // Fade in cast container and main image
                gsap.to([mainImageRef.current, castContainerRef.current], {
                    opacity: 1,
                    duration: 0.4,
                    ease: "power2.inOut",
                    onComplete: () => setIsAnimating(false)
                });
            }
        });

        // Animate preview images
        gsap.to('.preview-image', {
            scale: 0.8,
            opacity: 0.3,
            filter: 'grayscale(100%)',
            duration: 0.4,
            ease: "power2.inOut"
        });

        gsap.to(`.preview-image-${newIndex}`, {
            scale: 1,
            opacity: 1,
            filter: 'grayscale(0%)',
            duration: 0.4,
            ease: "power2.inOut"
        });
    };

    const handleMouseEnter = () => setIsPaused(true);
    const handleMouseLeave = () => setIsPaused(false);

    const getSlideBackground = (index) => {
        const defaultColor = "128, 128, 128";
        const color = slides[index]?.bgColor || defaultColor;
        
        return `
            radial-gradient(
                circle at top,
                rgba(${color}, 0.3) 0%,
                transparent 70%
            ),
            radial-gradient(
                circle at bottom,
                rgba(${color}, 0.2) 0%,
                transparent 70%
            )
        `;
    };

    const CastCard = ({ data }) => (
        <div 
            className="cast-card w-full h-48 bg-black/30 rounded-lg overflow-hidden group cursor-pointer hover:bg-black/40 transition-all duration-300"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="relative h-full">
                <img
                    src={data.image}
                    alt={data.name}
                    className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-end p-4 md:p-6 text-center bg-gradient-to-t from-black/60 to-transparent">
                    <h2 className="text-white text-lg md:text-xl font-medium tracking-wider transform group-hover:scale-105 transition-transform">
                        {data.name}
                    </h2>
                </div>
            </div>
        </div>
    );

    const PreviewImage = ({ slide, index }) => (
        <div
            ref={el => previewRefs.current[index] = el}
            className={`preview-image preview-image-${index} relative group cursor-pointer`}
            onClick={() => animateSlideChange(index)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className={`
                w-20 h-20 
                sm:w-24 sm:h-24 
                lg:w-28 lg:h-28
                xl:w-32 xl:h-32
                rounded-lg overflow-hidden
                transition-all duration-300
                ${activeIndex === index ? 'ring-2 ring-white/50' : ''}
            `}>
                <img
                    src={slide.image}
                    alt={`Preview ${index + 1}`}
                    className="w-full h-full object-cover transition-all duration-500"
                />
                <div className={`
                    absolute inset-0 
                    bg-black/40 
                    transition-opacity duration-300
                    ${activeIndex === index ? 'opacity-0' : 'opacity-100'}
                    group-hover:opacity-0
                `}/>
            </div>
        </div>
    );

    return (
        <div className="w-full min-h-screen relative pt-[15vh] md:pt-[18vh] pb-5 overflow-hidden">
            <div 
                ref={bgRef}
                className="absolute inset-0 opacity-90"
                style={{
                    background: getSlideBackground(activeIndex)
                }}
            />
            
            <div ref={containerRef} className="relative max-w-[1920px] mx-auto px-4 md:px-8 lg:px-12">
                <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
                    <div 
                        ref={castContainerRef}
                        className="order-2 lg:order-1 w-full lg:w-auto"
                    >
                        <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-6">
                            <CastCard data={slides[activeIndex].actor} />
                            <CastCard data={slides[activeIndex].actress} />
                        </div>
                    </div>

                    <div className="order-1 lg:order-2 w-full">
                        <Link href={slides[activeIndex].link}>
                            <div 
                                className="relative aspect-[16/9] w-full max-w-[800px] mx-auto overflow-hidden rounded-lg cursor-pointer group"
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                <img
                                    ref={mainImageRef}
                                    src={slides[activeIndex].image}
                                    className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                        </Link>
                    </div>

                    <div className="order-3 flex flex-row lg:flex-col items-center justify-center gap-4 lg:gap-6">
                        {slides.map((slide, index) => (
                            <PreviewImage key={slide.id} slide={slide} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MinimalSlider;