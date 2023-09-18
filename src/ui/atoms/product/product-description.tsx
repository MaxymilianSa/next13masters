import { convertIntegerToCurrency } from "@/utils";

export type ProductDescriptionProps = {
  name: string;
  category: string;
  price: number;
}

export const ProductDescription = ({name, category, price}: ProductDescriptionProps) => (  
  <div className="flex flex-col gap-3 pb-7 items-center">
    <hr className="w-8 bg-orange-200"></hr>
    <h4 className="text-base font-medium text-gray-600 leading-5">{name} | {category}</h4>
    <p className="text-base font-medium text-orange-500 leading-4">{convertIntegerToCurrency(price / 100)}</p>
  </div>
)