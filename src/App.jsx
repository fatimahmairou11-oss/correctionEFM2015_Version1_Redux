import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";

import Movies from "./Pages/Movies";

import Favoris from "./Pages/Favoris";

<<<<<<< HEAD
const App=()=> {
=======
function App() {
>>>>>>> 687c85bee7baa8dd3a478ae06c752cb83be9fee0

  return (

    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Movies />} />

        <Route path="/movies" element={<Movies />} />

        <Route path="/favoris" element={<Favoris />} />

      </Routes>

    </BrowserRouter>

  );
}

export default App;
