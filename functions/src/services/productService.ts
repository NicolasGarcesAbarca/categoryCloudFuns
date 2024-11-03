import {db} from "..";
export const getProducts = async () => {
  try {
    const querySnapshot = await db.collection("products").get();
    const list = querySnapshot.docs.map((doc) => doc.data());
    return list;
  } catch (err) {
    throw new Error("Error db");
  }
};
