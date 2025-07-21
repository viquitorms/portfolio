import MainBlock from "./blocks/main/MainBlock.tsx"
import ProjectsBlock from "./blocks/main/ProjectsBlock.tsx"
import SkillsBlock from "./blocks/main/SkillsBlock.tsx"
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
