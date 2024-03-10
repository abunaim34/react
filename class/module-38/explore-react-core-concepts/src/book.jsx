import BookStore from "./BookStore";

export default function Books({book}){
    return (
        <div>
            <h1>Book: {book.length}</h1>
            {
                book.map(book => <BookStore book={book}></BookStore>)
            }
        </div>
    )
}