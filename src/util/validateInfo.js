export default function validateInfo(values) {
    let errors = {};

    if (!values.email) {
        errors.email = 'Email required';
    } else if(!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
    }

    if (!values.password) {
        errors.password = 'Password is required';
    } else if(values.password.length < 3) {
        errors.password = 'Password needs to be 3 characters or more';
    }

    if (values.password !== values['repeat-password']) {
        errors['repeat-password'] = 'Passwords do not match!';
    }

    return errors;
}