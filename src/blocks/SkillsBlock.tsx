import Skills from "../data/Skills.json"

export default function SkillsBlock() {
    return (
        <div id="skills" className="flex">
            <div className="flex">
                {/* Front-End */}
                <div className="flex flex-col gap-5">
                    <div>
                        <h1 className="text-2xl font-bold">Front-End</h1>
                    </div>
                    <div className="flex gap-5">
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

                {/* Back-End */}
                <div className="flex flex-col gap-5">
                    <div>
                        <h1 className="text-2xl font-bold">Back-End</h1>
                    </div>
                    <div className="flex flex-row gap-5">
                        {
                            Skills.backend.map((skill) => {
                                return (
                                    <div>
                                        <img className="grayscale hover:grayscale-0 transition duration-300" src={skill.image} width={50} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
