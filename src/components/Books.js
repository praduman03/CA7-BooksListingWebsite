import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import "../App.css";

// color nav E91503  secondary FCFCCA
export default function Home() {
  const [booksdata, setData] = useState([]);
  const [List, setList] = useState(booksdata);
  const [Found, setFound] = useState("BOOKS THAT INSPIRE YOU....");
  let display = "none";

  useEffect(() => {
    const FetchData = async () => {
      const res = await axios.get(
        "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=Z0Ok3LKA9Ltg2xIuEkATOexdABR2nI7C"
      );

      console.log(res.data.results.books);
      setData(res.data.results.books);
      console.log(booksdata);
    };
    FetchData();
  }, []);
  const data = Object.values(booksdata);
  const search_parameters = Object.keys(Object.assign({}, ...data));

  function search() {
    return booksdata.filter((item) =>
      search_parameters.some((parameter) =>
        item[parameter].toString().toLowerCase().includes(List)
      )
    );
  }
  if (search().length === 0) {
    display = "block";
  }

  return (
    <div>
      <h1>{Found}</h1>
      <input
        className="searchdiv"
        type="search"
        id="search-box"
        onChange={(e) => setList(e.target.value)}
        placeholder="  Search books here..."
      />
      <div style={{display : display, padding:'15vh'}}><h3> Book Not Found </h3></div>
      <div className="books-container">
        {search(data).map((books) => {
          return (
            <div>
              <div className="book">
                <img src={books.book_image} alt="" />
                <h3>{books.title}</h3>
                <h4>by {books.author}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
