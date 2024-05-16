import {TProduct} from "../types/TProduct";
import {ActionsType} from "../types/reducerType";

export type PageType = {
    productsPerPage: number,
    products: TProduct[],
    selectedProducts: TProduct[],
    changeProduct: TProduct,
    popupProducts: TProduct[],
    changeProductTable: TProduct
}

const initialState = {
    productsPerPage: 3,
    products:  [
        {
            id: 1,
            name: 'POCO C51',
            image: 'https://c.dns-shop.ru/thumb/st1/fit/500/500/256e8ece17c46e683dbe0facd94c5e69/5c108f7da6e5886d4d32d723d0e24ad0151bd790d7941374c56d9d8e9718d9f6.jpg.webp',
            manufacturer: 'POCO',
            releaseYear: 2023,
            screenSize: 6.52,
            country: 'Китай',
            memory: 64,
            refreshRate: 60,
            nfc: false,
            esimSupport: false,
            wirelessCharging: false,
            price: 4999
        },
        {
            id: 2,
            name: 'Nokia C01 Plus',
            image: 'https://c.dns-shop.ru/thumb/st1/fit/500/500/6e719f4d7bd78ae8ea3517f11141a04b/b695421b036a2d478969be020bb33ce22f07f1059d0a777b8096fe5ea2147758.jpg.webp',
            manufacturer: 'Nokia',
            releaseYear: 2021,
            screenSize: 5.45,
            country: 'Китай',
            memory: 16,
            refreshRate: 60,
            nfc: false,
            esimSupport: false,
            wirelessCharging: false,
            price: 5499
        },
        {
            id: 3,
            name: 'Xiaomi Redmi A2',
            image: 'https://c.dns-shop.ru/thumb/st1/fit/500/500/928609bff9ca607ceadcff4a4aa03798/2497abd13461bc4d3db9ca037a27bed904e8a6a87adc9adffebf9b0f4e4ca6fe.jpg.webp',
            manufacturer: 'Xiaomi',
            releaseYear: 2023,
            screenSize: 6.52,
            country: 'Китай',
            memory: 64,
            refreshRate: 60,
            nfc: false,
            esimSupport: false,
            wirelessCharging: false,
            price: 5999
        },
        {
            id: 4,
            name: 'Tecno POP 7',
            image: 'https://c.dns-shop.ru/thumb/st4/fit/500/500/8278fc2e0c767175a1bc3fe505284ca7/88c242ac48d30b2977c1802c8ad41f63484c9e2bb3a0976befc7d0bb7caa6c6e.jpg.webp',
            manufacturer: 'Tecno',
            releaseYear: 2023,
            screenSize: 6.6,
            country: 'Китай',
            memory: 64,
            refreshRate: 60,
            nfc: false,
            esimSupport: true,
            wirelessCharging: false,
            price: 5800
        },
        {
            id: 5,
            name: 'Apple iPhone SE 2022',
            image: 'https://c.dns-shop.ru/thumb/st1/fit/500/500/86472935061a3bd1b61320bbd9ebcd14/9d848a4b0ca51f965db98546c887c4bba27b0951b34ab38aca6c57ad0fdd9504.jpg.webp',
            manufacturer: 'Apple',
            releaseYear: 2022,
            screenSize: 4.7,
            country: 'Китай',
            memory: 64,
            refreshRate: 60,
            nfc: true,
            esimSupport: true,
            wirelessCharging: true,
            price: 44999
        },
        {
            id: 6,
            name: 'Apple iPhone 12',
            image: 'https://c.dns-shop.ru/thumb/st4/fit/500/500/80e5f04113d7955e3fae82319040e476/534489f34bc464e4cf68522999686645c9ac3ea0cca7faa03cef57480237d900.jpg.webp',
            manufacturer: 'Apple',
            releaseYear: 2020,
            screenSize: 6.1,
            country: 'Китай',
            memory: 64,
            refreshRate: 60,
            nfc: true,
            esimSupport: true,
            wirelessCharging: true,
            price: 51999
        },
        {
            id: 7,
            name: 'Samsung Galaxy A05',
            image: 'https://c.dns-shop.ru/thumb/st4/fit/500/500/1c9a69a513507268d1177378bf4230cb/c8f5557d2530420be9948999a0c8e0df2b2f498db6325aaf52a39ad3da85fcb0.jpg.webp',
            manufacturer: 'Samsung',
            releaseYear: 2021,
            screenSize: 6.7,
            country: 'Китай',
            memory: 64,
            refreshRate: 60,
            nfc: false,
            esimSupport: true,
            wirelessCharging: false,
            price: 12499
        },
        {
            id: 8,
            name: 'Samsung Galaxy A14',
            image: 'https://c.dns-shop.ru/thumb/st4/fit/500/500/6fbfeaed6bb388708b473fdaa2b505e4/dcc6d706fcfd2e798443d6afaeff6e1cdcaea99b658f2022a549ce67f02ea17b.jpg.webp',
            manufacturer: 'Samsung',
            releaseYear: 2023,
            screenSize: 6.5,
            country: 'Китай',
            memory: 128,
            refreshRate: 60,
            nfc: true,
            esimSupport: true,
            wirelessCharging: false,
            price: 13999
        },
    ],
    selectedProducts: [],
    changeProduct: {} as TProduct,
    changeProductTable: {} as TProduct,
    popupProducts: []
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
                selectedProducts: state.products.slice(0, action.productsPerPage).filter(product => product.id !== state.changeProduct.id)
            };


        case 'SET_CHANGED_PRODUCTS':
            return {
                ...state,
                selectedProducts: action.products
            };
        case 'CHANGE_PRODUCT_POPUP':
            return {
                ...state,
                changeProduct: action.product
            };
        case 'SET_POPUP_PRODUCTS':
            return {
                ...state,
                popupProducts: state.products.slice(action.productsPerPage)
            };
        case 'CHANGE_PRODUCT_TABLE':
            return {
                ...state,
                changeProductTable: action.product
            };
        case 'SET_CHANGED_POPUP':
            return {
                ...state,
                popupProducts: action.products
            };

        case 'DELETE_POPUP_PRODUCTS':
            return {
                ...state,
                popupProducts: state.popupProducts.filter(product => product.id != action.id)
            };
        default:
            return state;
    }
};
