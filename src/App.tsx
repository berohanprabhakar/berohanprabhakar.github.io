import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';

import Blog from './pages/Blog';
import Experience from './pages/Experience';
import Home from './pages/Home';
import Projects from './pages/Projects';
// import Contact from "./pages/Contact";
import ContactCard from './components/ContactCard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<ContactCard page={true} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
