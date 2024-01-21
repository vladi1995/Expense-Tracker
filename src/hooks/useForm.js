import { useState } from "react";

export const useForm = (initialValues, submitHandler, validate) => {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});

    const onChangeValues = (e) => {
        setValues(oldValues => ({ ...oldValues, [e.target.name]: e.target.value }));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate(values);
        setErrors(validationErrors);

        if (Object.keys(errors).length > 0) {
            return;
        }

        submitHandler(values, errors);
    };

    const newValues = (values) => {
        setValues(values);
    };

    return {
        values,
        onChangeValues,
        onSubmit,
        newValues,
        errors,
    };
};