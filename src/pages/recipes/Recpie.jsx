import Navigation from "../../components/Navigation";
import { getRecipe } from "../../utils/pocketbase";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Recipe = () => {
  const [recipe, setRecipe] = useState({});
  useEffect(() => {
    async function fetchData() {
      const recipe = await getRecipe(id);
      setRecipe(recipe);
    }
    fetchData();
  }, []);
  let { id } = useParams();
  return (
    <>
      <Navigation />
      <img src={recipe.image_url} alt="" />
    </>
  );
};
export default Recipe;
