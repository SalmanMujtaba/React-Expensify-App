import {addExpense, removeExpense, editExpense} from '../../actions/expenses';

test('should setup remove expense action object', ()=>{
    const action = removeExpense({id:'123'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id:'123'
    });
});

test('should setup edit expense action object', ()=>{
    const action = editExpense('123', {note:'new note'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id:'123',
        updates: {
            note:'new note'
        }
    });
});

test('should setup add expense action object with provided values', ()=>{
    const expenseData = {
        description: 'Rent',
        amount: 99999,
        createdAt: 1000,
        note: 'Last month'
    }
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('should setup add expense action object with no provided values', ()=>{
    const expenseData={}
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description:'',
            note:'',
            amount:0,
            createdAt:0,
            id: expect.any(String)
        }
    });
});


