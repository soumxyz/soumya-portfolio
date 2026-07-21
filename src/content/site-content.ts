export const siteOrigin = "https://soumyacodes.vercel.app";



export type FooterLinkItem = {
    title: string;
    href: string;
};

export type PortfolioProjectItem = {
    company: string;
    year: string;
    title: string;
    results: string[];
    link: string;
    linkText: string;
};

export type TestimonialItem = {
    name: string;
    position: string;
    text: string;
};

export const email = "nayaksoumya072005@gmail.com";



export const footerLinks: FooterLinkItem[] = [
    {
        title: "Twitter",
        href: "https://x.com/soumxyz05",
    },
    {
        title: "Github",
        href: "https://github.com/soumxyz",
    },
    {
        title: "LinkedIn",
        href: "www.linkedin.com/in/soumxyz",
    },
    {
        title: "Resume",
        href: "https://drive.google.com/file/d/1Vv8yipcNXy3kQo61ktgnxbeoTsmTLiKQ/view?usp=sharing",
    },
];

export const portfolioProjects: PortfolioProjectItem[] = [
    {
        company: "Homoai",
        year: "2026",
        title: "Your data, Empowering AI",
        results: [
            "a platform where companies collect user generated data and reward participants through task based interactions.",
            "Built responsive UI components using React , Typescript , TailwindCSS and Vite with a focus on reusable components and performance",
            "Built reusable React components and integrated frontend workflows with Backend APIs using Typescript and TailwindCSS",
        ],
        link: "https://homoai.online",
        linkText: "View Live Site",
    },
    {
        company: "ShareRoom",
        year: "2025",
        title: "Share Code Instantly and Anonymously",
        results: [
            "Create temporary chat rooms instantly without any signup required.",
            "Built with real-time syncing for seamless collaboration.",
            "Features a sleek and modern UI for an anonymous coding experience.",
        ],
        link: "https://shareroom.vercel.app/",
        linkText: "View Live Site",
    },

    {
        company: "Seasoserve",
        year: "2025",
        title: "Nature guides, we serve",
        results: [
            "Built an AI-driven system to suggest food based on the environment user is in",
            "Designed and developed a sleek, responsive user interface using react tailwind css, incorporating clean, minimalist aesthetic principles for an enhanced user experience.",
            "Integrated backend REST APIs / Machine Learning inference pipelines to display results dynamically with tailored visual indicators and metrics.",
        ],
        link: "https://seasoserve.vercel.app",
        linkText: "View Live Site",
    },

];

export const testimonials: TestimonialItem[] = [
    {
        name: "Shanzil",
        position: "Marketing Head @ TotalEdge",
        text: "Prince has been one of the best backend developers we found, he is a really great person to work with and treats our work as his own. Amazing guy, love from studentpreneur.club",
    },
    {
        name: "Savan",
        position: "Owner @ Grown Up Marketing",
        text: "I just wanted to take a moment to say a big thank you for creating my marketing agency's website. It’s live now and I absolutely love your work — it's even better than I imagined! I really appreciate the effort and creativity you put into it. From now on, whatever projects I get through my agency, I would love to work with you. Looking forward to doing some amazing work together!",
    },
    {
        name: "Rohan Singh",
        position: "Founder @ MindMates.in",
        text: "Prince is an exceptionally skilled and dependable backend developer. He tackles complex systems with ease and always delivers clean, scalable solutions. Beyond his technical strengths, he consistently supports the team and steps in whenever needed, making him a truly reliable and collaborative teammate. I’d highly recommend working with him.",
    },
    {
        name: "Ayush Yadav",
        position: "Prince's College Friend",
        text: "Prince is someone who always stands out for his problem solving skills and creativity. He takes on challenges with a lot of determination. More than that, he is a supportive friend and a great teammate to work with.",
    },
    {
        name: "Deepak Kumar",
        position: "Prince's College Friend",
        text: "It's rare to come across someone like Prince , a developer who not only writes exceptional code but also brings humility, patience, and genuine passion into every project.",
    },
];
