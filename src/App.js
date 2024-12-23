import {
  /*BrowserRouter, */ HashRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Store from './pages/Store/Store';
// import About from './pages/About/About';
import Forms from './pages/Forms/Forms';
import Sports from "./pages/Sports/Sports";

const AppRouter = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/loja" element={<Store />} />
      <Route path="/esportes" element={<Sports />} />
      <Route path="/formulario" element={<Forms />} />
      {/* <Route path="/atletica" element={<About />} /> */}
    </Routes>
  </HashRouter>
);

export default AppRouter;
