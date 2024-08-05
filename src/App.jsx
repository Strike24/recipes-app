import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import { get5Recipes } from "./utils/pocketbase";
import Card from "./card";

function App() {
  const [recipes, setRecipes] = useState({ items: [] });

  useEffect(() => {
    console.log("fetching recipes");
    get5Recipes().then((data) => setRecipes(data));
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-primary">
      <header className="flex flex-col items-center justify-center px-10 py-16 text-[#211410]">
        <h1 className="mb-4 text-5xl font-extrabold md:text-6xl lg:text-7xl">
          I want to eat...{" "}
          <span className="text-accent">
            <TypeAnimation
              sequence={[
                "Dinner.",
                5000,
                "Light.",
                5000,
                "Heavy.",
                5000,
                "Breakfast.",
                5000,
                "Lunch.",
                5000,
                "Snacks.",
                5000,
                "Desserts.",
                5000,
                "Fruits.",
                5000,
                "Vegetables.",
                5000,
                "Carbs.",
                5000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </span>
        </h1>
        <h2 className="mb-8 text-xl font-semibold md:text-2xl lg:text-3xl">
          Find & Share recipes from around the world 🌍
        </h2>
        <button
          onClick={() => setCount(count + 1)}
          className="transform rounded-lg bg-accent px-6 py-3 text-xl font-bold text-primary shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-[#ad3b31]"
        >
          What do I eat Today? 🪄
        </button>
      </header>

      <main className="flex-grow bg-secondary px-6 py-12">
        <h2 className="mb-14 text-center text-5xl font-bold text-primary">
          Top Recipes
        </h2>

        <div class="flex w-full flex-1 flex-wrap justify-center gap-8 lg:flex-nowrap">
          {recipes.items.map((recipe) => (
            <Card
              key={recipe.id}
              title={recipe.name}
              image={recipe.image_url}
            />
          ))}
        </div>
      </main>
      {/* Footer */}
      <footer className="flex items-center justify-center bg-secondary py-8 text-center text-lg text-primary">
        <p className="text-lg">
          Made with ❤️ by{" "}
          <a
            href="
            
            "
            className="font-bold text-accent"
          >
            {" "}
            Ben Cohen
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
