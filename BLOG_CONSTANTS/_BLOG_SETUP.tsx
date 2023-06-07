import { LogoType, NavbarType } from "../src/shared/enums";
import { IAuthor, iNavSetup, iSEO } from "../src/shared/interfaces";
import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin, AiFillInstagram, AiFillYoutube } from "react-icons/ai";

/**
 * EXAMPLE AUTHOR
 * 
 export const AUTHOR_NAME: IAuthor = {
    name: "Full Name",
    designation: "Work Designation",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    profilePic: "",
     social: [
        {
            icon: <AiFillGithub />,
            link: 'https://github.com/'
        },
        {
            icon: <AiFillLinkedin />,
            link: 'https://www.linkedin.com/'
        },
    ]
}
 */

export const MAYUR: IAuthor = {
    name: "Hazard Game Studios",
    designation: "Developer",
    bio: "We make games.",
    profilePic: "",
    social: [
        {
            icon: <AiFillGithub />,
            link: 'https://github.com/bzeier'
        },
    ]
}

export const RUPALI: IAuthor = {
    name: "Hazard Game Studios",
    designation: "Developer",
    bio: "We make games.",
    profilePic: "",
    social: [
        {
            icon: <AiFillGithub />,
            link: 'https://github.com/bzeier'
        },
    ]
}


// This can your company name / your name etc for SEO purposes
export const WEBSITE_NAME: string = 'Hazard Game Studios devlog';
export const WEBSITE_URL: string = 'https://nextjs-simple-blog-template.web.app/';

/**
 * This is the main navigation setup.
 * This includes the main navbar and the side drawer.
 */
export const PRIMARY_NAV: iNavSetup = {
    type: NavbarType.DEFAULT,
    // max logo image height 40px
    // you can add logo light version if using image
    // logo: {
    //     type: LogoType.IMAGE,
    //     logo: '/images/logo.png',
    //     logoLight: '/images/logo-light.png'
    // },
    logo: {
        type: LogoType.TEXT,
        logo: 'HGS Devlog',
    },
    // navLinks are the main navbar links that apper on top of every page
    navLinks: [
        {
            label: 'Home',
            path: '/'
        },
        {
            label: 'About Us',
            path: '/about-us'
        },
        {
            // to open a link in new tab pass newTab: true
            label: 'Support Us',
            path: 'https://www.buymeacoffee.com/webexpe13z',
            newTab: true
        },
        {
            label: 'Github Repo',
            path: 'https://github.com/webexpe13/blog-template-using-nextjs-typescript-tailwindcss',
            newTab: true
        },
        {
            label: 'Contact Us',
            path: '/contact-us'
        }
    ],
    // sideNavLinks are the links which appear when you open the side menu after clicking the burger menu icon.
    sideNavLinks: [
        {
            label: 'Home',
            path: '/'
        },
        {
            // for categories dont add path and add type: dropdown
            label: 'Blog',
            type: 'dropdown',
            path: ''
        },
        {
            label: 'About Us',
            path: '/about-us'
        },
        {
            label: 'Support Us',
            path: 'https://www.buymeacoffee.com/webexpe13z',
            newTab: true
        },
        {
            label: 'Github Repo',
            path: 'https://github.com/webexpe13/blog-template-using-nextjs-typescript-tailwindcss',
            newTab: true
        },
        {
            label: 'Contact Us',
            path: '/contact-us'
        }
    ],
    socials: [
        {
            link: 'https://www.instagram.com/hazardgamestudio',
            icon: <AiFillInstagram />
        },
        {
            link: 'https://twitter.com/hazardgamestudios',
            icon: <AiOutlineTwitter />
        },
        {
            link: 'https://www.youtube.com/@SlingshotStudios-cw5mg',
            icon: <AiFillYoutube />
        },
    ]
}

export const DEFAULT_SEO: iSEO = {
    title: "Hazard Game Studios Devlog",
    description: "A blog containing my progress on my games",
    keywords: "Blog, next js, indiegames, games, towns, minecraft, villagers, rpg, hazard game studios",
    url: WEBSITE_URL,
    author: `${MAYUR.name}, ${RUPALI.name}`,
    twitterHandle: '@WebExpe',
    ogImage: '/public/images/og-image.jpg'
}