export const ClipperLogoSvg = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 240 240"
            className="w-full h-full"
        >
            <defs>
                <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FF9000" />
                    <stop offset="100%" stopColor="#FF5500" />
                </linearGradient>
            </defs>

            <rect x="40" y="100" width="160" height="100" rx="8" fill="url(#orangeGradient)" />

            <path d="M110 140 L140 150 L110 160 Z" fill="white" />

            <g>
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    values="0 40 100;-30 40 100;0 40 100"
                    dur="1s"
                    repeatCount="indefinite"
                />
                <path d="M40 60 L200 60 L200 100 L40 100 Z" fill="url(#orangeGradient)" />

                <line x1="80" y1="60" x2="80" y2="100" stroke="white" strokeWidth="2" />
                <line x1="120" y1="60" x2="120" y2="100" stroke="white" strokeWidth="2" />
                <line x1="160" y1="60" x2="160" y2="100" stroke="white" strokeWidth="2" />
            </g>
        </svg>
    )
}



export const UserSvg = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" fill="none" viewBox="0 0 19 18"><path fill="currentColor" d="m10.5 10.5.168-.47-.015-.006zM.5 17l-.485-.121.485.621zm18.485-.121-.74-2.962-.97.243.74 2.961zm-2.325-4.71-5.992-2.14-.336.942 5.992 2.14zm-9.995-1.485-4.305 1.49.327.944 4.305-1.49zM.752 13.93l-.737 2.949.97.242.737-2.949zm9.9-3.906L8.56 9.352l-.306.952 2.094.672zM.5 17.5h4v-1h-4zm1.86-5.327A2.5 2.5 0 0 0 .752 13.93l.97.242a1.5 1.5 0 0 1 .965-1.054zm15.885 1.744a2.5 2.5 0 0 0-1.585-1.748l-.336.942a1.5 1.5 0 0 1 .95 1.049zM13 5.5c0 2.266-1.62 4-3.5 4v1c2.539 0 4.5-2.296 4.5-5zm-3.5 4C7.62 9.5 6 7.766 6 5.5H5c0 2.704 1.961 5 4.5 5zM6 5.5c0-2.266 1.62-4 3.5-4v-1C6.961.5 5 2.796 5 5.5zm3.5-4c1.88 0 3.5 1.734 3.5 4h1c0-2.704-1.961-5-4.5-5z"></path></svg>
    )
}


export const menuItems = [
    { title: 'Home', href: '/' },
    { title: 'Buy Credits', href: '/account/credits' },
    { title: 'Team', href: '/team' },
    { title: 'Contact us', href: '/contactus' },
    { title: 'SignIn', href: '/signin' }
];







export const slides = [
    {
        id: 1,
        bgColor: "150, 70, 0",
        image: "https://unemanettealamain.fr/wp-content/uploads/2017/11/thor-ragnarok-poster-long.jpeg.webp",
        link: "/thor-ragnarok",
        actor: {
            name: "CHRIS HEMSWORTH",

            image: "https://ntvb.tmsimg.com/assets/assets/528854_v9_bb.jpg?w=360&h=480"
        },
        actress: {
            name: "TESSA THOMPSON",

            image: "https://i2.wp.com/parentsmag.net/wp-content/uploads/2022/02/Tessa-Thompson-Parents-Siblings.jpg"
        }
    },
    {
        id: 2,

        image: "https://assets-in.bmscdn.com/discovery-catalog/events/et00356724-tfpkwgckkd-landscape.jpg",
        link: "/pushpa2",
        bgColor: "100, 100, 0",
        actor: {
            name: "ALLU ARJUN",
            image: "https://assets.gqindia.com/photos/61d6ee38fe5bccb37e22fdad/master/pass/Allu%20Arjun%20in%20Pushpa%20The%20Rise.jpg"
        },
        actress: {
            name: "RASHMIKA MANDANA",
            image: "https://www.koimoi.com/wp-content/new-galleries/2024/08/when-rashmika-mandanna-opened-up-about-returning-home-in-tears-after-being-rejected.jpg"
        }
    },
    {
        id: 3,
        image: "https://img.nowrunning.com/content/movie/2019/kgf-c-24435/bg6.jpg",
        link: "/kgf-chapter-2",
        bgColor: "100, 0, 0",  // RGB values without rgba
        actor: {
            name: "YASH",
            image: "https://www.koimoi.com/wp-content/new-galleries/2022/04/kgf-chapter-2-box-office-001.jpg"
        },
        actress: {
            name: "SRINIDHI SHETTY",
            image: "https://i.pinimg.com/736x/8d/09/8d/8d098dd347215b957ef219307e0d7427.jpg"
        }
    }
];





export const centerHeroimages = [
    { url: "https://qqcdnpictest.mxplay.com/pic/d81b19b7c9f639e0dfffc12e7b440dc1/en/2x3/312x468/bb48f1346dd53414aa366e3a4b57b555_1280x1920.webp" },
    { url: "https://e1.pxfuel.com/desktop-wallpaper/49/663/desktop-wallpaper-new-movie-posters-hollywood-movie-2022-thumbnail.jpg" },
    { url: "https://i.pinimg.com/474x/92/74/22/92742208b64ff099ca3b652d9b6924a3.jpg" },
    { url: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00383474-klabltwbvz-portrait.jpg" },
    { url: "https://rukminim2.flixcart.com/image/750/900/jn3hocw0/poster/y/y/u/medium-hollywood-movie-wall-poster-pirates-of-the-caribbean-dead-original-imaf9uuy7ubsybhg.jpeg?q=20&crop=false" },
    { url: "https://e1.pxfuel.com/desktop-wallpaper/172/531/desktop-wallpaper-2876x4097-robin-hood-2018-taron-egerton-taron-egerton.jpg" },
    { url: "https://e1.pxfuel.com/desktop-wallpaper/348/965/desktop-wallpaper-hawkeye-infinity-stones-iphone-png-vector-psd-clipart-templates-hawkeye-iphone-thumbnail.jpg" },
    { url: "https://www.scrolldroll.com/wp-content/uploads/2023/08/Virupaksha-Best-Tamil-Movies-of-2023.jpg" },
    { url: "https://wallpapercave.com/wp/wp1866759.png" },
    { url: "https://e1.pxfuel.com/desktop-wallpaper/372/952/desktop-wallpaper-parallax-com-i-frankenstein-movie-i-frankenstein-thumbnail.jpg" }
];


export const centerHeroData = [
    {
        id: 1,
        title: "Random Title 1",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia.",
        url: "https://qqcdnpictest.mxplay.com/pic/d81b19b7c9f639e0dfffc12e7b440dc1/en/2x3/312x468/bb48f1346dd53414aa366e3a4b57b555_1280x1920.webp"
    },
    {
        id: 2,
        title: "Random Title 2",
        text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        url: "https://e1.pxfuel.com/desktop-wallpaper/49/663/desktop-wallpaper-new-movie-posters-hollywood-movie-2022-thumbnail.jpg"
    },
    {
        id: 3,
        title: "Random Title 3",
        text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        url: "https://i.pinimg.com/474x/92/74/22/92742208b64ff099ca3b652d9b6924a3.jpg"
    },
    {
        id: 4,
        title: "Random Title 4",
        text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        url: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00383474-klabltwbvz-portrait.jpg"
    },
    {
        id: 5,
        title: "Random Title 5",
        text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        url: "https://rukminim2.flixcart.com/image/750/900/jn3hocw0/poster/y/y/u/medium-hollywood-movie-wall-poster-pirates-of-the-caribbean-dead-original-imaf9uuy7ubsybhg.jpeg?q=20&crop=false"
    },
    {
        id: 6,
        title: "Random Title 6",
        text: "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit.",
        url: "https://e1.pxfuel.com/desktop-wallpaper/172/531/desktop-wallpaper-2876x4097-robin-hood-2018-taron-egerton-taron-egerton.jpg"
    },
    {
        id: 7,
        title: "Random Title 7",
        text: "Aliquam erat volutpat. Integer ut neque nec odio tincidunt auctor. Curabitur in augue libero.",
        url: "https://e1.pxfuel.com/desktop-wallpaper/348/965/desktop-wallpaper-hawkeye-infinity-stones-iphone-png-vector-psd-clipart-templates-hawkeye-iphone-thumbnail.jpg"
    },
    {
        id: 8,
        title: "Random Title 8",
        text: "Duis a metus ac ante convallis tincidunt. Ut ultricies urna at purus varius, non mollis nulla blandit.",
        url: "https://www.scrolldroll.com/wp-content/uploads/2023/08/Virupaksha-Best-Tamil-Movies-of-2023.jpg"
    },
    {
        id: 9,
        title: "Random Title 9",
        text: "Proin consequat, magna vel condimentum feugiat, ipsum purus efficitur nunc, nec ullamcorper enim purus in leo.",
        url: "https://wallpapercave.com/wp/wp1866759.png"
    },
    {
        id: 10,
        title: "Random Title 10",
        text: "Vestibulum vitae dui ac metus elementum laoreet. Nam ac urna et ante auctor sollicitudin at eget eros.",
        url: "https://e1.pxfuel.com/desktop-wallpaper/372/952/desktop-wallpaper-parallax-com-i-frankenstein-movie-i-frankenstein-thumbnail.jpg"
    }
];
