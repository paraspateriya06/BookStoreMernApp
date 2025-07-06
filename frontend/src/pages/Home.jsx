import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { MdOutlineAddBox } from "react-icons/md";
import BooksTable from "../components/home/BooksTable";
import BooksCard from "../components/home/BooksCard";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("table");

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://moneeybookstore.onrender.com/books")
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-rose-50 to-teal-50 py-10 px-4">
      <div className="max-w-7xl mx-auto bg-white p-6 rounded-xl shadow-lg">
        {/* Toggle View Buttons */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setShowType("table")}
            className={`px-4 py-2 rounded-lg text-sm font-medium shadow-sm transition ${
              showType === "table"
                ? "bg-blue-600 text-white"
                : "bg-white border border-blue-300 text-blue-600 hover:bg-blue-100"
            }`}
          >
            Table View
          </button>

          <button
            onClick={() => setShowType("card")}
            className={`px-4 py-2 rounded-lg text-sm font-medium shadow-sm transition ${
              showType === "card"
                ? "bg-blue-600 text-white"
                : "bg-white border border-blue-300 text-blue-600 hover:bg-blue-100"
            }`}
          >
            Card View
          </button>
        </div>

        {/* Page Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">📚 Books List</h1>
          <Link to="/books/create">
            <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm shadow">
              <MdOutlineAddBox className="text-xl" />
              Add Book
            </button>
          </Link>
        </div>

        {/* Book Display */}
        {loading ? (
          <Spinner />
        ) : showType === "table" ? (
          <BooksTable books={books} />
        ) : (
          <BooksCard books={books} />
        )}
      </div>
    </div>
  );
};

export default Home;
