// import { Link } from "react-router-dom";
// import { PiBookOpenTextLight } from "react-router-dom";
// import { AiOutlineEdit } from "react-icons/ai";
// import { BiUserCircle } from "react-icons/bi";
// import { BsInfoCircle } from "react-icons/bs";
// import { MdOutlineDelete } from "react-icons/md";



// const BooksCard = ({ books }) => {
//   return (
//     <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//       {books.map((item) => (
//         <div
//           key={item._id}
//           className="border-2 border-gray-600 rounded-lg px-4 py-2 m-4 relative hover: shadow-xl"
//         >
//           <h2 className="absolute  top-1 right-2  px-4 py-1 bg-red-400 rounded-lg">
//             {item.publishYear}
//           </h2>

//           <h4 className=" my-2 text-gray-500"> {item._id} </h4>

//           <div className="flex justify-start items-center gap-x-2">
//             <PiBookOpenTextLight className=" text-red-400 text-2xl" />

//             <h2 className="my-1"> {item.title} </h2>
//           </div>

//           <div className="flex justify-start items-center gap-x-2">
//             <BiUserCircle className="text-red-400 text-2xl" />
//             <h2 className="my-1"> {item.author} </h2>
//           </div>

//           <div className="flex justify-between items-center gap-x-2 mt-4 p-4">
//             <Link to={`/books/details/${item._id}`}>
//               <BsInfoCircle className="text-2xl text-green-900 hover: text-black" />
//             </Link>

//             <Link to={`/books/edits/${item._id}`}>
//               <AiOutlineEdit className="text-2xl text-yellow-700 hover: text-black" />
//             </Link>

//             <Link to={`/books/delete/${item._id}`}>
//               <MdOutlineDelete className=" text-2xl text-red-700 hover:text-black" />
//             </Link>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default BooksCard;



import { Link } from "react-router-dom";
import { PiBookOpenTextLight } from "react-icons/pi";  // fixed import source
import { AiOutlineEdit } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import BookSingleCard from "./BookSingleCard";

const BooksCard = ({ books }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {books.map((item) => (
        <BookSingleCard key={item._id} book={item} />
      ))}
    </div>
  );
};

export default BooksCard;

// 52.29.. 
