import { ProductDescription, type ProductDescriptionProps } from "@/ui/atoms/product/product-description"
import { ProductImage, type ProductImageProps } from "@/ui/atoms/product/product-image"

export type ProductItemProps = {
  id: string;
  image: ProductImageProps;
} & ProductDescriptionProps;

export const ProductItem = ({image, ...description}: ProductItemProps) => (
  <li>
    <article className="bg-white flex flex-col gap-8 p-4">
      <ProductImage {...image} />
      <ProductDescription {...{...description}} />
    </article>
  </li>
)
