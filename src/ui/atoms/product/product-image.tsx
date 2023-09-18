/* eslint-disable @next/next/no-img-element */
export type ProductImageProps = {
  src: string;
  alt: string;
}

export const ProductImage = ({src, alt}: ProductImageProps) => (
  <div className="aspect-square overflow-hidden">
    <img src={src} alt={alt} width={380} height={380} className="object-cover bg-orange-200" />
  </div>
)