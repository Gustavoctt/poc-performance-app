import { ProductItem } from "./ProductItem"

interface SearchResultsProducts{
  products: Array<{
    id: number,
    price: number,
    title: string
  }>
}
export default function SearchResults({ products }: SearchResultsProducts){
  return(
    <div>
      {products.map(product => {
        return(
          <ProductItem product={product}  />
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