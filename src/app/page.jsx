"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import BookCard from "@/components/bookCard";
import { useState, useEffect } from "react";
import { getPopularBooks, getRecommendedBooks } from '@/app/functions/api_calls'
import LoadingSkeleton from "@/components/LoadingSkeleton";

export default function Home() {

  const [displayType, setDisplayType] = useState("popular");
  const [searchInput, setSearchInput] = useState("");
  const [popularBooks, setPopularBooks] = useState([]);
  const [top10Books, setTop10Books] = useState([]);
  
  useEffect(() => {
    // function to fetch popular books
    const fetchPopular = async () => {
      try {
        const json_result = await getPopularBooks();
        setPopularBooks(json_result);
      } catch (error) {
        console.log(error);
      }
    };

    // function to fetch top 10 recommended for searchName
    const fetchTop10Recommended = async (book) => {
      try {
        setTop10Books([]);
        const json_result = await getRecommendedBooks(book);
        setTop10Books(json_result);
      } catch (error) {
        console.log(error);
      }
    }

    // logic handling for fetch call
    if (displayType == "popular") {
      if (popularBooks.length == 0) {
        fetchPopular();
      }
      
    } else {
      fetchTop10Recommended(displayType);
    }
  }, [displayType]);
  
  return (
    <div className="h-screen w-screen bg-gradient-to-br overflow-y-auto from-blue-900/10 via-stone-300 to-orange-100 ">
      {/* Search Section  */}
      <div className="flex flex-col h-1/4 w-full border border-b-1 border-blue-950">
        <div className="flex h-1/2 items-center justify-around ">
          <h2 className="text-3xl font-mono text-blue-950">Book Recommender</h2>
          <p className="text-md font-sans text-blue-950">
            A Collaborative Filtering Recommendation System
          </p>
        </div>
        <div className="flex flex-col h-full items-center justify-center lg:mx-96 md:mx-48 sm:mx-24 ">
          <div className="flex w-full gap-6">
            <Input
              type="email"
              placeholder="Enter a book name ..."
              className="border-[1.5px] border-blue-950 "
              onChange={(e) => setSearchInput(e.target.value)}
              value={searchInput}
            />
            <Button
              type="submit"
              className="bg-blue-950"
              onClick={() => {
                (searchInput == "") ? setDisplayType('popular') : setDisplayType(searchInput);
                
              }}
            >
              Recommend
            </Button>
          </div>
          <div className="flex flex-col w-full justify-center pt-2 pr-36 ">
          <p className="text-sm text-gray-500 text-center">
            Model is case sensitive, so enter book name in proper casing
          </p>
          <p className="text-sm text-gray-500 text-center">
            e.g. the great gatsby ❌ The Great Gatsby ✅
          </p>
          </div>
        </div>
      </div>
      {/* Result Section  */}
      <div className=" h-full w-full ">
        {/* Heading */}
        <div className="text-md ml-20 flex h-12 items-end font-mono text-stone-500">
          <Button
            type="submit"
            className="hover:bg-blue-900 px-4 py-1 rounded-md border border-blue-950"
            onClick={() => setDisplayType("popular")}
          >
            Top 50 across genre
          </Button>
          {displayType != "popular" ? (
            <p className="ml-4 pb-1">Top 10 recommended for {displayType}</p>
          ) : (
            <></>
          )}
        </div>

        {/* Book list */}
        <div className="mx-20 md:mx-64 mt-14 pb-14 flex flex-wrap gap-10">
          {   
            (displayType == "popular")
             ? (popularBooks.length == 0)
                ? <LoadingSkeleton />
                : popularBooks.map((book,index) => {
                return (
                  <BookCard
                    key={index}
                    bookUrl={book["Image-URL-M"]}
                    bookTitle={book["Book-Title"]}
                    bookAuthor={book["Book-Author"]}
                  />
                );
                  })
             : (top10Books.length == 0)
                  ? <LoadingSkeleton />
                  : top10Books.map((book,index) => {
                return (
                  <BookCard
                    key={index}
                    bookUrl={book["Image-URL-M"]}
                    bookTitle={book["Book-Title"]}
                    bookAuthor={book["Book-Author"]}
                  />
                );
              })
          }
        </div>
      </div>
    </div>
  );
}
