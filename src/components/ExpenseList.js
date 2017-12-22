import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectors from '../selectors/expenses';

const ExpenseList = (props)=>(
    <div>
        {props.expenses.map((expense)=>{
                return <ExpenseListItem key={expense.id} expense={expense}/>
        })}
    </div>
);

const mapStateToProps = (state) =>{
    return {
        //we want only selective data to be rendered. The dispatch call from the expenselistfilter
        //changes the store, thus the selector query changes and the component re-renders
        expenses: selectors(state.expenses,state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseList);
