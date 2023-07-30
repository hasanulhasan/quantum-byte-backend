import express from 'express'
import { productRoutes } from '../app/product/product.routes';
const routers = express.Router();

const moduleRoutes = [
  {
    path: '/products',
    route: productRoutes
  }
]

moduleRoutes.forEach(route=> routers.use(route.path, route.route))


export default routers