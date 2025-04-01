export type MenuProduct = {
  id: string;
  imageSource: string;
  title: string;
  price: number;
  quantity?: number; //@TODO/ À voir si retirer quantity
  isAvailable: boolean;
  isPublicised: boolean;
};

export type BasketProductQuantity = {
  id: string;
  quantity: number;
};

export type BasketProduct = MenuProduct & BasketProductQuantity;
