import MainBlock from "./blocks/MainBlock"
import ProjectsBlock from "./blocks/ProjectsBlock"
import SkillsBlock from "./blocks/SkillsBlock"
import DrawerSide from "./components/organisms/DrawerSide"
import Header from "./components/organisms/Header"
import SideNavigation from "./components/organisms/SideNavigation"

function App() {

  return (
    <>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <Header />
          <main>
            <div>
              <MainBlock />
              <SkillsBlock />
              <ProjectsBlock />
            </div>
            <SideNavigation />
          </main>
        </div>
        <DrawerSide />
      </div>
    </>
  )
}

export default App
