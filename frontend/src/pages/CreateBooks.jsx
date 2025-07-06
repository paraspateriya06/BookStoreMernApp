import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const CreateBooks = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSaveBook = () => {
    if (!title || !author || !publishYear) {
      enqueueSnackbar('Please fill out all fields.', { variant: 'warning' });
      return;
    }

    const data = { title, author, publishYear };
    setLoading(true);

    axios
      .post('https://moneeybookstore.onrender.com/books', data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book created successfully!', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar('Something went wrong.', { variant: 'error' });
        console.error(error);
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-rose-50 to-teal-50 py-10 px-4">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-lg">
        <BackButton />
        <h1 className="text-3xl font-bold text-gray-800 my-6">📖 Create Book</h1>

        {loading ? (
          <Spinner />
        ) : (
          <div className="flex flex-col gap-6">
            {/* Title */}
            <div>
              <label className="text-lg text-gray-600 block mb-1">Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter book title"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Author */}
            <div>
              <label className="text-lg text-gray-600 block mb-1">Author</label>
              <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="Enter author's name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Publish Year */}
            <div>
              <label className="text-lg text-gray-600 block mb-1">Publish Year</label>
              <input
                type="number"
                value={publishYear}
                onChange={(e) => setPublishYear(e.target.value)}
                placeholder="YYYY"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Save Button */}
            <button
              onClick={handleSaveBook}
              className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow transition"
            >
              Save Book
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateBooks;
