// // const MAIN_URL =process.env.REACT_APP_SERVER;
// const MAIN_URL = process.env.REACT_APP_SERVER

// export const API_URLS = {
//   MAIN_URL,
//   REVIEWS: MAIN_URL + "reviews/",
//   EVNTS: MAIN_URL + "events/",
//   IMAGE_POST: MAIN_URL + "posts/",
// };

const MAIN_URL = process.env.REACT_APP_SERVER;

export const API_URLS = {
  MAIN_URL,
  people: MAIN_URL, // Update the endpoint to match the backend /people route
  // Add other endpoints as needed
};


// make sure that the url being called in the console is displaying correctly  
// seomtime the way you write shit will cause the simpleiest errors