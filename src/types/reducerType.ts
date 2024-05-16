import {TProduct} from "./TProduct";

export type SetProductsPerPageType = {
    type: 'SET_PRODUCTS_PER_PAGE',
    perPage: number
}

export type SetSelectedProducts = {
    type: 'SET_SELECTED_PRODUCTS',
    productsPerPage: number
}

export type ChangeProductPopupType = {
    type: 'CHANGE_PRODUCT_POPUP',
    product: TProduct
}

export type ChangeProductTableType = {
    type: 'CHANGE_PRODUCT_TABLE',
    product: TProduct
}

export type ChangedProductsType = {
    type: 'SET_CHANGED_PRODUCTS',
    products: TProduct[]
}

export type setPopupProductsType = {
    type: 'SET_POPUP_PRODUCTS',
    productsPerPage: number
}

export type deleteProductPopupType = {
    type: 'DELETE_POPUP_PRODUCTS',
    id: number | null
}

export type SetChangedPopupType = {
    type: 'SET_CHANGED_POPUP',
    products: TProduct[]
}

export type ActionsType = SetProductsPerPageType | ChangeProductTableType| SetSelectedProducts |
    setPopupProductsType | ChangeProductPopupType | deleteProductPopupType | ChangedProductsType | SetChangedPopupType