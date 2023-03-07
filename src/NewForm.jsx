import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { FirstStep, SecondStep, ThirdStep } from "./Validation";
import {Label,TextInput,Radio,Card,Select,Textarea,Button} from "flowbite-react";
const initialValues = {lastName: "",firstName: "",address: "",age: "",gender: "",email: "",password: "",confirm_password: ""};

const NewForm = () => {
  let navigate = useNavigate();
  const [step, setStep] = useState(0);

  const signUpSchema = () => {
    if (step === 0) {
      return FirstStep;
    } else if (step === 1) {
      return SecondStep;
    } else {
      return ThirdStep;
    }
  };

  const {values,errors,touched,handleBlur,handleChange,handleSubmit,getFieldProps} = useFormik({
    initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      if (step === 2) {
        navigate("/done");
      } else {
        setStep(step + 1);
      }
      console.log("values: ", values);
    },
  });

  return (
    <div>
     
        <div className="step">
          <div className="stepper-wrapper">
            <div
              className={
                step === 0 ? "stepper-item active" : "stepper-item completed"
              }
            >
              <div className="step-counter">1</div>
              <div className="step-name">First</div>
            </div>
            <div
              className={
                step === 1
                  ? "stepper-item active"
                  : step > 1
                  ? "stepper-item completed"
                  : "stepper-item"
              }
            >
              <div className="step-counter">2</div>
              <div className="step-name">Second</div>
            </div>
            <div
              className={step === 2 ? "stepper-item active" : "stepper-item"}
            >
              <div className="step-counter">3</div>
              <div className="step-name">Third</div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center align-self-center" >
          <Card style={{ width: "494px" }}>
            <form className="flex flex-col gap-4">
              <div className={step === 0 ? "" : "di-none"}>
                <div>
                  <div>
                    <div>
                      <div className="mb-1 block">
                        <Label
                          htmlFor="username4"
                          color={
                            errors.firstName && touched.firstName
                              ? "failure"
                              : "gray"
                          }
                          value="First Name"
                        />
                      </div>
                      <TextInput
                        name="firstName"
                        id="username4"
                        placeholder="First Name"
                        value={values.firstName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        color={
                          errors.firstName && touched.firstName
                            ? "failure"
                            : "gray"
                        }
                        helperText={
                          <React.Fragment>
                            {errors.firstName && touched.firstName ? (
                              <span className="error">{errors.firstName}</span>
                            ) : null}
                          </React.Fragment>
                        }
                      />
                    </div>
                  </div>

                  <div>
                    <div className="mb-1 block">
                      <Label
                        htmlFor="username4"
                        color={
                          errors.lastName && touched.lastName
                            ? "failure"
                            : "gray"
                        }
                        value="Last Name"
                      />
                    </div>
                    <TextInput
                      name="lastName"
                      id="username4"
                      placeholder="Last Name"
                      value={values.lastName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      color={
                        errors.lastName && touched.lastName ? "failure" : "gray"
                      }
                      helperText={
                        <React.Fragment>
                          {errors.lastName && touched.lastName ? (
                            <span className="error">{errors.lastName}</span>
                          ) : null}
                        </React.Fragment>
                      }
                    />
                  </div>
                  <fieldset className="flex flex-col gap-1" id="radio">
                    <legend>Gender</legend>
                    <div className="flex items-center gap-2">
                      <Radio
                        value="male"
                        id="male"
                        className="mb-2 "
                        onChange={getFieldProps("currState").onChange}
                        name="gender"
                      />
                      <Label htmlFor="united-state">Male</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Radio
                        value="female"
                        id="female"
                        className="mb-2"
                        onChange={getFieldProps("gender").onChange}
                        name="gender"
                      />
                      <Label htmlFor="germany">Female</Label>
                    </div>
                    {errors.gender && touched.gender ? (
                      <span className="error">{errors.gender}</span>
                    ) : null}
                  </fieldset>
                </div>
              </div>
              <div className={step === 1 ? "" : "di-none"}>
                <div id="textarea">
                  <div className="mb-2 block">
                    <Label
                      htmlFor="comment"
                      color={
                        errors.address && touched.address ? "failure" : "gray"
                      }
                      value="Address"
                    />
                  </div>
                  <Textarea
                    id="comment"
                    placeholder="Address..."
                    value={values.address}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="address"
                    rows={3}
                    color={
                      errors.address && touched.address ? "failure" : "gray"
                    }
                    helperText={
                      <React.Fragment>
                        {errors.address && touched.address ? (
                          <span className="error">{errors.address}</span>
                        ) : null}
                      </React.Fragment>
                    }
                  />
                </div>

                <div id="select">
                  <div className="mb-2 block">
                    <Label htmlFor="countries" value="Select your country" />
                  </div>
                  <Select
                    id="countries"
                    value={values.age}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="age"
                    placeholder="Age"
                    color={errors.age && touched.age ? "failure" : "gray"}
                    helperText={
                      <React.Fragment>
                        {errors.age && touched.age ? (
                          <span className="error">{errors.age}</span>
                        ) : null}
                      </React.Fragment>
                    }
                  >
                    <option value="">Open this select menu</option>
                    <option value="10-20">10-20</option>
                    <option value="21-40">21-40</option>
                    <option value="41-60">41-60</option>
                  </Select>
                </div>

                <div></div>
              </div>
              <div className={step === 2 ? "" : "di-none"}>
                <div>
                  <div className="mb-2 block">
                    <Label
                      htmlFor="email4"
                      value="Your email"
                      color={errors.email && touched.email ? "failure" : "gray"}
                    />
                  </div>
                  <TextInput
                    id="email4"
                    type="email"
                    placeholder="name@flowbite.com"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      <React.Fragment>
                        {errors.email && touched.email ? (
                          <span className="error">{errors.email}</span>
                        ) : null}
                      </React.Fragment>
                    }
                  />
                </div>

                <div>
                  <div className="mb-2 block">
                    <Label
                      htmlFor="password2"
                      value="Your password"
                      color={
                        errors.password && touched.password ? "failure" : "gray"
                      }
                    />
                  </div>
                  <TextInput
                    id="password2"
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      <React.Fragment>
                        {errors.password && touched.password ? (
                          <span className="error" color="failure">{errors.password}</span>
                        ) : null}
                      </React.Fragment>
                    }
                  />
                </div>
                 <div>
                  <div className="mb-2 block">
                    <Label
                      htmlFor="password2"
                      value="Your Confirm Password"
                      color={
                        errors.password && touched.password ? "failure" : "gray"
                      }
                    />
                  </div>
                  <TextInput
                    id="password2"
                    type="password"
                    name="confirm_password"
                    placeholder="Confirm Password"
                    value={values.confirm_password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      <React.Fragment>
                        {errors.confirm_password && touched.confirm_password ? (
                          <span className="error">{errors.confirm_password}</span>
                        ) : null}
                      </React.Fragment>
                    }
                  />
                </div>
              </div>
              <Button
                gradientMonochrome="info"
                color={"purpleToBlue"}
                onClick={handleSubmit}
              >
                {step === 2 ? "Submit" : "Next"}
              </Button>
              <Button
                className={step === 0 ? "di-none" : ""}
                onClick={() => {
                  setStep(step - 1);
                }}
                gradientDuoTone="purpleToBlue"
              >
                Prev
              </Button>
            </form>
          </Card>
        </div>
      </div>
   
  );
};

export default NewForm;
