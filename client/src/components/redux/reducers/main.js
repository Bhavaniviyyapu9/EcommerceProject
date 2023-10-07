import {getProductsReducer} from "./Productsreducers";
import {combineReducers} from "redux";


const rootreducers = combineReducers({
    getproductsdata:getProductsReducer
});



export default rootreducers;