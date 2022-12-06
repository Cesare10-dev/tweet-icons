import "./App.css";
import { BiMessageRounded } from "react-icons/bi";
import { HiOutlineArrowsUpDown } from "react-icons/hi2";

function App() {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <div>
        <div className="flex">
          <div>
            <BiMessageRounded />
            <p>4</p>
          </div>
          <div>
            <HiOutlineArrowsUpDown />
            <p>4</p>
          </div>
          <div>
            <BiMessageRounded />
            <p>4</p>
          </div>
          <div>
            <BiMessageRounded />
            <p>4</p>
          </div>
          <div>
            <BiMessageRounded />
            <p>4</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
