import { useEffect, useState } from "react";

export const useForm = (initialValues, submitHandler, validate) => {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});

    const onChangeValues = (e) => {
        setValues(oldValues => ({ ...oldValues, [e.target.name]: e.target.value }));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        // setValues(initialValues);
        setErrors(validate(values));
    };

    const newValues = (values) => {
        setValues(values);
    }

    return {
        values,
        onChangeValues,
        onSubmit,
        newValues,
        errors,
    };
};