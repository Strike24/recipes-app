import PocketBase from "pocketbase";
const pb = new PocketBase("http://127.0.0.1:8090");

async function getRecipes(number) {
  const resultList = await pb.collection("recipes").getList(1, number);
  console.log(resultList);
  return resultList;
}

async function getRecipe(id) {
  const result = await pb.collection("recipes").getOne(id);
  return result;
}

async function authenticatePassword(email, password) {
  const result = await pb.collection("users").authWithPassword(email, password);
  return result;
}

async function getUserDetails() {
  return pb.authStore.model;
}

export { getRecipes, authenticatePassword, getUserDetails, getRecipe, pb };
