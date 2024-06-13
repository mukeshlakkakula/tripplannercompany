import { BrowserRouter, Form, Route, Routes } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" Component={Home} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
