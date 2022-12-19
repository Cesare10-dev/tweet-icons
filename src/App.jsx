import "./App.css";
import { BiMessageRounded } from "react-icons/bi";
import { HiOutlineArrowsUpDown } from "react-icons/hi2";
import { AiOutlineHeart } from "react-icons/ai";
import { FiShare } from "react-icons/fi";
import { IoStatsChart } from "react-icons/io5";

function App() {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center bg-black text-gray-500">
      <div className="flex items-center h-40 w-96 justify-between border border-red-100">
        <div className="flex items-center space-x-3 cursor-pointer hover:text-blue-500 group">
          <BiMessageRounded className="icons group-hover:rounded-full p-2 group-hover:bg-blue-900" />
          <p>4</p>
        </div>
        <div className="flex items-center space-x-3 cursor-pointer hover:text-red-500 group">
          <HiOutlineArrowsUpDown className="icons group-hover:rounded-full p-2 group-hover:bg-red-900" />
          <p>4</p>
        </div>
        <div className="flex items-center space-x-3 cursor-pointer hover:text-green-500 group">
          <AiOutlineHeart className="icons group-hover:rounded-full p-2 group-hover:bg-green-900" />
          <p>4</p>
        </div>
        <div className="cursor-pointer hover:text-blue-500 group">
          <FiShare className="icons group-hover:rounded-full p-2 group-hover:bg-blue-900" />
        </div>
        <div className="cursor-pointer hover:text-blue-500 group">
          <IoStatsChart className="icons group-hover:rounded-full p-3 group-hover:bg-blue-900" />
        </div>
      </div>
    </div>
  );
}

export default App;
