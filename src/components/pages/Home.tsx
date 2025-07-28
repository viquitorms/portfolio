import FooterBlock from "../../blocks/main/FooterBlock";
import MainBlock from "../../blocks/main/MainBlock";
import ProjectsBlock from "../../blocks/main/ProjectsBlock";
import SkillsBlock from "../../blocks/main/SkillsBlock";

export default function Home() {
    return (
        <>
            <MainBlock />
            <ProjectsBlock />
            <SkillsBlock />
            <FooterBlock />
        </>
    )
}