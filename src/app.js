import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filter';
import getVisibleExpenses from './selectors/expenses';

const store = configureStore();
store.dispatch(addExpense({
    description:'water bill'
}));
store.dispatch(addExpense({
    description:'gas bill'
}));
store.dispatch(setTextFilter({
    text:'water'
}));

const state = store.getState();

const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);
ReactDOM.render(<AppRouter/>, document.getElementById('app'));
