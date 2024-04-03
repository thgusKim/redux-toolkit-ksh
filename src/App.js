import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar";
import Login from "./page/Login";
import ProductAll from "./page/ProductAll";
import PrivateRoute from "./route/PrivateRoute";

function App() {
  // const [authenticate, setAuthenticate] = useState(false);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<PrivateRoute />} />
      </Routes>
    </div>
  );
}

export default App;
