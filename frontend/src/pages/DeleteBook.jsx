import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`https://moneeybookstore.onrender.com/books/${id}`)
      .then(() => {
        enqueueSnackbar('Book deleted successfully!', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        console.error(error);
        enqueueSnackbar('Error deleting book.', { variant: 'error' });
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-yellow-50 to-emerald-50 px-4 py-10">
      <div className="max-w-xl mx-auto bg-white rounded-xl shadow-lg p-6">
        <BackButton />
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">🗑️ Delete Book</h1>

        {loading ? (
          <Spinner />
        ) : (
          <div className="text-center">
            <p className="text-lg text-gray-700 mb-6">
              Are you sure you want to permanently delete this book?
            </p>

            <button
              onClick={handleDeleteBook}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg text-sm font-semibold shadow transition"
            >
              Yes, Delete It
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DeleteBook;
