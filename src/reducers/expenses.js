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
                if(expense.id===action.id){
                    return {
                        //to expense list. Dispatch call->editExpense Action -> reducer
                        //add the fields specified by user, while calling dispatch function 
                        ...expense,
                        ...action.updates
                    };
                }else{
                    return expense;
                }             
            });  
        default: return state;
    }
}; 