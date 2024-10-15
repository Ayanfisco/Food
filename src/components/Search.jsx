import React, { useEffect, useState } from "react";
import styles from "./Search.module.css";

const url = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "5b03f89695204d9cb18f065ae726d11d";

export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("Pizza");
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${url}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data.results);
      setFoodData(data.results);
    }
    fetchFood();
  }, [query]); //syntax of use Effect hook
  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.input}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
