import "./App.scss";
import Main from "./pages/Main/Main";
import { Routes, Route } from "react-router-dom";
import Films from "./pages/Films/Films";
import Footer from "./components/Main/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/films" element={<Films />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
