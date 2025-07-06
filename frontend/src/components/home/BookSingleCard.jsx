import { Link } from "react-router-dom";
import { PiBookOpenTextLight } from "react-icons/pi";
import { AiOutlineEdit } from "react-icons/ai";
import { BiUserCircle, BiShow } from "react-icons/bi";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import { useState } from "react";
import BookModal from "./BookModal";

const BookSingleCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false);

  // Safety check to avoid crash
  if (!book) return null;

  return (
    <>
      <div className="bg-white border border-gray-300 shadow-sm hover:shadow-lg transition-all duration-300 rounded-xl px-5 py-4 m-4 relative">
        {/* Publish Year Badge */}
        <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-3 py-1 rounded-full">
          {book.publishYear || "N/A"}
        </span>

        {/* ID */}
        <p className="text-xs text-gray-400 mb-2 break-words">{book._id}</p>

        {/* Title */}
        <div className="flex items-center gap-2 mb-1">
          <PiBookOpenTextLight className="text-xl text-red-400" />
          <h2 className="font-semibold text-gray-800">{book.title || "Untitled"}</h2>
        </div>

        {/* Author */}
        <div className="flex items-center gap-2 mb-4">
          <BiUserCircle className="text-xl text-red-400" />
          <p className="text-gray-700">{book.author || "Unknown"}</p>
        </div>

        {/* Actions */}
        <div className="flex justify-between items-center gap-3 pt-3 border-t border-gray-200">
          <BiShow
            title="Quick View"
            className="text-2xl text-blue-600 hover:text-blue-800 cursor-pointer transition"
            onClick={() => setShowModal(true)}
          />
          <Link to={`/books/details/${book._id}`} title="Details">
            <BsInfoCircle className="text-2xl text-green-700 hover:text-green-900 transition" />
          </Link>
          <Link to={`/books/edits/${book._id}`} title="Edit">
            <AiOutlineEdit className="text-2xl text-yellow-500 hover:text-yellow-600 transition" />
          </Link>
          <Link to={`/books/delete/${book._id}`} title="Delete">
            <MdOutlineDelete className="text-2xl text-red-600 hover:text-red-800 transition" />
          </Link>
        </div>
      </div>

      {showModal && <BookModal book={book} onClose={() => setShowModal(false)} />}
    </>
  );
};

export default BookSingleCard;
