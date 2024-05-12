import {Types} from "../types/types";

export type PageType = {
    productsPerPage: number,
    showPopup: boolean,
    products: Types[],
    selectedProducts: Types[],
    changeProduct: Types
}

const initialState = {
    productsPerPage: 2,
    showPopup: false,
    products: [
        {
            id: 1,
            name: 'Product 1',
            image: 'product1.jpg',
            manufacturer: 'Apple',
            releaseYear: 2021,
            screenSize: 6.5,
            country: 'Country 1',
            memory: 128,
            refreshRate: 60,
            nfc: false,
            esimSupport: true,
            wirelessCharging: false,
            price: 27490
        },
        {
            id: 2,
            name: 'Product 2',
            image: 'product1.jpg',
            manufacturer: 'Apple',
            releaseYear: 2021,
            screenSize: 6.5,
            country: 'Country 1',
            memory: 128,
            refreshRate: 60,
            nfc: true,
            esimSupport: true,
            wirelessCharging: false,
            price: 27490
        },
        {
            id: 3,
            name: 'Product 3',
            image: 'product1.jpg',
            manufacturer: 'Apple',
            releaseYear: 2021,
            screenSize: 6.5,
            country: 'Country 1',
            memory: 128,
            refreshRate: 60,
            nfc: true,
            esimSupport: true,
            wirelessCharging: false,
            price: 27490
        },
        {
            id: 4,
            name: 'Product 4',
            image: 'product1.jpg',
            manufacturer: 'Apple',
            releaseYear: 2021,
            screenSize: 6.5,
            country: 'Country 1',
            memory: 128,
            refreshRate: 60,
            nfc: true,
            esimSupport: true,
            wirelessCharging: false,
            price: 27490
        },
        {
            id: 5,
            name: 'Product 5',
            image: 'product1.jpg',
            manufacturer: 'Apple',
            releaseYear: 2021,
            screenSize: 6.5,
            country: 'Country 1',
            memory: 128,
            refreshRate: 60,
            nfc: true,
            esimSupport: true,
            wirelessCharging: false,
            price: 27490
        },
        {
            id: 6,
            name: 'Product 6',
            image: 'product1.jpg',
            manufacturer: 'Apple',
            releaseYear: 2021,
            screenSize: 6.5,
            country: 'Country 1',
            memory: 128,
            refreshRate: 60,
            nfc: true,
            esimSupport: true,
            wirelessCharging: false,
            price: 27490
        },
        {
            id: 7,
            name: 'Product 7',
            image: 'product1.jpg',
            manufacturer: 'Apple',
            releaseYear: 2021,
            screenSize: 6.5,
            country: 'Country 1',
            memory: 128,
            refreshRate: 60,
            nfc: true,
            esimSupport: true,
            wirelessCharging: false,
            price: 27490
        },
        {
            id: 8,
            name: 'Product 8',
            image: 'product1.jpg',
            manufacturer: 'Apple',
            releaseYear: 2021,
            screenSize: 6.5,
            country: 'Country 1',
            memory: 128,
            refreshRate: 60,
            nfc: true,
            esimSupport: true,
            wirelessCharging: false,
            price: 27490
        },
    ],
    selectedProducts: [],
    changeProduct: {} as Types
};

export const pageReducer = (state: PageType = initialState, action: ActionsType): PageType => {
    switch (action.type) {
        case 'SET_PRODUCTS_PER_PAGE':
            return {
                ...state,
                productsPerPage: action.perPage
            };
        case 'SET_SELECTED_PRODUCTS':
            return {
                ...state,
                selectedProducts: action.filteredProducts
            };
        case 'CHANGE_PRODUCT_ID':
            return {
                ...state,
                changeProduct: action.product
            };
        default:
            return state;
    }
};

export type SetProductsPerPageType = {
    type: 'SET_PRODUCTS_PER_PAGE',
    perPage: number
}

export type SetSelectedProducts = {
    type: 'SET_SELECTED_PRODUCTS',
    filteredProducts: Types[]
}

export type ChangeProductIdType = {
    type: 'CHANGE_PRODUCT_ID',
    product: Types
}


type ActionsType = SetProductsPerPageType | ChangeProductIdType| SetSelectedProducts

export const setProductsPerPageAC = (perPage: number): SetProductsPerPageType => {
    return {type: 'SET_PRODUCTS_PER_PAGE', perPage: perPage}
}
export const setSelectedProductsAC = (filteredProducts: Types[]): SetSelectedProducts => {
    return {type: 'SET_SELECTED_PRODUCTS', filteredProducts: filteredProducts}
}
export const changeProductIdAC = (product: Types): ChangeProductIdType => {
    return {type: 'CHANGE_PRODUCT_ID', product: product}
}

