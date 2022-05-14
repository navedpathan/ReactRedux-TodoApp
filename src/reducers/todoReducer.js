const initialData = {
    list : []
}

// const [list, setList] = useState([]);
const todoReducers = (state=initialData, action) => {
    switch (action.type) {
        case "ADD_TODO" : 

        const {id, data} = action.payload;

        if (data.length > 2) {

            return {
                ...state,
                list: [
                    ...state.list,
                    {
                    id:id,
                    data:data
                }
            ]
        }
    }

        case "DELETE_TODO" : 

       const updatedList = state.list.filter((element) => element.id !== action.id);

        return {
            ...state,
            list: updatedList
    }

        case "REMOVE_TODO" : 

        return {
            ...state,
            list: []
        }
        default: return state;
    }
}

export default todoReducers