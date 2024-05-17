
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Basket } from "./pages/Basket/Basket";

function App() {
  return (
    <>
    <Routes>
     <Route element={<Home/>} path="/"/>
     <Route element={<Basket/>} path="/basket"/>
    </Routes>
    </>
  );
}

export default App;
