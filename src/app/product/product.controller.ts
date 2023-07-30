import { NextFunction, Request, Response } from "express";
import { getProduct, getProducts } from "./product.service";

// export const createBook = async (req: Request, res: Response, next: NextFunction)=> {
//   const data = req.body;
//   const book =await createBookToDB(data);
//   res.status(200).json(
//     {
//       status: 'success',
//       data: book
//     }
//   )
//   console.log('book added successful')
// }

export const getAllProducts = async (req: Request, res: Response, next: NextFunction) => {
  const products = await getProducts();
  res.status(200).json(
    {
      status: 'success',
      data: products
    }
  )
  console.log(`${products.length} products fetched`)
}

export const getSingleProduct = async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;
  const product = await getProduct(id);
  res.status(200).json(
    {
      status: 'success',
      data: product
    }
  )
  console.log('Single product fetched')
}

// export const deleteSingleBook = async (req: Request, res: Response, next: NextFunction) => {
//   const id = req.params.id;
//   const book = await deleteBook(id);
//   res.status(200).json(
//     {
//       status: 'success',
//       data: book
//     }
//   )
//   console.log('Book deleted')
// }

// export const updateSingleBook = async (req: Request, res: Response, next: NextFunction) => {
//   const id = req.params.id;
//   const updatedData = req.body;
//   const book = await updateBook(id,updatedData);
//   res.status(200).json(
//     {
//       status: 'success',
//       data: book
//     }
//   )
//   console.log('Book updated')
// }