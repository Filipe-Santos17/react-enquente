import {BrowserRouter, Routes, Route} from "react-router-dom"

import {Home, CreateEnq, AlterEnq, RespEnq} from "./pages/";

import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

function App() {
  return (
    <BrowserRouter>
      <ToastContainer position="top-center" hideProgressBar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/post" element={<CreateEnq/>}/>
        <Route path="/res/:id" element={<RespEnq/>}/>
        <Route path="/put/:id" element={<AlterEnq/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;