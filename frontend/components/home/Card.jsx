import Image from 'next/image';
import { Cinzel } from 'next/font/google';
import React, { forwardRef } from 'react';

const cinzel = Cinzel({ subsets: ['latin'] });

const Card = forwardRef(({ id, frontSrc, frontAlt, backText }, ref) => {
  const gradients = {
    1: 'bg-gradient-to-br from-black  to-yellow-800',
    2: 'bg-gradient-to-br from-yellow-900 via-black to-yellow-800',
    3: 'bg-gradient-to-tl from-black  to-yellow-800',
    4: 'bg-gradient-to-tr from-yellow-900 via-black to-yellow-800',
  };


  return (
    <div
      className={`${cinzel.className} card absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[360px] transition-opacity duration-300 ease-in-out opacity-0 scale-80 perspective-[1000px]`}
      id={`card-${id}`}
      ref={ref}
    >
      <div className="card-wrapper max-md:w-[50%] max-lg:w-[80%] max-md:h-[70%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full transform-style-3d h-full animate-floating">
        <div className="flip-card-inner relative w-full h-full transform-style-3d">
          {/* Front of card */}
          <div className="flip-card-front absolute w-full h-full backface-hidden rounded-lg overflow-hidden">
            <Image
              className="w-full h-full object-cover"
              priority
              src="https://cdn.pixabay.com/photo/2013/07/13/13/45/playing-card-161489_1280.png"
              alt="g"
              width={500}
              height={500}
            />
          </div>

          {/* Back of card with royal decorations */}
          <div className={`flip-card-back absolute w-full h-full backface-hidden rounded-lg overflow-hidden ${gradients[id]} transform rotate-y-180`}>
            {/* Main decorative elements */}
            <div className="absolute inset-0">
              {/* Inner border with golden glow */}
              <div className="absolute inset-4 border-2 border-yellow-400/40 rounded-lg shadow-[inset_0_0_15px_rgba(251,191,36,0.2)]"></div>

              {/* Corner decorations with curves */}
              <div className="absolute top-2 left-2 w-12 h-12">
                <div className="absolute w-full h-full border-t-2 border-l-2 border-yellow-400/60 rounded-tl-xl"></div>
                <div className="absolute inset-0 border-t-2 border-l-2 border-yellow-400/30 rounded-tl-2xl transform scale-75 origin-bottom-right"></div>
              </div>
              <div className="absolute top-2 right-2 w-12 h-12">
                <div className="absolute w-full h-full border-t-2 border-r-2 border-yellow-400/60 rounded-tr-xl"></div>
                <div className="absolute inset-0 border-t-2 border-r-2 border-yellow-400/30 rounded-tr-2xl transform scale-75 origin-bottom-left"></div>
              </div>
              <div className="absolute bottom-2 left-2 w-12 h-12">
                <div className="absolute w-full h-full border-b-2 border-l-2 border-yellow-400/60 rounded-bl-xl"></div>
                <div className="absolute inset-0 border-b-2 border-l-2 border-yellow-400/30 rounded-bl-2xl transform scale-75 origin-top-right"></div>
              </div>
              <div className="absolute bottom-2 right-2 w-12 h-12">
                <div className="absolute w-full h-full border-b-2 border-r-2 border-yellow-400/60 rounded-br-xl"></div>
                <div className="absolute inset-0 border-b-2 border-r-2 border-yellow-400/30 rounded-br-2xl transform scale-75 origin-top-left"></div>
              </div>

              {/* Diagonal stripes with golden tint */}
              <div className="absolute inset-0 overflow-hidden opacity-10">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute h-px w-full bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-200 origin-left"
                    style={{
                      transform: `rotate(45deg) translateY(${i * 40}px)`,
                    }}
                  ></div>
                ))}
              </div>

              {/* Central decorative circle */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 border-2 border-yellow-400/20 rounded-full"></div>
                <div className="absolute w-24 h-24 border border-yellow-400/10 rounded-full"></div>
              </div>
            </div>

            {/* Text content */}
            <div className="absolute inset-0 flex items-center justify-center p-6">
              <p className="text-yellow-50 text-center max-md:text-base max-md:font-bold text-2xl font-medium drop-shadow-lg">
                {backText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Card;