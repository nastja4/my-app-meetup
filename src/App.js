import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import { Routes, Route } from 'react-router-dom';  // npm install react-router-dom


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
}

export default App;