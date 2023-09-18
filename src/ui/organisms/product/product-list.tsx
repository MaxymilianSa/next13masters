import { ProductItem, type ProductItemProps } from "@/ui/molecules/product/product-item"

type ProductListProps = {
  testId?: string;
  products: ProductItemProps[];
}

export const ProductList = ({testId, products}: ProductListProps) => (
  <ul className="flex gap-10 p-10 justify-center" data-testid={testId}>
    {products.map((product) => (
      <ProductItem key={product.id} {...product} />
    ))}
  </ul>
)