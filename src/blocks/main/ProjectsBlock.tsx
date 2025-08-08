import { Modules } from "../../data/Projects.js";

export default function ProjectsBlock() {

    function handleProjectClick(
        e: React.MouseEvent<HTMLDivElement>,
        href: string
    ) {
        e.preventDefault(); // optional: prevent default if needed
        window.open(href, "_blank");
    }

    return (
        <div id="projects" className="min-h-screen flex flex-col items-center justify-center gap-10">

            <div className="flex flex-col items-center gap-3">
                <h1 className="text-5xl font-bold">Projects</h1>
                <p>These are projects are some of my skills really applied. Some of them area college projects, real projects to clients and personal projects. You can click on them to take a look to details.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 gap-5 justify-center">
                {
                    Modules.map((module) => (
                        <div className="card w-full md:w-70 xl:w-90 py-5 border-1 border-base-content/50 cursor-pointer hover:transform-border hover:border-primary" onClick={(e) => handleProjectClick(e, module.href)}>
                            <figure>
                                <img
                                    src={module.image}
                                    alt="Shoes"
                                    className="h-51 w-90 rounded-4xl p-5" />
                            </figure>
                            <div className="card-body">
                                <a className="hover:link" href={module.href} target="_blank">
                                    <h2 className="card-title">
                                        {module.name}
                                    </h2>
                                </a>
                                <p>{module.description}</p>
                                <div className="card-actions justify-end">
                                    {
                                        module.frames.map((frame) => (
                                            <div className="badge badge-outline">{frame.name}</div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    );
}