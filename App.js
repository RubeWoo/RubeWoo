import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title:'Toilet paper',
    amount: 15.55,
    date: new Date(2021,7,8)
  },
  {
    id:'e2',
    title:'Car Insurance',
    amount: 294.67,
    date: new Date(2021,2,28)
  },
  {
    id:'e3',
    title:'Dinner',
    amount: 55,
    date: new Date(2021,3,28)
  },
  {
    id:'e4',
    title:'Coffee',
    amount: 30,
    date: new Date(2021,5,20)
  }
];

const App = (props) => {
  const [expenses,setExpenses]= useState(DUMMY_EXPENSES);
    const addExpenseHandler = expense => {
      setExpenses(prevExpenses =>{
        return[expense,...prevExpenses];
      });
};

/*   return React.createElement('div',{}, 
    React.createElement('h2', {} ,"Let's get started!"),
    React.createElement(Expenses,{items:expenses})
    ); */

return(
    <div>
     <NewExpense onAddExpense={addExpenseHandler}/>
     <Expenses items={expenses}/>
    </div>
  );
}

export default App;
