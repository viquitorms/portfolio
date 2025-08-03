import { BrowserRouter, Route, Routes } from "react-router"
import MainLayout from "./components/templates/MainLayout.tsx"
import AboutMe from "./components/pages/AboutMe.tsx"
import Home from "./components/pages/Home.tsx"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index path="/" element={<Home />} />
          <Route path="/aboutme" element={<AboutMe />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
