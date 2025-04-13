import { Title } from "./Title";

export const Book = ({book}) => {
return (
    <div> 
        <Title title = {book.title} />
    </div>
);
};