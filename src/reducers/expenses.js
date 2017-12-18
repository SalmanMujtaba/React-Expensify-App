const defaultState = [];

export default (state = defaultState,action)=>{
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                //get the current expense array and add the new expense to it
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter(({id})=>id!==action.id);  
        case 'EDIT_EXPENSE':
            return state.map((expense)=>{
                if(action.id===expense.id){
                    return {
                        //add the fields specified by user, while calling dispatch function 
                        //to expense list. Dispatch call->editExpense Action -> reducer
                        ...expense,
                        ...action.expense
                    };
                }else{
                    return expense;
                }             
            });  
        default: return state;
    }
}; 