import { Modules } from "../data/Skills";

export default function SkillsBlock() {

    return (
        <div id="skills" className="min-h-screen flex flex-col items-center justify-center gap-10">

            <div className="flex flex-col items-center gap-3">
                <h1 className="text-5xl font-bold">Skills & Frameworks</h1>
                <p>These are some Frameworks and Tools I have worked and I have knowledge, capability and skills to work with.</p>
            </div>

            <div className="items-start grid grid-cols-1 md:grid-cols-2 gap-5">
                {
                    Modules.map((module) => (
                        <div key={module.name} className="border-1 border-gray-600 rounded-2xl p-8 min-h-20">

                            <div className="flex flex-col mb-5 gap-3">
                                <h1 className="text-2xl font-bold">{module.name}</h1>
                                <p>{module.description}</p>
                            </div>

                            <div className="flex flex-wrap gap-5">
                                {
                                    module.items.map((item) => (
                                        <div key={item.name}>
                                            <div className="tooltip" data-tip={`${item.name}: ${item.description}`}>
                                                <img
                                                    className="grayscale hover:grayscale-0 transition duration-300 rounded-sm w-8 md:w-10"
                                                    src={item.image}
                                                    alt={item.name}
                                                />
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
