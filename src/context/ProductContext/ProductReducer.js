const ProductReducer = (state, action) =>{
    switch(action.type){
        case "ProductStart":
            return {
                ...state,
                products: [],
                isFetching: true,
                error: false
            };
        case "ProductSuccess":
            return {
                ...state,
                products: action.payload,
                isFetching: false,
                error: false
                };
        case "ProductFailure":
             return {
                 ...state,
                products: [],
                isFetching: false,
                error: true
                };

                case "CreateProductStart":
                    return {
                       ...state,
                        isFetching: true,
                        error: false
                    };
                case "CreateProductSuccess":
                    return {
                        ...state,
                        products: [...state.products,  action.payload],
                        isFetching: false,
                        error: false
                        };
                case "CreateProductFailure":
                     return {
                        ...state,
                        isFetching: false,
                        error: true
                        };


                //         case "UPLOAD_MOVIE_START":
                //             return {
                //                ...state,
                //                 isFetching: true,
                //                 error: false
                //             };
                //         case "UPLOAD_MOVIE_SUCCESS":
                //             return {
                //                 movies: state.movies.map(movie => movie._id === action.payload._id && action.payload),
                //                 isFetching: false,
                //                 error: false
                //                 };
                //         case "UPLOAD_MOVIE_FAILURE":
                //              return {
                //                 ...state,
                //                 isFetching: false,
                //                 error: true
                //                 };

                // case "DELETE_MOVIES_START":
                //     return {
                //        ...state,
                //         isFetching: true,
                //         error: false
                //     };
                case "deleteSuccess":
                    return {
                        ...state,
                        products: state.products.filter((product) => product.id !== action.payload),
                        isFetching: false,
                        error: false
                        };
                case "deleteFailure":
                     return {
                        ...state,
                        isFetching: false,
                        error: true
                        };
                case "updateProductSuccess"  :
                    return{
                        isFetching: false,
                        products:state.products.map((item)=>{
                            if(item.id === action.payload.id){
                              return  item = action.payload.data

                            }
                            return item
                        }), 
                        error:false
                    }      
        default :
           return{
               ...state
           };
    }
}





export default ProductReducer;