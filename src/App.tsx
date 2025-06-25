import MainBlock from "./blocks/MainBlock"
import ProjectsBlock from "./blocks/ProjectsBlock"
import SkillsBlock from "./blocks/SkillsBlock"
import MainLayout from "./components/templates/MainLayout"

function App() {

  return (
    <>
      <MainLayout>
        <MainBlock />
        <SkillsBlock />
        <ProjectsBlock />
      </MainLayout>
    </>
  )
}

export default App
