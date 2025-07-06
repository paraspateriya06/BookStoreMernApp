import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

const ShowBook = () => {
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://moneeybookstore.onrender.com/books/${id}`)
      .then((response) => {
        setBook(response.data);
      })
      .catch((error) => {
        console.error("Error fetching book:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-yellow-50 to-emerald-50 p-6">
      <BackButton />
      <h1 className="text-3xl font-bold text-gray-800 my-6">📖 Book Details</h1>

      {loading ? (
        <Spinner />
      ) : book ? (
        <div className="border-2 border-sky-400 rounded-xl p-6 bg-white max-w-2xl mx-auto shadow-lg space-y-4">
          <div>
            <span className="text-gray-500 font-semibold mr-2">ID:</span>
            <span>{book._id}</span>
          </div>

          <div>
            <span className="text-gray-500 font-semibold mr-2">Title:</span>
            <span>{book.title}</span>
          </div>

          <div>
            <span className="text-gray-500 font-semibold mr-2">Author:</span>
            <span>{book.author}</span>
          </div>

          <div>
            <span className="text-gray-500 font-semibold mr-2">Publish Year:</span>
            <span>{book.publishYear}</span>
          </div>

          <div>
            <span className="text-gray-500 font-semibold mr-2">Created At:</span>
            <span>{new Date(book.createdAt).toLocaleString()}</span>
          </div>

          <div>
            <span className="text-gray-500 font-semibold mr-2">Last Updated:</span>
            <span>{new Date(book.updatedAt).toLocaleString()}</span>
          </div>
        </div>
      ) : (
        <p className="text-red-500 text-center mt-10">Book not found.</p>
      )}
    </div>
  );
};

export default ShowBook;
