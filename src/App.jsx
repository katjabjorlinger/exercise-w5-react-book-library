import "./App.css";
import data from "./data.json";
import { Book } from "./Book";
import { Header } from "./Header";

function App() {
  const { books } = data;
  console.log(books);

  return (
    <>
    <Header/>
  <div className="book-library">
    {books.map((book) => (
      <Book key={book.title} book={book} />
    ))}
  </div>
    </>
  );
}

export default App;
