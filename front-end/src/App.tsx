import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import GlobalStyle from "./assets/css/global";

function App() {
  return (
    <BrowserRouter>
    <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
