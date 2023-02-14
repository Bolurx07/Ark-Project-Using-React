import * as yup from "yup";



export const signUpSchema = yup.object().shape({
    email: yup.string().email("Please enter a valid email").required("Required"),
    password: yup.string().min(6).matches(passwordRules, { message: "Please create a stronger password" })
});

export const logInSchema = yup.object().shape({
    email: yup.string().email("Please enter a valid email").required("Required"),
    password: yup.string().min(6).matches(passwordRules, { message: "Password is not strong" })
});