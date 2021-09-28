import React ,{useState}from "react";

import Card from "../UI/Card";
import './Expenses.css';
import ExpenseFilter from "./ExpenseFilter";
import ExepnsesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props){

  const[filteredYear,setFilteredYear] = useState('2021');

  const filterChangeHandler=selectedyear=>{
    setFilteredYear(selectedyear);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return(
    <div>
    <Card className="expenses">
      <ExpenseFilter 
        selected={filteredYear} 
        onChangeFilter={filterChangeHandler}/>
      <ExpensesChart expenses={filteredExpenses}/>
      <ExepnsesList items={filteredExpenses}/>
    </Card>
    </div>
  );
}

export default Expenses;