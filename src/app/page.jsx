"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="flex flex-col h-screen w-screen bg-gradient-to-br from-blue-900/10 via-stone-300 to-orange-100 ">
      {/* Search Section  */}
      <div class="flex flex-col h-1/4 w-full border border-b-1 border-blue-950">
        <div class="flex h-1/2 items-center justify-around ">
          <h2 class="text-3xl font-mono text-blue-950">Book Recommender</h2>
          <p class="text-md font-sans text-blue-950">
            A Collaborative Filtering Recommendation System
          </p>
        </div>
        <div class="flex h-1/2 items-center justify-center border">
          <div className="flex w-full lg:mx-96 gap-6 border">
            <Input
              type="email"
              placeholder="Enter a book name ..."
              className="border-[1.5px] border-blue-950 "
            />
            <Button
              type="submit"
              className="bg-blue-950"
              onClick={() => {
                alert("Hello World!");
              }}
            >
              Recommend
            </Button>
          </div>
        </div>
      </div>
      {/* Result Section  */}
      <div class="flex h-full w-full flex-col">
        <div class="text-md ml-20 flex h-12 items-end font-mono text-stone-500">
          Top 50 across genre
        </div>
        <div class="mx-24 mt-5 flex flex-wrap gap-5 overflow-auto border border-red-500 hover:overflow-scroll">
          <div class="flex h-min flex-col items-center gap-1">
            <div class="h-32 w-24 border bg-slate-400 group-hover:border-slate-400"></div>
            <p class="w-24 text-ellipsis text-center text-xs text-stone-600">
              Book Title with a long name
            </p>
            <p class="text-[12px] font-serif text-stone-500">Author Name</p>
          </div>
        </div>
      </div>
    </div>
  );
}
