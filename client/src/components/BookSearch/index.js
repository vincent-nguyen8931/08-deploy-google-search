import React from "react";
import style from "./style.css";
// import Input from "/components/f"

function BookSearch() {
    return (

        <div className="jumbotron" >
            <h2 className="display-4">Book Search</h2>
            <p className="lead">Book: </p>
            <input class="form-control" type="text" placeholder="Default input"></input>

            <p classNameName="lead">
                <a classNameName="btn btn-primary btn-lg" href="#" role="button">Search</a>
            </p>
        </div >




        //         <div
        //             style={{ height: 300, clear: "both", paddingTop: 80, textAlign: "left" }}
        //             className="jumbotron"
        //         >
        //             <h2>Book Search</h2>
        //             <h3>Book: </h3>
        //             <form>
        //                 <Input
        //                     onChange={() => { }}
        //                     name="title"
        //                     placeholder="Title (required)"
        //                 />


        //                 <FormBtn
        //                     disabled={!(formObject.author && formObject.title)}
        //                     onClick={() => { }}
        //                 >
        //                     Submit Book
        //                 </FormBtn>
        //             </form>




    );
}

export default BookSearch;
