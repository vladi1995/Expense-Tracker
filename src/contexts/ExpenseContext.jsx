import { createContext, useContext, useState } from "react";

export const ExpenseContext = createContext();

export const ExpenseProvider = ({
    // eslint-disable-next-line react/prop-types
    children,
}) => {
    const [allExpenses, setAllExpenses] = useState([]);
    const [cost, setCost] = useState(0);
    const [isEditMode, setIsEditMode] = useState(false);

    const onAddExpense = (data) => {
        setAllExpenses(oldExpenses => [...oldExpenses, data]);
        setCost(oldCost => oldCost + Number(data.expenseValue));
    };

    const onDeleteExpense = (index) => {
        setCost(oldCost => oldCost - Number(allExpenses[index].expenseValue));
        setAllExpenses(oldExpenses => oldExpenses.filter((x, i) => i !== index));
    };

    const onEditExpense = (index) => {
        setIsEditMode(true);
    };

    const expenseContextValues = {
        onAddExpense,
        allExpenses,
        cost,
        onDeleteExpense,
        onEditExpense,
        isEditMode,
    };

    return <ExpenseContext.Provider value={expenseContextValues}>
        {children}
    </ExpenseContext.Provider>;
};

export const useExpenseContext = () => {
    return useContext(ExpenseContext);
};