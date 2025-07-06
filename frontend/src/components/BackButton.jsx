import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const BackButton = ({ destination = '/' }) => {
  return (
    <div className="flex">
      <Link to={destination} className="bg-sky-800 text-white px-4 py-1 rounded-lg w-fit flex items-center gap-2 hover:bg-sky-700 transition">
        <BsArrowLeft className="text-xl" />
        <span className="text-sm">Back</span>
      </Link>
    </div>
  );
};

export default BackButton;
