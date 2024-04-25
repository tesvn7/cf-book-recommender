# Book Recommendation Frontend |  🌍 [Live](https://cf-book-recommender.vercel.app/)

This is the frontend React app for the book recommendation system. It interacts with the backend recommendation API developed in FastAPI [Project-link](https://github.com/tesvn7/cf-br-backend). 

## Overview

The app allows users to:

- View a list of popular books across genres
- Search for a book title and get personalized recommendations

## Screenshot

<img src="https://raw.githubusercontent.com/tesvn7/web-image-hosting/main/br-ss1.png" width="49%" /> <img src="https://raw.githubusercontent.com/tesvn7/web-image-hosting/main/br-ss2.png" width="49%" /> 

## Features

- **Search bar**: User can enter a book title to get recommendations. Search is case sensitive.

- **Popular books view**: Fetches top 50 most popular books from the backend `/popular` endpoint.

- **Recommendations view**: Fetches top 10 recommendations for the searched book from the `/recommend` endpoint.

- **Loading skeleton**: Shows a placeholder loading state while fetching data.

- **Error handling**: Gracefully handles errors from the API.

## Frontend Tech Stack

- [Next.js](https://nextjs.org/) for server-side rendering and React framework.
- [Tailwind CSS](https://tailwindcss.com/) for styling.
- [React Query](https://react-query.tanstack.com/) for fetching data and managing cache.
- [Axios](https://github.com/axios/axios) for API calls.

## Usage

### Install dependencies

```bash
npm install
```

### Run locally
```bash
npm run dev
```
### Build and deploy
```bash
npm run build
npm run start
```


## Deployment
This application is deployed on Vercel. The deployment process is automated, triggered by a GitHub push to the main branch. Vercel provides seamless deployment and hosting for Next.js applications.

## Backend API
The frontend interacts with the backend FastAPI recommendation API. See backend-readme.md for details on the endpoints and underlying recommendation system.

### Key points:

- Uses collaborative filtering with book rating data
- Preprocesses data into pickle files for performance
- `/popular` and `/recommend `endpoints
- Deployed on AWS Lambda with Mangum


