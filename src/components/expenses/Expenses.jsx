import { useState } from "react";
import { Expenses } from "./components/expenses/Expenses";
import { NewExpense } from "./components/new-expense/NewExpense";

function App() {
  const [expenses, setExpenses] = useState([
    {
      title: "Car Insurance",
      price: 300,
      date: new Date(),
      id: "f1",
    },
    {
      title: "Health Insurance",
      price: 400,
      date: new Date(),
      id: "f2",
    },
    {
      title: "Home Insurance",
      price: 10000,
      date: new Date(),
      id: "f3",
    },
    {
      title: "Life Insurance",
      price: 99000,
      date: new Date(),
      id: "f4",
    },
    {
      title: "air Insurance",
      price: 911,
      date: new Date(),
      id: "f5",
    },
  ]);
  const addNewExpenseHandler = (data) => {
    const updatedExpenses = [...expenses, data];
    setExpenses(updatedExpenses);
  };
  return (
    <div className="wrapper">
      <div className="container">
        <NewExpense onAdd={addNewExpenseHandler} />
        <Expenses expenses={expenses} />
      </div>
    </div>
  );
}

export default App;

