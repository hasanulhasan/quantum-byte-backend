import { NextFunction, Request, Response } from "express";
import { createProductToDB, deleteProduct, getProduct, getProductByCategory, getProducts, updateProduct } from "./product.service";

export const createProduct = async (req: Request, res: Response, next: NextFunction)=> {
  const data = req.body;
  const product =await createProductToDB(data);
  res.status(200).json(
    {
      status: 'success',
      data: product
    }
  )
  console.log('Product added successfully')
}

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

export const getCategoriesProduct = async (req: Request, res: Response, next: NextFunction) => {
  const { category } = req.params;
  const products = await getProductByCategory(category);
  res.status(200).json(
    {
      status: 'success',
      data: products
    }
  )
  console.log(`${products.length} category products fetched`)
}

export const deleteSingleProduct = async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;
  const product = await deleteProduct(id);
  res.status(200).json(
    {
      status: 'success',
      data: product
    }
  )
  console.log('Product deleted')
}

export const updateSingleProduct = async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;
  const updatedData = req.body;
  const product = await updateProduct(id,updatedData);
  res.status(200).json(
    {
      status: 'success',
      data: product
    }
  )
  // console.log('Product updated', product)
}