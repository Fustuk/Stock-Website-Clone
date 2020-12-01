import axios from "axios";
const instance = axios.create({
  baseURL:
    "http://newsapi.org/v2//everything?q=stocks&from=2020-10-28&%20sortBy=popularity&apiKey=bf76c94ca0784435a8e110cbf71a08e7",
});
export default instance;
