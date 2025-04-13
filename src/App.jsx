import "./App.css";
import data from "./data.json";
import { Book } from "./components/Book";

function App() {
  const { books } = data;
  console.log(books);

  return (
    <>
      <div>Book library goes here</div>
      


    {books.map((book, index) => (
        <Book key={index} book={book} />
      ))}
    </>
  );
}

export default App;
