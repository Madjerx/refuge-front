import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import NotFound from "./pages/NotFound";
import Animaux from "./pages/animaux/Animaux";
import Aide from "./pages/aide/Aide";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/nos-animaux-au-refuge" element={<Animaux />} />
        <Route path="/aider-notre-association" element={<Aide />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
