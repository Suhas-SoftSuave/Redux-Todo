const initalstate = {
    arr: [],

}




const reducer = (state = initalstate, action) => {
    switch (action.type) {
        case 'CLEAR': {
            state = {
                arr: []
            }
            
            return (state)

           
        }
        case 'ADD': {
            /*
             return { 
                 ...state.arr,
                 arr: [...state.arr, action.textname]
             }
             */
             
             
         
            state = {
                arr: state.arr?.slice()
            }
            state.arr?.push(action.textname)
            //   state.arr.push(action.textname) 


            return (state)
            
        }

        case 'DELETE': {
            return {
                arr: state.arr.filter((item, index) => index !== action.indexnum)
            }
        }

        case 'EDIT': {

            const newArray = [...state.arr]

            if(action.indexvalue!==""){
                newArray[action.indexnum] = action.indexvalue
            }
            

            return {
                ...state, arr: newArray
            }

        }
        default: return state
    }
}

export default reducer