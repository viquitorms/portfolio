import MainBlock from "../../blocks/main/MainBlock";
import ProjectsBlock from "../../blocks/main/ProjectsBlock";
import SkillsBlock from "../../blocks/main/SkillsBlock";

export default function Home() {
    return (
        <>
            <MainBlock />
            <SkillsBlock />
            <ProjectsBlock />
        </>
    )
}