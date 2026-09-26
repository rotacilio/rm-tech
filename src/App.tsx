import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import StaffAugmentation from './pages/StaffAugmentation'
import SquadsDedicados from './pages/SquadsDedicados'
import EngenhariaDeSoftware from './pages/EngenhariaDeSoftware'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/servicos/staff-augmentation" element={<StaffAugmentation />} />
          <Route path="/servicos/squads-dedicados" element={<SquadsDedicados />} />
          <Route path="/servicos/engenharia-de-software" element={<EngenhariaDeSoftware />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
