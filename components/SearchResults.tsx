import ProductItem from "./ProductItem"

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