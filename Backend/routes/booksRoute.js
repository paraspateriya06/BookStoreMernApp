// import express from 'express';
// import { Book } from '../models/bookModel.js';
// // cors policy = cross -origin resource shairng policy

// const router = express.Router();


// // route for save a new book
// router.post('/', async (request, response) => {
//   try {
//     if (
//       !request.body.title ||
//       !request.body.author ||
//       !request.body.publishYear
//     ) {
//       return response.status(400).send({
//         message: "send all required fields : title , author , publishYear",
//       });
//     }

//     const newBook = {
//       title: request.body.title,
//       author: request.body.author,
//       publishYear: request.body.publishYear,
//     };

//     const book = await Book.create(newBook);

//     return response.status(201).send(book);
//   } catch (error) {
//     console.log(error.message);
//     response.status(500).send({ message: error.message });
//   }
// });

// // route for get all books formm DB
// router.get('/', async (request, response) => {
//   try {
//     const books = await Book.find({});
//     return response.status(200).json({
//       count: books.length,
//       data: books,
//     });
//   } catch (error) {
//     console.log(error.message);
//     response.status(500).send({ message: error.message });
//   }
// });

// // route for get one book formm DB by id
// router.get('/:id', async (request, response) => {
//   try {
//     const { id } = request.params;
//     const book = await Book.findById(id);

//     const books = await Book.find({});
//     return response.status(200).json(book);
//   } catch (error) {
//     console.log(error.message);
//     response.status(500).send({ message: error.message });
//   }
// });

// // create first http route request;

// // route for update an book
// router.put('/:id', async (request, response) => {
//   try {
//     if (
//       !request.body.title ||
//       !request.body.author ||
//       !request.body.publishYear
//     ) {
//       return response.status(400).send({
//         message: "send all required fields : title , author , publishYear",
//       });
//     }

//     const { id } = request.params;

//     const result = await Book.findByIdAndUpdate(id, request.body);

//     if (!result) {
//       return response.status(404).json({ message: "Book not found" });
//     }

//     return response.status(200).send({ message: "Book updated Successfully" });
//   } catch (error) {
//     console.log(error.message);
//     response.status(500).send({ message: error.message });
//   }
// });

// // route for delete a book
// router.delete('/:id', async (request, response) => {
//   try {
//     const { id } = request.params;

//     const result = await Book.findByIdAndDelete(id);

//     if (!result) {
//       return response.status(404).json({ message: "Book not found" });
//     }

//     return response.status(200).send({ message: "Book deleted Successfully" });
//   } catch (error) {
//     console.log(error.message);
//     response.status(500).send({ message: error.message });
//   }
// });


// export default router; 

import express from "express";
import { Book } from "../models/bookModel.js";

const router = express.Router();

// @route   POST /books
// @desc    Create a new book
router.post("/", async (req, res) => {
  try {
    const { title, author, publishYear } = req.body;

    if (!title || !author || !publishYear) {
      return res.status(400).json({
        message: "Send all required fields: title, author, publishYear",
      });
    }

    const newBook = await Book.create({ title, author, publishYear });
    return res.status(201).json(newBook);
  } catch (error) {
    console.error("Error creating book:", error.message);
    res.status(500).json({ message: error.message });
  }
});

// @route   GET /books
// @desc    Get all books
router.get("/", async (req, res) => {
  try {
    const books = await Book.find({});
    return res.status(200).json({
      count: books.length,
      data: books,
    });
  } catch (error) {
    console.error("Error fetching books:", error.message);
    res.status(500).json({ message: error.message });
  }
});

// @route   GET /books/:id
// @desc    Get a single book by ID
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    return res.status(200).json(book);
  } catch (error) {
    console.error("Error fetching book:", error.message);
    res.status(500).json({ message: error.message });
  }
});

// @route   PUT /books/:id
// @desc    Update a book by ID
router.put("/:id", async (req, res) => {
  try {
    const { title, author, publishYear } = req.body;

    if (!title || !author || !publishYear) {
      return res.status(400).json({
        message: "Send all required fields: title, author, publishYear",
      });
    }

    const { id } = req.params;
    const updatedBook = await Book.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedBook) {
      return res.status(404).json({ message: "Book not found" });
    }

    return res.status(200).json({ message: "Book updated successfully", data: updatedBook });
  } catch (error) {
    console.error("Error updating book:", error.message);
    res.status(500).json({ message: error.message });
  }
});

// @route   DELETE /books/:id
// @desc    Delete a book by ID
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBook = await Book.findByIdAndDelete(id);

    if (!deletedBook) {
      return res.status(404).json({ message: "Book not found" });
    }

    return res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    console.error("Error deleting book:", error.message);
    res.status(500).json({ message: error.message });
  }
});

export default router;
