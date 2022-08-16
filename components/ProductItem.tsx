import React, {memo, Suspense, useState} from 'react';

// Carregamento só quando o usuário vai clicar nesse elemento
const AddProductToWishList = React.lazy(() => {
  return import('./AddToWhishList')
});

interface ProductItemProps{
  product: {
    id: number,
    price: number,
    priceFormatted: string,
    title: string
  }
  onAddToWishList: (id: number) => void;
}

function ProductItemComponent({ product, onAddToWishList }: ProductItemProps){
  const [ isAddingToWishList, setIsAddingToWishList ] = useState(false);
  return(
    <div>
      {product.title} - <strong>{product.priceFormatted}</strong>
      <button onClick={() => setIsAddingToWishList(true)} >Adicionar</button>

      {isAddingToWishList && (
        <Suspense fallback={<span>Carregando...</span>}>
          <AddProductToWishList
            onAddToWishList={() => onAddToWishList(product.id)}
            onCloseButton={() => setIsAddingToWishList(false)}
          />
        </Suspense>
      )}
    </div>
  )
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.product, nextProps.product)
})