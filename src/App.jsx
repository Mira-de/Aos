import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

function App() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    Aos.init();
  }, []);

  function handleClick() {
    setShow(true);
  }
  return (
    <>
      <header className="bg-red-300 p-4 text-4xl text-center font-mono flex justify-between ">
        <h1 data-aos="fade-up" className="">
          Hello world
        </h1>

        <h2 onClick={handleClick} className="btn cursor-pointer">
          Click me
        </h2>
      </header>

      <div
        className="container  gap-x-2 justify-center mt-4 lg:flex hidden "
        style={{ display: show ? "flex" : "none" }}
      >
        <div data-aos="fade-right-up" className="bg-black w-[100px] h-40">
          <h4 className="text-white  grid place-content-center">Cards</h4>
        </div>
        <div
          data-aos="flip-up"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className="bg-black w-[100px] h-40"
        >
          <h4 className="text-white  grid place-content-center">Cards</h4>
        </div>
        <div data-aos="fade-left" className="bg-black w-[100px] h-40">
          <h4 className="text-white  grid place-content-center">Cards</h4>
        </div>
        <div data-aos="fade-right" className="bg-black w-[100px] h-40">
          <h4 className="text-white  grid place-content-center">Cards</h4>
        </div>
        <div className="bg-black w-[100px] h-40">
          <h4 className="text-white  grid place-content-center">Cards</h4>
        </div>
      </div>
    </>
  );
}

export default App;
