import React from 'react';
import ExpenseForm from './ExpenseForm';
import {connect} from 'react-redux';
import {addExpense} from '../actions/expenses';

const AddExpensePage = (props) => (
  //The onSubmit is passed to the Expenseform which returns the 
  //expense object just like a callback
  <div>
    This is from my add expense component
    <ExpenseForm onSubmit={(expense)=>{
      props.dispatch(addExpense(expense));
      props.history.push('/');
    }}/>
  </div>
);

export default connect()(AddExpensePage);
