import { Title } from "./Title";
import { Author } from "./Author";
import { Image } from "./Image";
import { Bookinfo } from "./Bookinfo";

export const Book = ({ book }) => {
    return (
      <div className="book-card">
        <Title title={book.title} />
        <Author author={book.author} />
        <Image src={book.image} alt={book.title} />
        <Bookinfo
          year={book.year}
          genre={book.genre}
          rating={book.rating}
          description={book.description}
        />
      </div>
    );
  };
  