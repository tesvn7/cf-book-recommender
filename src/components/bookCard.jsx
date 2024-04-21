import React from "react";

const BookCard = ({ bookUrl, bookTitle, bookAuthor }) => {
  return (
    <div className="flex h-min flex-col items-center gap-1">
      <div className="h-32 w-24 border bg-slate-400 group-hover:border-slate-400">
        <img src={bookUrl} alt="IMG_BK" className="fit-contain" />
      </div>
      <p className="w-24 text-ellipsis text-center text-xs text-stone-600">
        {bookTitle}
      </p>
      <p className="text-[12px] font-serif text-stone-500">{bookAuthor}</p>
    </div>
  );
};

export default BookCard;
