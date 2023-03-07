import * as Yup from "yup";
import YupPassword from "yup-password";
YupPassword(Yup);

export const FirstStep = Yup.object({
    firstName: Yup.string().max(25).required("Please enter your First name"),
    lastName: Yup.string().max(25).required("Please enter your Last Name"),
    gender: Yup.string().required("you must choose property state"),
  });
export  const SecondStep = Yup.object({
    address: Yup.string().max(60).required("Please enter your address"),
    age: Yup.string().required("Please enter your age"),
  });
export  const ThirdStep = Yup.object({
    email: Yup.string().email().required("Please enter your email"),
    password: Yup.string()
      .min(8, "password must contain 8")
      .max(9)
      .minLowercase(1, "password must contain at least 1 lower case letter")
      .minUppercase(1, "password must contain at least 1 upper case letter")
      .minNumbers(1, "password must contain at least 1 number")
      .minSymbols(1, "password must contain at least 1 special character")
      .required(
        "Please enter your password (lower-case,uppe-case,number,special ) "
      ),
      confirm_password: Yup.string()
      .required()
      .oneOf([Yup.ref("password"), null], "Password must match"),
  });
