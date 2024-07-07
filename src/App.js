import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles.css";
import Home from "./pages/home";
import About from "./pages/about";
import Blog from "./pages/blog";
import Navbar from "./components/navbar";
import { ThemeProvider } from "./theme-context";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Navbar></Navbar>
        {/* nav bar */}
        {/* routes */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
