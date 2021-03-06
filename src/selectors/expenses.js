import moment from 'moment';
export default (expenses, {text, sortBy, startDate, endDate})=>{
    return expenses.filter((expense)=>{
        //if the start date is undefined, this field would not be considered
        //the second destructured values are the user input
        // const startDateMatch = typeof startDate!=='number' || expense.createdAt >= startDate;
        // const endDateMatch = typeof endDate!=='number' || expense.createdAt<=endDate;
        //find the description which has the text in it (only then include it for filltering)
        const createdAtMoment = moment(expense.createdAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
        const textMatch = expense.description.includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b)=>{
        if(sortBy==='date'){
            return a.createdAt < b.createdAt ? 1:-1;
        }else{
            return a.amount < b.amount ? 1:-1;
        }
    });
};