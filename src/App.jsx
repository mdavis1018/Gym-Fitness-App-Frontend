import { Home } from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Signup } from "./Signup";
import { Profile } from "./Profile";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/categories" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
