import { Routes, Route } from "react-router-dom";

import Home from "modules/Home/pages/Home";
import Movie from "modules/Movie/pages/Movie";
import Login from "modules/Authentication/pages/Login";
import Register from "modules/Authentication/pages/Register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:movieId" element={<Movie />} /> {/* dynamic url */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
