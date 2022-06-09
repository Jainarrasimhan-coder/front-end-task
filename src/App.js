import "./App.css";
// import Cards from "./card";
import Login from "./login";
import Signup from "./signup";
import Option from "./option"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import Posts from "./Posts";
import Form from "./form"

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/option" element={<Option />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/create" element={< Form/>} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
