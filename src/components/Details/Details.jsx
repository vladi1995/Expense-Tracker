import { useEffect, useState } from "react";
import { useExpenseContext } from "../../contexts/ExpenseContext";
import { useForm } from "../../hooks/useForm";
import styles from "./Details.module.css";

import { CiEdit } from "react-icons/ci";
import { FcCancel } from "react-icons/fc";

export default function Details() {
  const {
    allExpenses,
    cost,
    handleDeleteExpenseClick,
    handleEditExpenseClick,
    isEditMode,
    edittedElement,
    onEditElement,
    handleCancelClick
  } = useExpenseContext();

  const initialValuesKeys = {
    ExpenseName: "expenseName",
    ExpenseValue: "expenseValue",
  };

  const { values, onChangeValues, onSubmit, newValues } = useForm(
    {
      [initialValuesKeys.ExpenseName]: "",
      [initialValuesKeys.ExpenseValue]: "",
    },
    onEditElement
  );

  useEffect(() => {
    newValues(edittedElement);
  }, [isEditMode]);

  return (
    <div className={`${styles["expense-table"]}`}>
      <table>
        <thead>
          <tr>
            <th>Expense Name</th>
            <th>Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody id="expense-list">
          {allExpenses.map((expense, index) => (
            <tr key={index}>
              <td>
                {isEditMode ? (
                  <>
                    <input
                      type="text"
                      name={initialValuesKeys.ExpenseName}
                      value={values[initialValuesKeys.ExpenseName] || ""}
                      onChange={onChangeValues}
                    />
                    <span className={`${styles["edit-icon"]}`} onClick={onSubmit}>
                      <CiEdit />
                    </span>
                    <span className={`${styles["delete-icon"]}`} onClick={handleCancelClick}>
                      <FcCancel />
                    </span>
                  </>
                ) : (
                  <p>{expense.expenseName}</p>
                )}
              </td>
              <td>
              {isEditMode ? (
                  <>
                    <input
                      type="number"
                      name={initialValuesKeys.ExpenseValue}
                      value={values[initialValuesKeys.ExpenseValue] || ""}
                      onChange={onChangeValues}
                    />
                    <span className={`${styles["edit-icon"]}`} onClick={onSubmit}>
                      <CiEdit />
                    </span>
                    <span className={`${styles["delete-icon"]}`} onClick={handleCancelClick}>
                      <FcCancel />
                    </span>
                  </>
                ) : (
                  <p>${expense.expenseValue}</p>
                )}
              </td>
              <td>
                <span
                  className={`${styles["delete-btn"]}`}
                  onClick={() => handleDeleteExpenseClick(index)}
                >
                  Delete
                </span>
                <span
                  className={`${styles["edit-btn"]}`}
                  onClick={() => handleEditExpenseClick(index)}
                >
                  Edit
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={`${styles["total-amount"]}`}>
        <strong>Total:</strong>$<span id="total-amount">{cost}</span>
      </div>
    </div>
  );
}
