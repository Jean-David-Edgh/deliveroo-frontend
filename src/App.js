import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import Category from "./components/Category";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-deliveroo-api.herokuapp.com"
        );
        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <p>En cours de chargement...</p>
  ) : (
    <div>
      <Header />
      <Hero restaurant={data.restaurant} />
      {data.categories.map((category, index) => {
        return (
          category.meals.length > 0 && (
            <Category category={category} key={index} />
          )
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
