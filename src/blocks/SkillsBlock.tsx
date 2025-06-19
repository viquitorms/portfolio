import Skills from "../data/Skills.json"

export default function SkillsBlock() {
    return (
        <div id="skills" className="min-h-screen flex flex-col justify-center">
            <div className="flex flex-row gap-5">
                {
                    Skills.map((skill) => {
                        return (
                            <div>
                                <img className="grayscale hover:grayscale-0 transition duration-300" src={skill.image} width={50} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}