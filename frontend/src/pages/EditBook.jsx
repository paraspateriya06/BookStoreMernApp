// import React, {useState,useEffect} from 'react'
// import BackButton from '../components/BackButton';
// import Spinner from '../components/Spinner';
// import axios from 'axios';
// import { useNavigate,useParams } from 'react-router-dom';


// const EditBook = () => {
// const [title,setTitle] = useState('');
// const [author, setAuthor]= useState ('');
// const [publishYear, setPublishYear] = useState('');
// const [loading, setloading] = useState(false);
// const navigate =  useNavigate();
// const {id} = useParams();

// useEffect(()=>{
//   setLoading(true);
//   axios.get(`http://localhost:5555/books/${id}`)
//   .then((response) =>{
//       setAuthor(response.data.author);
//       setPublishYear(response.data.publishYear)
//       setTitle(response.data.title)
//       setLoading(false);
//   } ) .catch((error)=>{

//     setLoading(false);
//     alert('An Error Happened. Please Check Console');
//     console.log(error);

//   });
// }, [])


// const handleEditBook = () =>{

//         const data = {
//             title,
//             author,
//             publishYear,
//         };

//         setloading(true);

//         axios
//         .put(`http://localhost:5555/books/${id}`,data)
//         .then (() => {
//             setloading(false);
//             navigate('/');
//         })
//         .catch((error)=>{
//                 setloading(false);
//                 alert('An error Happened . Please Check Console');
//                 console.log(error);
//         });
//         //40.09
// };

//   return (
//     <div className='p-4'>
//       <BackButton/>

//       <h1 className='text-3xl my-4'> Edit Book  </h1>
       
//        {loading ? <Spinner/> : ''}

//        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'> 
//         <div className='my-4'>  
//           <label className='text-xl mr-4 text-gray-500'> Title </label>

//           <input
//             type ='text'
//             value ={title}
//             onChange ={(e)=> setTitle(e.target.value)}
//             className='border-2 border-gray-500 px-4 py-2 w-full'          
          
          
//           />

//          </div>
//           <div className='my-4'>  
//           <label className='text-xl mr-4 text-gray-500'> Author </label>

//           <input
//             type ='text'
//             value ={author}
//             onChange ={(e)=> setAuthor(e.target.value)}
//             className='border-2 border-gray-500 px-4 py-2 w-full'          
          
          
//           />

//          </div>

//           <div className='my-4'>  
//           <label className='text-xl mr-4 text-gray-500'> Publish Year </label>

//           <input
//             type ='text'
//             value ={publishYear}
//             onChange ={(e)=> setPublishYear(e.target.value)}
//             className='border-2 border-gray-500 px-4 py-2 w-full'          
          
          
//           />

//          </div>

//          <button className='p-2 bg-sky-300 m-8 ' onClick={handleEditBook}>
//           Save
//          </button>
//        </div>
         
      
//       </div>
//   )
// }

// export default EditBook;

import React, { useState, useEffect } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { SnackbarProvider, useSnackbar } from 'notistack';


const EditBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const {enqueueSnackbar} = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://moneeybookstore.onrender.com/books/${id}`)
      .then((response) => {
        const { title, author, publishYear } = response.data;
        setTitle(title);
        setAuthor(author);
        setPublishYear(publishYear);
      })
      .catch((error) => {
        console.error('Error fetching book:', error);
        alert('Failed to fetch book data. Check console for details.');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  const handleEditBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };

    setLoading(true);

    axios
      .put(`https://moneeybookstore.onrender.com/books/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book Edited Successfully' , {variant: 'success'} );
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar('Error', {variant : 'error'});
        console.error('Error updating book:', error);
        //alert('Failed to update book. Check console for details.');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Edit Book</h1>

      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2 w-full"
            />
          </div>

          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Author</label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2 w-full"
            />
          </div>

          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Publish Year</label>
            <input
              type="text"
              value={publishYear}
              onChange={(e) => setPublishYear(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2 w-full"
            />
          </div>

          <button
            className="p-2 bg-sky-300 m-8 hover:bg-sky-400 transition"
            onClick={handleEditBook}
          >
            Save
          </button>
        </div>
      )}
    </div>
  );
};

export default EditBook;
