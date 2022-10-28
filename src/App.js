import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Demo from "./pages/Demo";

import "./pages_css/Layout.css"
import "./pages_css/Home.css"
import "./pages_css/About.css"

export default function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="demo" element={<Demo />} />
        </Route>
      </Routes>
    </BrowserRouter>
    
    
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
