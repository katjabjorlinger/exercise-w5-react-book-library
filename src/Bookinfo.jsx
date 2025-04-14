
export const Bookinfo = ({ year, genre, rating, description }) => {
    return (
        <div>
        <p><strong>Year:</strong> {year}</p>
        <p><strong>Genre:</strong> {genre}</p>
        <p><strong>Rating:</strong> {rating}</p>
        <p><strong>Description:</strong> {description}</p>
      </div>
    );
    }

