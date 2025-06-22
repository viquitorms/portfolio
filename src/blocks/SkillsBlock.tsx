import Skills from "../data/Skills.json"

export default function SkillsBlock() {
    return (
        <div id="skills">
            <div className="flex justify-center">
                <h1 className="text-5xl font-bold">Skills</h1>
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
                                                <img className="grayscale hover:grayscale-0 transition duration-300 rounded-sm" src={skill.image} width={50} />
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
