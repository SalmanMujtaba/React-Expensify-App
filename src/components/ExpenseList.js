import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';

const ExpenseList = (props)=>(
    <div>
        {props.expenses.map((expense)=>{
                return <ExpenseListItem key={expense.id} expense={expense}/>
        })}
    </div>
);

const mapStateToProps = (state) =>{
    return {
        expenses: state.expenses,
        filters: state.filters
    };
};

export default connect(mapStateToProps)(ExpenseList);
