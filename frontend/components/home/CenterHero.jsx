'use client';

import React, { useRef, useEffect } from 'react';
import { Cinzel } from 'next/font/google';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import ReactLenis from '@studio-freight/react-lenis';
import Card from './Card';

const cinzel = Cinzel({ subsets: ['latin'] });

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const CenterHero = () => {
  const container = useRef(null);
  const cardRefs = useRef([]);
  const headerRef = useRef(null);

  const cards = [
    { id: 1, backText: 'Professional Movie Production' },
    { id: 2, backText: 'Invest in a movie at your comfort' },
    { id: 3, backText: 'Most secure' },
    { id: 4, backText: 'start at just RS 1000' },
  ];

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const positions = [15, 35, 65, 85];
    const rotations = [-15, -5, 5, 15];
    const cards = cardRefs.current;
    const cardWrappers = cards.map((card) =>
      card.querySelector('.card-wrapper .flip-card-inner')
    );

    gsap.set(cards, {
      left: '50%',
      top: '50%',
      xPercent: -50,
      yPercent: -50,
      rotation: 0,
      opacity: 0,
      scale: 0.8,
    });

    gsap.set(cardWrappers, {
      rotationY: 0,
    });

    gsap.fromTo(
      headerRef.current,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.5,
        ease: 'power3.out',
      }
    );

    gsap.to(cards, {
      opacity: 1,
      scale: 1,
      stagger: 0.1,
      duration: 0.8,
      delay: 0.8,
      ease: 'power3.out',
    });

    const totalHeight = window.innerHeight * 3;

    const mainTrigger = ScrollTrigger.create({
      trigger: container.current,
      start: 'top top',
      end: `+=${totalHeight}`,
      pin: true,
      pinSpacing: true,
      scrub: 1,
    });

    const spreadTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: 'top 40%',
        end: `+=${totalHeight*1.3}`,
        scrub: 1,
      },
    });

    cards.forEach((card, index) => {
      spreadTimeline.to(
        card,
        {
          left: `${positions[index]}%`,
          top: '50%',
          rotation: rotations[index],
          scale: 1,
          ease: 'power2.inOut',
        },
        0
      );
    });

    cardWrappers.forEach((wrapper, index) => {
      spreadTimeline.to(
        wrapper,
        {
          rotationY: 180,
          ease: 'power2.inOut',
          duration: 0.5,
        },
        0.5
      );
    });

    return () => {
      if (mainTrigger) mainTrigger.kill();
      spreadTimeline.kill();
    };
  }, []);

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5 }}>
    <div ref={container} className="w-full min-h-screen max-lg:h-[120vh] bg-background">
        <div className="relative w-full h-full overflow-hidden">
            <div
                ref={headerRef}
                className={`absolute top-[15vh] left-1/2 transform -translate-x-1/2 mb-[25vh] text-center opacity-0 ${cinzel.className}`}
            >
                <h1 className="text-5xl md:text-6xl font-semibold text-foreground mb-4 text-center">
                    How we profit you
                </h1>
            </div>
          <div className="cards relative  mt-[13vh] w-full h-full ">
            {cards.map((card, index) => (
              <Card
                key={card.id}
                {...card}
                ref={(el) => (cardRefs.current[index] = el)}
              />
            ))}
          </div>
        </div>
      </div>
    </ReactLenis>
  );
};

export default CenterHero;
