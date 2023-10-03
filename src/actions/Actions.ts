import axios from "axios";

export const getAllProds = async () => {
    try {
        const yunus = await axios.get('https://dummyjson.com/products');
        return yunus.data;
      } catch (error) {
        console.log(error);
      }
};


export const getAllUsers=async()=>{
  try{
    const users=await axios.get('https://dummyjson.com/users')
    return users.data;
  }catch(error){
  console.log(error);
  
}
}

//Пишем получение 1 продукта 
export const getOneProduct = async (id:string | undefined) => {
    try {
        const yunus = await axios.get(`https://dummyjson.com/products/${id}`);
        return yunus.data;
      } catch (error) {
        console.log(error);
      }
};

export const getOneUser=async(id:string | undefined)=>{
  try {
    const user=await axios.get(`https://dummyjson.com/users/${id}`);
    return user.data
  } catch (error) {
    console.log(error);
  }
}