import Skills from "../data/Skills.json"

export default function SkillsBlock() {
    return (
        <div id="skills" className="flex flex-col items-center gap-5">
            <div className="flex flex-col items-center gap-3">
                <h1 className="text-5xl font-bold">Skills & Frameworks</h1>
                <p>These are some Frameworks and Tools I have worked and I have knowledge, capability and skills to work with.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                {
                    Object.entries(Skills).map(([category, skills]) => (
                        <div key={category}>
                            <div className="my-5">
                                <h1 className="text-2xl font-bold">{category}</h1>
                            </div>
                            <div className="flex flex-wrap gap-5">
                                {
                                    skills.map((skill) => {
                                        return (
                                            <div>
                                                <img className="grayscale hover:grayscale-0 transition duration-300 rounded-sm" src={skill.image} width={40} />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>

                    ))
                }
            </div>
        </div>
    );
}
