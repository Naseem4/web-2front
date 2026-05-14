import { Routes, Route } from "react-router-dom";
import InformationUsers from "./pages/InformationUsers";
import Home from "./pages/Home";
import Offers from "./pages/OffersPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/info" element={<InformationUsers />} />
      <Route path="/offers" element={<OffersPage />} />
    </Routes>
  );
}

export default App;