import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
// import Store from './pages/Store/Store';
// import About from './pages/About/About';
import Sports from './pages/Sports/Sports';

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/store" element={<Store />} />
      <Route path="/about" element={<About />} /> */}

      <Route path="/esportes" element={<Sports />} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
