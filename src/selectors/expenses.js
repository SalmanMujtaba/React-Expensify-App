export default (expenses, {text, sortBy, startDate, endDate})=>{
    return expenses.filter((expense)=>{
        //if the start date is undefined, this field would not be considered
        //the second destructured values are the user input
        const startDateMatch = typeof startDate!=='number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate!=='number' || expense.createdAt<=endDate;
        //find the description which has the text in it (only then include it for filltering)
        // console.log(expense.description);
        // console.log(text.text);
        // console.log(expense.description.includes(text.text.toLowerCase()));

        const textMatch = expense.description.includes(text.text.toLowerCase());
        // console.log(textMatch);
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b)=>{
        if(sortBy==='date'){
            return a.createdAt < b.createdAt ? 1:-1;
        }else{
            return a.amount < b.amount ? 1:-1;
        }
    });
};