import React from 'react'
export interface IShoppingCart {
  text: string
}
export const ShoppingCart = ({ text }: IShoppingCart) => {
  return <div className="text">This is the Cart</div>
}
