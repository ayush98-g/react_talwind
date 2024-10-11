import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import About from "./components/About";
import Regestration from "./components/Regestration";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="dark:bg-black">
        <Routes></Routes>
      </div>
      <Navbar />

      <Banner />
      <Footer />
      <About />
      <Regestration />
    </>
  );
}

export default App;
