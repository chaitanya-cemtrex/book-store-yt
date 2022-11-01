import Book from "api-helpers/model/Book";
import { connectToDatabase } from "api-helpers/utils";
import BookList from "../components/BookList";
// import BookList from "../components/BookList";

function Home({ books }) {
  return <BookList featuredPage data={books} />;
}

export default Home;

export const getStaticProps = async () => {
  await connectToDatabase();
  let books;

  try {
    books = await Book.find();
  } catch (error) {
    return new Error(error);
  }

  const text = JSON.stringify(books);
  const data = JSON.parse(text);

  console.log(data);
  const featuredBooks = data.filter((book) => book.featured === true);

  return {
    props: {
      books: featuredBooks,
    },
    revalidate: 10,
  };
};
