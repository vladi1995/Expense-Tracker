import { createContext, useContext, useState } from "react";

export const ExpenseContext = createContext();

export const ExpenseProvider = ({
    // eslint-disable-next-line react/prop-types
    children,
}) => {
    const [allExpenses, setAllExpenses] = useState([]);
    const [cost, setCost] = useState(0);
    const [isEditMode, setIsEditMode] = useState(false);
    const [edittedElement, setEdittedElement] = useState({});
    const [edittedElementIndex, setEdittedElementIndex] = useState(null);

    const onAddExpense = (data) => {
        setAllExpenses(oldExpenses => [...oldExpenses, data]);
        setCost(oldCost => oldCost + Number(data.expenseValue));
    };

    const handleDeleteExpenseClick = (index) => {
        setCost(oldCost => oldCost - Number(allExpenses[index].expenseValue));
        setAllExpenses(oldExpenses => oldExpenses.filter((x, i) => i !== index));
    };

    const handleEditExpenseClick = (index) => {
        setEdittedElement(allExpenses.find((x, i) => i === index));
        setEdittedElementIndex(index);
        setIsEditMode(true);
      };

    const handleCancelClick = () => {
        setIsEditMode(false);
    }

    const onEditElement = (newValues) => {
        setAllExpenses(oldExpenses => oldExpenses.map((x, i) => i == edittedElementIndex ? newValues : x));
        setIsEditMode(false);
    }

    const expenseContextValues = {
        onAddExpense,
        allExpenses,
        cost,
        handleDeleteExpenseClick,
        handleEditExpenseClick,
        isEditMode,
        edittedElement,
        onEditElement,
        handleCancelClick
    };
    

    return <ExpenseContext.Provider value={expenseContextValues}>
        {children}
    </ExpenseContext.Provider>;
};

export const useExpenseContext = () => {
    return useContext(ExpenseContext);
};