const CategoryReducer = (state, action) =>{
    switch(action.type){
        case "CategoryStart":
            return {
                ...state,
                categories: [],
                isFetching: true,
                error: false

            };
        case "CategorySuccess":
            return {
                ...state,
                categories: action.payload,
                isFetching: false,
                error: false
                };
        case "CategoryFailure":
             return {
                 ...state,
                categories: [],
                isFetching: false,
                error: true
                };

                case "createCategoryStart":
                    return {
                       ...state,
                        isFetching: true,
                        error: false
                    };
                case "createCategorySuccess":
                    return {
                        ...state,
                        categories: [...state.categories,  action.payload],
                        isFetching: false,
                        error: false
                        };
                case "createCategoryFailure":
                     return {
                        ...state,
                        isFetching: false,
                        error: true
                        };


                //         case "UPLOAD_MOVIE_LIST_START":
                //             return {
                //                ...state,
                //                 isFetching: true,
                //                 error: false
                //             };
                //         case "UPLOAD_MOVIE_LIST_SUCCESS":
                //             return {
                //                 lists: state.lists.map(list => list._id === action.payload._id && action.payload),
                //                 isFetching: false,
                //                 error: false
                //                 };
                //         case "UPLOAD_MOVIE_LIST_FAILURE":
                //              return {
                //                 ...state,
                //                 isFetching: false,
                //                 error: true
                //                 };

                // case "DELETE_MOVIES_LISTS_START":
                //     return {
                //        ...state,
                //         isFetching: true,
                //         error: false
                //     };
                case "deleteSuccess":
                    return {
                        ...state,
                        categories: state.categories.filter((category) => category.id !== action.payload),
                        isFetching: false,
                        error: false
                        };
                case "deleteFailure":
                     return {
                        ...state,
                        isFetching: false,
                        error: true
                        };
                        case "updateCategory":
                            return{
                                ...state,
                                categories:state.categories.map((item)=>{
                                    if(item.id === action.payload.id){
                                      return  item = action.payload.name

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


// handle editing
// setlist(
//     list.map((item)=>{
//       if(item.id === editId){
//         return {...item, title:name}
//       }
//       return item ;
//     })
//   )


export default CategoryReducer;