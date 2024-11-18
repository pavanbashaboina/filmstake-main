"use client"

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Cinzel } from 'next/font/google';
import Link from 'next/link';

const cinzel = Cinzel({ subsets: ['latin'] });

const NavigatePages = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const menuRef = useRef(null);
    const textRefs = useRef([]);
    const lineRefs = useRef([]);

    const menuItems = [
        {
            title: "BUY CREDITS",
            description: "Invest with credits",
            pageUrl: "/account/credits"
        },
        {
            title: "TEAM",
            description: "Teamup with us",
            pageUrl: "/team"
        },
        {
            title: "CONTACT US",
            description: "Our social medias",
            pageUrl: "contactus"
        },
        {
            title: "SIGNIN",
            description: "signed up to start your journey",
            pageUrl: "/signin"
        }
    ];

    // Initialize refs arrays
    useEffect(() => {
        textRefs.current = textRefs.current.slice(0, menuItems.length);
        lineRefs.current = lineRefs.current.slice(0, menuItems.length);
    }, []);

    useEffect(() => {
        if (!menuRef.current) return;

        // Initial setup for text overlays and lines
        textRefs.current.forEach((ref) => {
            if (ref) {
                gsap.set(ref, {
                    opacity: 0,
                    y: 20,
                    visibility: 'hidden'
                });
            }
        });

        lineRefs.current.forEach((ref) => {
            if (ref) {
                gsap.set(ref, { width: 0 });
            }
        });

        // Animate menu items on mount
        gsap.to(menuRef.current.children, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out"
        });
    }, []);

    const handleMouseEnter = (index) => {
        setActiveIndex(index);
        const textRef = textRefs.current[index];
        const lineRef = lineRefs.current[index];

        if (!textRef || !lineRef) return;

        // Make text visible first
        gsap.set(textRef, {
            visibility: 'visible'
        });

        // Create timeline for coordinated animation
        const tl = gsap.timeline();

        // Animate text overlay
        tl.to(textRef, {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: "power3.out",
        });

        // Animate line
        tl.to(lineRef, {
            width: "100%",
            duration: 0.4,
            ease: "power2.out",
        }, "-=0.4");
    };

    const handleMouseLeave = (index) => {
        setActiveIndex(null);
        const textRef = textRefs.current[index];
        const lineRef = lineRefs.current[index];

        if (!textRef || !lineRef) return;

        const tl = gsap.timeline();

        // Animate text out
        tl.to(textRef, {
            opacity: 0,
            y: 20,
            duration: 0.3,
            ease: "power3.in",
            onComplete: () => {
                gsap.set(textRef, {
                    visibility: 'hidden'
                });
            }
        });

        // Animate line back
        tl.to(lineRef, {
            width: 0,
            duration: 0.4,
            ease: "power2.out",
        }, "-=0.4");
    };

    return (
        <div className="relative  flex items-center ">
            <div
                ref={menuRef}
                className="w-full max-w-4xl mx-auto px-8 pb-32"
            >
                {menuItems.map((item, index) => (
                    <Link href={item.pageUrl} key={index}>
                        <div
                            className="relative"
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={() => handleMouseLeave(index)}
                        >
                            <div className="flex items-center justify-between py-8 cursor-pointer group">
                                <h2
                                    className={`${cinzel.className} text-4xl font-light tracking-wider`}
                                >
                                    {item.title}
                                </h2>
                                <div className="w-8">
                                    <svg
                                        viewBox="0 0 24 24"
                                        className="w-full transform transition-transform group-hover:translate-x-2"
                                    >
                                        <path
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            d="M3,12 L21,12 M15,6 L21,12 L15,18"
                                        />
                                    </svg>
                                </div>
                            </div>

                            {/* Animated underline */}
                            <div
                                ref={el => lineRefs.current[index] = el}
                                className="absolute bottom-0 left-0 h-px bg-foreground"
                            />

                            {/* Text overlay */}
                            <div
                                ref={el => textRefs.current[index] = el}
                                className="absolute bottom-2 left-0 text-gray-500"
                            >
                                <p className="text-lg font-light">{item.description}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default NavigatePages;