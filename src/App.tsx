import MainBlock from "./blocks/MainBlock.tsx"
import ProjectsBlock from "./blocks/ProjectsBlock.tsx"
import SkillsBlock from "./blocks/SkillsBlock.tsx"
import MainLayout from "./components/templates/MainLayout.tsx"

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
