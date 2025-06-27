import { useState } from "react";
import { Modules } from "../data/Skills";

export default function SkillsBlock() {

    const [TabSkillSelected, SetTabSkillSelected] = useState("Front End");

    return (
        <div id="skills" className="flex flex-col items-center gap-10">

            <div className="flex flex-col items-center gap-3">
                <h1 className="text-5xl font-bold">Skills & Frameworks</h1>
                <p>These are some Frameworks and Tools I have worked and I have knowledge, capability and skills to work with.</p>
            </div>

            <div className="flex items-center">
                {/* name of each tab group should be unique */}
                <div className="tabs tabs-lift">
                    {
                        Modules.map((module) => (
                            <div key={module.name} className="flex flex-col">
                                <input type="radio" name={module.name} className="tab" aria-label={module.name} checked={TabSkillSelected === module.name} onClick={() => SetTabSkillSelected(module.name)} />
                                <div className="tab-content border-base-300 bg-base-100 p-10">
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
                                                            className="grayscale hover:grayscale-0 transition duration-300 rounded-sm"
                                                            src={item.image}
                                                            width={40}
                                                            alt={item.name}
                                                        />
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}
