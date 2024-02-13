# Use Case: Understanding useContext in React

## Overview
This project serves as a practical demonstration of how to utilize the `useContext` hook in React to manage global state across multiple components. The main focus is on the `MostPopularMovies` component, acting as the parent component where the context is created and state is managed.

## Getting Started
To get started, ensure you have Node.js and npm installed on your machine. You can install dependencies by running `npm install`.

## Project Structure
- **Parent Component (MostPopularMovies):** This component fetches data from the provided API and manages the global state using React's Context API. It provides this state to its child components via a context provider.
  
- **Child Components (MovieInfo and MovieImage):** These components consume the context provided by the parent component using the `useContext` hook. They display relevant information retrieved from the parent component's state.

## Components
### MostPopularMovies (Parent Component)
- **Responsibility:** Fetches data from the API, manages global state, and provides context to child components.
- **File:** `MostPopularMovies.jsx`
- **API:** [MoviesVerse API](https://rapidapi.com/Murad123/api/moviesverse1/)

### MovieInfo (Child Component)
- **Responsibility:** Displays movie information such as title, timeline, year, and rating.
- **File:** `MovieInfo.jsx`
- **Context Usage:** Utilizes the context provided by `MostPopularMovies` to access movie data.

### MovieImage (Child Component)
- **Responsibility:** Displays the movie image.
- **File:** `MovieImage.jsx`
- **Context Usage:** Also utilizes the context provided by `MostPopularMovies` to access the movie image.
- 
### Output

![Image](https://i.ibb.co/NsP3Xzg/Whats-App-Image-2024-02-14-at-01-31-55.jpg)
## Usage
1. Clone the repository.
2. Install dependencies using `npm install`.
3. Run the application with `npm start`.
4. Explore the `MostPopularMovies`, `MovieInfo`, and `MovieImage` components to understand how `useContext` is utilized for state management and data sharing.

## Additional Information
- This project uses the RapidAPI service to fetch movie data. You can find more information about the API [here](https://rapidapi.com/Murad123/api/moviesverse1/).

Feel free to explore, modify, and extend the codebase as needed for your learning purposes!
## Easy Explanation
 Here the project contains is based on the idea that Parent.jsx(where createContext is used)
 The Parent,jsx contains the useEffect(Api call) and we are updating the states according to that.
 There are Two child let's say (Children1.jsx) and (Children2.jsx) and they uses the Context that is created
 Go to the code for the understanding
In my code the parent is MostPopularMovies 
The child is MovieInfo.jsx and MovieImage.jsx


