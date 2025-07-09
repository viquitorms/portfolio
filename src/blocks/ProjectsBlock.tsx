import { Modules } from "../data/Projects";

export default function ProjectsBlock() {
    return (
        <div id="projects" className="min-h-screen flex flex-col items-center justify-center gap-10">

            <div className="flex flex-col items-center gap-3">
                <h1 className="text-5xl font-bold">Projects</h1>
                <p>These are projects are some of my skills really applied. Some of them area college projects, real projects to clients and personal projects. You can click on them to take a look to details.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 justify-center">
                {
                    Modules.map((module) => (
                        <div className="card bg-base-100 w-full md:w-70 xl:w-90 shadow-sm">
                            <figure>
                                <img
                                    src={module.image}
                                    alt="Shoes"
                                    className="h-51 w-90" />
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