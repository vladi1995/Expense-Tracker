import { createContext, useContext, useState } from "react";

export const ExpenseContext = createContext();

export const ExpenseProvider = ({
    children,
}) => {
    const [allExpenses, setAllExpenses] = useState([]);
    const [cost, setCost] = useState(0);

    const onAddExpense = (data) => {
        setAllExpenses(oldExpenses => [...oldExpenses, data]);
        setCost(oldCost => oldCost + Number(data.expenseValue));
    };

    const onDeleteExpense = (index) => {
        setCost(oldCost => oldCost - Number(allExpenses[index].expenseValue));
        setAllExpenses(oldExpenses => oldExpenses.filter((x, i) => i !== index));
    };

    const expenseContextValues = {
        onAddExpense,
        allExpenses,
        cost,
        onDeleteExpense,
    };

    return <ExpenseContext.Provider value={expenseContextValues}>
        {children}
    </ExpenseContext.Provider>;
};

export const useExpenseContext = () => {
    return useContext(ExpenseContext);
};