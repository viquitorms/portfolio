import Skills from "../data/Skills.json"

export default function SkillsBlock() {
    return (
        <div id="skills" className="flex flex-row justify-center">
            <div className="flex flex-col gap-5">
                <div>
                    <h1 className="text-2xl menu-title">Front-End</h1>
                </div>
                <div className="flex flex-row gap-5">
                    {
                        Skills.frontend.map((skill) => {
                            return (
                                <div>
                                    <img className="grayscale hover:grayscale-0 transition duration-300" src={skill.image} width={50} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>


            <div className="divider divider-horizontal" />

        </div>
    );
}