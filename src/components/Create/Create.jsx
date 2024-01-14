import { useExpenseContext } from '../../contexts/ExpenseContext';
import { useForm } from '../../hooks/useForm';
// eslint-disable-next-line no-unused-vars
import styles from './Create.module.css';

export default function Create() {
    const { onAddExpense } = useExpenseContext();

    const initialValuesKeys = {
        ExpenseName: 'expenseName',
        ExpenseValue: 'expenseValue',
    };

    const {values, onChangeValues, onSubmit} = useForm({
        [initialValuesKeys.ExpenseName]: '',
        [initialValuesKeys.ExpenseValue]: '',
    }, onAddExpense);

    return (
        <form id="expense-form" onSubmit={onSubmit}>
            <input type="text"
                id="expense-name"
                name={initialValuesKeys.ExpenseName}
                value={values[initialValuesKeys.ExpenseName]}
                onChange={onChangeValues}
                placeholder="Expense Name" required />
            <input type="number"
                id="expense-amount"
                name={initialValuesKeys.ExpenseValue}
                value={values[initialValuesKeys.ExpenseValue]}
                onChange={onChangeValues}
                placeholder="Amount" required />
            <button type="submit">
                Add Expense
            </button>
        </form>
    );
}