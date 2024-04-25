
export async function getPopularBooks() {
    const response = await fetch("/api/popular");
    const data = await response.json();
  
    if (response.status != 200) {
      throw new Error(response.statusText); 
    }
  
    return data; 
  }

  export async function getRecommendedBooks(searchName) {

    const response = await fetch("/api/recommend/" + searchName, { method: "GET" });
    const data = await response.json();
    if (response.status != 200) {
      throw new Error(response.statusText); 
    }

    return data; 
  }