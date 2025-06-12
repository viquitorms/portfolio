import MainBlock from "./blocks/MainBlock"
import DrawerSide from "./components/organisms/DrawerSide"
import Header from "./components/organisms/Header"

function App() {

  return (
    <>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <Header />
          <main>
            <MainBlock />
            <MainBlock />
          </main>
        </div>
        <DrawerSide />
      </div>
    </>
  )
}

export default App
