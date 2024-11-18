"use client"

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Cinzel } from 'next/font/google';
import { Film, Wallet, Bell, TrendingUp } from 'lucide-react';

const cinzel = Cinzel({ subsets: ['latin'] });

const JourneySteps = () => {
  const containerRef = useRef(null);
  const stepsRef = useRef([]);
  const linesRef = useRef([]);

  const steps = [
    {
      title: "Select Good Movie",
      description: "Choose from carefully curated blockbuster opportunities",
      icon: Film,
    },
    {
      title: "Invest in Movie",
      description: "Simple and secure investment process",
      icon: Wallet,
    },
    {
      title: "Get Updates",
      description: "Stay informed about production progress",
      icon: Bell,
    },
    {
      title: "Earn Profits",
      description: "Share the success when the movie hits big",
      icon: TrendingUp,
    }
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const masterTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%", // Start earlier
        end: "center center", // End at center of viewport
        toggleActions: "play reverse restart reverse",
        markers: false,
        scrub: 1, // Smooth scrubbing effect
      }
    });

    // Animate each step and its line sequentially
    stepsRef.current.forEach((step, index) => {
      // Calculate progress point for this step (0 to 1)
      const progress = index / (steps.length - 1);
      
      // Step animation
      masterTimeline.fromTo(step,
        {
          opacity: 0,
          y: 50
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.15, // Shorter duration relative to total timeline
        },
        progress * 0.7 // Start at proportional point in timeline
      );

      // Line animation (if not the last step)
      if (index < steps.length - 1) {
        masterTimeline.fromTo(linesRef.current[index],
          {
            height: 0,
            opacity: 0
          },
          {
            height: "4rem",
            opacity: 1,
            duration: 0.15,
          },
          `>-=0.1` // Slightly overlap with step animation
        );
      }
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="min-h-screen flex items-center justify-center"
    >
      <div className="max-w-2xl w-full px-8">
        <h2 
          className={`${cinzel.className} text-4xl font-medium mb-20 text-center text-amber-700`}
        >
          Your Journey to Profit
        </h2>
        
        <div className="relative">
          {steps.map((step, index) => (
            <div
              key={index}
              ref={el => stepsRef.current[index] = el}
              className="flex items-start gap-6 mb-12 relative"
            >
              <div 
                className="relative flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-amber-600 to-yellow-500 shrink-0"
              >
                <step.icon 
                  className="w-6 h-6 text-yellow-100" 
                />
                {index < steps.length - 1 && (
                  <div
                    ref={el => linesRef.current[index] = el}
                    className="absolute left-1/2 w-[2px] -translate-x-1/2"
                    style={{
                      top: "3rem",
                      background: "linear-gradient(180deg, rgba(217, 119, 6, 1) 0%, rgba(217, 119, 6, 0.3) 100%)"
                    }}
                  />
                )}
              </div>
              <div className="flex-1 pt-1">
                <h3 
                  className="text-xl font-semibold mb-1 text-amber-800"
                >
                  {step.title}
                </h3>
                <p 
                  className="text-amber-700"
                >
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JourneySteps;