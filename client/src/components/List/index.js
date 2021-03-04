import React from "react";



function List() {


    return (
        <div>
            {book.map((book, index) => (
                <p key={index}>{book.name}</p>
            ))}
        </div>
    );
}

export default List;