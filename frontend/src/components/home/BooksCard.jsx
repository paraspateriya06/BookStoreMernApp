import BookSingleCard from "./BookSingleCard";

const BooksCard = ({ books }) => {
  if (!Array.isArray(books) || books.length === 0) {
    return <p className="text-center text-gray-500 mt-4">No books available.</p>;
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4">
      {books.map((book) => (
        <BookSingleCard key={book._id} book={book} />
      ))}
    </div>
  );
};

export default BooksCard;
