export interface AddToWhishListProps{
  onAddToWishList: () => void;
  onCloseButton: () => void;
}

export default function AddToWhishList({ onAddToWishList, onCloseButton }: AddToWhishListProps){
  return(
    <>
      <span>Deseja realmente adicionar?</span>
      <button onClick={onAddToWishList}>Sim</button>
      <button onClick={onCloseButton}>Não</button>
    </>
  )
}
