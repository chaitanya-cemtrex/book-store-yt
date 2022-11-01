import axios from "axios";

const BASE_URL = "https://book-store-yt.vercel.app";
export const getAllBooks = async () => {
  const res = await axios.get(`${BASE_URL}/api/books`);
  if (res.status !== 200) {
    return new Error("Internal server error");
  }

  const data = await res.data?.books;

  return data;
};

export const getFeaturedBooks = async () => {
  const books = await getAllBooks();

  if (books.length === 0) {
    return [];
  }
  const featuredBooks = books.filter((book) => book.featured == true);

  return featuredBooks;
};

export const sendBook = async (data) => {
  const res = await axios.post(`${BASE_URL}/api/books`, {
    title: data.title,
    author: data.author,
    imageUrl: data.imageUrl,
    price: data.price,
    featured: Boolean(data.featured),
  });
  if (res.status !== 201) {
    return new Error("Database Request rejected");
  }
  const resData = await res.data;
  return resData;
};

export const getBookById = async (id) => {
  const res = await axios.get(`${BASE_URL}/api/book/${id}`);
  if (res.status !== 200) {
    return new Error("Unable to fetch book from the given id.");
  }
  const data = await res.data;
  return data.book;
};

export const updateBook = async (id, data) => {
  const res = await axios.put(`${BASE_URL}/api/book/${id}`, {
    title: data.title,
    author: data.author,
    imageUrl: data.imageUrl,
    price: data.price,
    featured: Boolean(data.featured),
  });
  if (res.status !== 200) {
    return new Error("Unable to update book from the given id.");
  }
  const resData = await res.data;
  return resData;
};

export const deleteBook = async (id) => {
  const res = await axios.delete(`${BASE_URL}/api/book/${id}`);
  if (res.status !== 200) {
    return new Error("Unable to delete book from the given id.");
  }
  const resData = await res.data;
  return resData;
};
