import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineDelete } from "react-icons/md";
import { BsInfoCircle } from "react-icons/bs";

const BooksTable = ({ books }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left border-collapse shadow rounded-lg overflow-hidden">
        <thead className="bg-blue-100 text-gray-700">
          <tr>
            <th className="px-4 py-3 border">No</th>
            <th className="px-4 py-3 border">Title</th>
            <th className="px-4 py-3 border max-md:hidden">Author</th>
            <th className="px-4 py-3 border max-md:hidden">Publish Year</th>
            <th className="px-4 py-3 border text-center">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {books.map((book, index) => (
            <tr
              key={book._id}
              className="hover:bg-gray-100 transition duration-200"
            >
              <td className="px-4 py-2 border text-center">{index + 1}</td>
              <td className="px-4 py-2 border">{book.title}</td>
              <td className="px-4 py-2 border max-md:hidden">{book.author}</td>
              <td className="px-4 py-2 border max-md:hidden">
                {book.publishYear}
              </td>
              <td className="px-4 py-2 border">
                <div className="flex justify-center items-center gap-3">
                  <Link
                    to={`/books/details/${book._id}`}
                    className="text-green-600 hover:text-green-800"
                    title="Details"
                  >
                    <BsInfoCircle className="text-xl" />
                  </Link>
                  <Link
                    to={`/books/edit/${book._id}`}
                    className="text-yellow-500 hover:text-yellow-600"
                    title="Edit"
                  >
                    <AiOutlineEdit className="text-xl" />
                  </Link>
                  <Link
                    to={`/books/delete/${book._id}`}
                    className="text-red-500 hover:text-red-700"
                    title="Delete"
                  >
                    <MdOutlineDelete className="text-xl" />
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BooksTable;
