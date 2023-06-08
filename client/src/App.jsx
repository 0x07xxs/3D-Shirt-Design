import Canvas from './canvas';
import Customizer from './pages/Customizer';
import Home from './pages/Home';

function App() {
  return (
  <main className="app transition-all ease-in">
    {/* Rendering the pages */}
    <Home />
    <Canvas />
    <Customizer />
    </main>
  )
}

export default App
