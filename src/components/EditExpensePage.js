import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {editExpense} from '../actions/expenses';
import {removeExpense} from '../actions/expenses';

//the HOC down there knows about the props(id) and adds expenses to it
const EditExpensePage = (props) => {
  return(
    <div>
      <ExpenseForm 
          expense = {props.expense}
          onSubmit={(expense)=>{
            props.dispatch(editExpense(props.expense.id,expense));
            props.history.push('/');
      }}/>
      <button onClick={()=>{
            props.dispatch(removeExpense(props.expense))
            props.history.push('/')
          }}>
        Remove</button> 
  </div>
  )
};


const  mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense)=>expense.id===props.match.params.id)
  }
}
export default connect(mapStateToProps)(EditExpensePage);
