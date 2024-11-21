import React from 'react';
import Link from 'next/link';
import { Cinzel } from "next/font/google";

const cinzel = Cinzel({ subsets: ["latin"] });

const Footer = () => {
    return (
        <footer className="py-8 md:py-16 relative bg-background w-full overflow-hidden">
            {/* Gradient overlay using theme colors */}
            <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-muted/50 to-muted opacity-80"></div>

            {/* Accent line using theme colors */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-30"></div>

            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Logo and Copyright */}
                    <div className="space-y-4">
                        <div className="text-2xl md:text-3xl font-bold">
                            <h1 className={`${cinzel.className} text-primary`}>
                                FILMSTAKE
                            </h1>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            © 2024. All Rights Reserved
                        </p>
                    </div>

                    {/* Explore Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-primary">
                            Explore
                        </h3>
                        <ul className="space-y-2">
                            {['Buy Credits', 'Team', 'Contact Us', 'SignIn'].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={`/${item.toLowerCase().replace(' ', '-')}`}
                                        className="text-muted-foreground hover:text-primary transition-colors duration-300"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* About Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-primary">
                           What we do
                        </h3>
                        <p className="text-muted-foreground text-base leading-relaxed">
                            Movie and profits should not be permitted to only certain people it should be very one's investment.
                        </p>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-primary">
                            Connect With Us
                        </h3>
                        <div className="flex flex-wrap gap-4">
                            {[{social:"Twitter",link:""}, {social:"Linkedin",link:""}, {social:"Instagram",link:"https://www.instagram.com/filmstake_co?igsh=MTJpNjIyM3pyZnJnYw=="}].map((social,i) => (
                                <Link
                                    key={i}
                                    href={social.link}
                                    target='_blank'
                                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                                >
                                    {social.social}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-border relative">
                    <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-30"></div>
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                            <span className="whitespace-nowrap">Privacy Policy</span> 
                            <span className="mx-2">|</span> 
                            <span className="whitespace-nowrap">Terms of Service</span>
                        </div>
                        <Link 
                            target='_blank' 
                            href="https://www.linkedin.com/in/pavan-bashaboina-ba7275333" 
                            className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                        >
                            Built by Pavan Bashaboina SWE
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;