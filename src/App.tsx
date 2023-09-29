import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import Login from "./Login";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<HomePage />} />
    </Routes>
  );
};

export default App;
