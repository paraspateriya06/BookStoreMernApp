import React, { useState, useEffect } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const EditBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://moneeybookstore.onrender.com/books/${id}`)
      .then((res) => {
        const { title, author, publishYear } = res.data;
        setTitle(title);
        setAuthor(author);
        setPublishYear(publishYear);
      })
      .catch((error) => {
        console.error(error);
        enqueueSnackbar('Failed to fetch book data.', { variant: 'error' });
      })
      .finally(() => setLoading(false));
  }, [id]);

  const handleEditBook = () => {
    if (!title || !author || !publishYear) {
      enqueueSnackbar('Please fill out all fields.', { variant: 'warning' });
      return;
    }

    const data = { title, author, publishYear };

    setLoading(true);
    axios
      .put(`https://moneeybookstore.onrender.com/books/${id}`, data)
      .then(() => {
        enqueueSnackbar('Book updated successfully!', { variant: 'success' });
        navigate('/');
      })
      .catch((err) => {
        console.error(err);
        enqueueSnackbar('Error updating book.', { variant: 'error' });
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-rose-50 to-teal-50 py-10 px-4">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-lg">
        <BackButton />
        <h1 className="text-3xl font-bold text-gray-800 mb-6">✏️ Edit Book</h1>

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
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Year */}
            <div>
              <label className="text-lg text-gray-600 block mb-1">Publish Year</label>
              <input
                type="number"
                value={publishYear}
                onChange={(e) => setPublishYear(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Save Button */}
            <button
              onClick={handleEditBook}
              className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow transition"
            >
              Save Changes
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EditBook;
