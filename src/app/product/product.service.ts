import { Product } from "./product.model";

// export const createBookToDB = async (payload: IBook): Promise<IBook>=> {
//   const book = await Book.create(payload)
//   return book
// }

export const getProducts = async ()=> {
  const products = await Product.find({});
  return products;
}

export const getProduct = async (id: string)=> {
  const product = await Product.findById(id);
  return product;
}

// export const deleteBook = async (id: string)=> {
//   const book = await Book.findByIdAndDelete(id);
//   return book;
// }

// export const updateBook = async (id: string, payload:Partial<IBook>)=> {
//   const book = await Book.findOneAndUpdate({_id: id}, payload, {new:true});
//   return book;
// }