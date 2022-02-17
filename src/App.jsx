import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./layout/Header";
import "./assets/fonts/fontawesome/css/all.css";
import Cards from "./layout/Cards";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import logo from "./assets/images/dark.png";
import { useSelector } from "react-redux";
function App() {
  const show = useSelector((state) => state.onShow);
  return (
    <div>
      <Header />
      {show ? (
        <Cards />
      ) : (
        <img
          style={{ width: "300px"}}
          alt="logo"
          className="img-fluid m-auto d-block "
          src={logo}
        />
      )}

      <ToastContainer
        position="bottom-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        theme="dark"
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
      />
    </div>
  );
}

export default App;
