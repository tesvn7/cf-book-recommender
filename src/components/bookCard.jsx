import React from "react";

const BookCard = ({ bookUrl, bookTitle, bookAuthor }) => {
  return (
    <div className="flex h-min flex-col items-center gap-1">
      <div className=" border bg-slate-800 border-stone-400 shadow-lg hover:shadow-2xl hover:border-stone-100">
        <img src={bookUrl} alt="IMG_BK" className="object-fill h-36 w-24" />
      </div>
      <p className="w-24 text-center text-xs line-clamp-2 text-stone-600 ">
        {bookTitle}
      </p>
      <p className="text-[12px] font-serif line-clamp-2 text-stone-500">
        {bookAuthor}
      </p>
    </div>
  );
};

export default BookCard;
