import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

// min 6 characters, 1 uppercase letter, 1 lowercase letter, 1 numeric digit


export const signUpSchema = yup.object().shape({
    email: yup.string().email("Please enter a valid email").required("Required"),
    password: yup.string().min(6).matches(passwordRules, { message: "Please create a stronger password" })
});


// export const logInSchema = yup.object().shape({
//     email: yup.string().email("Please enter a valid email").required("Required"),
//     password: yup.string().min(6).matches(passwordRules, { message: "Password is not strong" })
// });