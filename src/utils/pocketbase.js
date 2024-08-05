import PocketBase from "pocketbase";
const pb = new PocketBase("http://127.0.0.1:8090");

async function get5Recipes() {
  const resultList = await pb.collection("recipes").getList(1, 5);
  console.log(resultList);
  return resultList;
}

export { get5Recipes };
