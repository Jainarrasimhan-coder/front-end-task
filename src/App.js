import "./App.css";
import Cards from "./card";
import Login from "./login";
import Signup from "./signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Cards />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
