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
            <div>
              <MainBlock />
              <MainBlock />
            </div>
            <div className="fixed flex flex-col justify-center top-1/3 right-20">
              <ul>
                <li className="step">-</li>
                <li className="step">-</li>
                <li className="step">-</li>
                <li className="step">-</li>
              </ul>
            </div>
          </main>
        </div>
        <DrawerSide />
      </div>
    </>
  )
}

export default App
