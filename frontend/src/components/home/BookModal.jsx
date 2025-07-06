import { AiOutlineClose } from "react-icons/ai";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";

const BookModal = ({ book, onClose }) => {
  if (!book) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60"
      onClick={onClose}
    >
      <div
        className="bg-white w-[90%] max-w-xl max-h-[90vh] rounded-xl p-6 overflow-y-auto shadow-lg relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl text-red-600 hover:text-red-800 transition"
        >
          <AiOutlineClose />
        </button>

        {/* Year Badge */}
        <span className="inline-block mb-2 bg-red-400 text-white text-xs px-3 py-1 rounded-full">
          {book.publishYear || "N/A"}
        </span>

        {/* ID */}
        <p className="text-sm text-gray-400 mb-3 break-words">{book._id}</p>

        {/* Title */}
        <div className="flex items-center gap-2 mb-2">
          <PiBookOpenTextLight className="text-xl text-red-400" />
          <h2 className="text-lg font-semibold text-gray-800">{book.title || "Untitled"}</h2>
        </div>

        {/* Author */}
        <div className="flex items-center gap-2 mb-4">
          <BiUserCircle className="text-xl text-red-400" />
          <p className="text-gray-700">{book.author || "Unknown"}</p>
        </div>

        {/* Description */}
        <div className="mt-4">
          <h3 className="font-medium text-gray-800 mb-1">About the Project</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Developed by <strong>Paras Mani Paterya</strong>, this full-stack Bookstore web app uses MongoDB, Express.js, React.js, and Node.js. It enables users to securely browse, search, and manage books with features like authentication, CRUD operations, and real-time filtering.
            <br /><br />
            The responsive UI is built with React and styled using modern CSS (Tailwind). The backend uses a RESTful API and MongoDB for efficient data handling. This project reflects strong skills in frontend-backend integration, state management, and scalable web architecture.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookModal;
