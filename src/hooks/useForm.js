import { useState } from "react";

export const useForm = (initialValues, submitHandler) => {
    const [values, setValues] = useState(initialValues);

    const onChangeValues = (e) => {
        setValues(oldValues => ({...oldValues, [e.target.name]: e.target.value}));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        submitHandler(values);
        setValues(initialValues);
    };

    return {
        values,
        onChangeValues,
        onSubmit,
    };
};