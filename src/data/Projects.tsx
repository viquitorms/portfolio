import ContagemAtiva from "../assets/images/projects/contagemativa.png"
import Portfolio from "../assets/images/projects/portfolio.png"
import ProjectBoost from "../assets/images/projects/project-boost.png"

export const Modules = [
    {
        name: "Contagem Ativa",
        description: "A responsive app and website to control students from a social program of Contagem city hall.",
        image: ContagemAtiva,
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
        image: Portfolio,
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
        image: ProjectBoost,
        href: "https://github.com/viquitorms/ProjectBoost",
        frames: [
            { name: "C#" },
            { name: "Unity" }
        ]
    },
]