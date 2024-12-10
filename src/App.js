import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
// import Store from '../pages/Store/Store';
// import About from '../pages/About/About';

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/store" element={<Store />} />
      <Route path="/about" element={<About />} /> */}
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
