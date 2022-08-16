import { ProductItem } from "./ProductItem"

interface SearchResultsProducts{
  products: Array<{
    id: number,
    price: number,
    priceFormatted: string,
    title: string
  }>
  onAddToWishList: (id: number) => void;
  totalPrice: number;
}
export default function SearchResults({ products, onAddToWishList, totalPrice }: SearchResultsProducts){
  return(
    <div>
      <h2>{totalPrice}</h2>
      {products.map(product => {
        return(
          <ProductItem 
            key={product.id}
            product={product}  
            onAddToWishList={onAddToWishList}
          />
        )
      })}
    </div>
  )
}

/**
 * Quando usar o memo?
 * 1. Pure Functional Components
 * 2. Renders too often
 * 3. Re-renders with same props
 * 4. Medium to big size
 */

/** 
 * Quando usar o useMemo
 * 1. Cálculos Pesados
 * 2. Igualdade Referencial (quando a gente repassa aquela informação para um componente filho)
 *  Ex: <Component totalPrice={totalPrice} />
*/