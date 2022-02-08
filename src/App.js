import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header.js";
import Nav from "./components/Nav.js";
import Footer from "./components/Footer.js";
import Articles from "./components/Articles.js";
import SingleArticle from "./components/SingleArticle.js";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<Articles />} />
          <Route path="/articles/:article_id" element={<SingleArticle />} />
          <Route path="/articles/topic/:slug" element={<Articles />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
