import { type ProductItemProps } from '@/ui/molecules/product/product-item'
import { ProductList } from '@/ui/organisms/product/product-list'

const products: ProductItemProps[] = [
  {
    id: '1',
    name: 'Product 1',
    category: 'Category 1',
    price: 10000,
    image: {
      src: '/products/chair.jpg',
      alt: 'Chair',
    },
  },
  {
    id: '2',
    name: 'Product 1',
    category: 'Category 1',
    price: 10000,
    image: {
      src: '/products/chair.jpg',
      alt: 'Chair',
    },
  },
  {
    id: '3',
    name: 'Product 1',
    category: 'Category 1',
    price: 10000,
    image: {
      src: '/products/chair.jpg',
      alt: 'Chair',
    },
  },{
    id: '4',
    name: 'Product 1',
    category: 'Category 1',
    price: 10000,
    image: {
      src: '/products/chair.jpg',
      alt: 'Chair',
    },
  }
]

export default function Products() {
  return (
    <ProductList products={products} testId='products-list' />
  )
}
