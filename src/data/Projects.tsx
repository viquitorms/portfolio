const path = "/portfolio/src/assets/images/projects/"

export const Modules = [
    {
        name: "Contagem Ativa",
        description: "A responsive app and website to control students from a social program of Contagem city hall.",
        image: `${path}contagemativa.png`,
        href: "https://github.com/contagemativa/frontEnd",
        frames: [
            { name: "React" },
            { name: "DaisyUI" },
            { name: "Azure DB" },
        ]
    },
    {
        name: "Portfolio",
        description: "My personal portfolio website, built with React and DaisyUI.",
        image: `${path}portfolio.png`,
        href: "https://github.com/viquitorms/portfolio",
        frames: [
            { name: "React" },
            { name: "DaisyUI" },
            { name: "Netlify" },
        ]
    },
    {
        name: "Project Boost",
        description: "A game built in Unity during the Game.dev Udemy course.",
        image: `${path}project-boost.png`,
        href: "https://github.com/viquitorms/ProjectBoost",
        frames: [
            { name: "C#" },
            { name: "Unity" }
        ]
    },
]