import React, { useState, useEffect } from "react";
import { Form, Container, Alert } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Input, Button, Checkbox } from "../../components";
import { showToast, useStateCallback } from "../../utility/common";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "../../schema/login";
import { setUserToken } from "../../actions/login";
import { constants, messages } from "../../constants";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/common/form.scss";
import "../../styles/common/button.scss";
import "../../styles/login.scss";
import ForgotPassword from "../forgotPassword";
import { useHistory } from "react-router";
const Login = () => {
  // useEffect(() => {
  //   if (localStorage.getItem("SHOW_TOAST")) {
  //     localStorage.removeItem("SHOW_TOAST");
  //     showToast(messages.sessionExpired);
  //   }
  // }, []);
  const { title, buttons, emailPlaceholder, passwordPlaceholder } =
    constants.loginPage;

  const [isLoading, setLoading] = useStateCallback(false);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();

  const history = useHistory();

  console.log("l", localStorage.username);

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      email:
        localStorage.isChecked && localStorage.username
          ? localStorage.username
          : "",
      password: "",
      rememberMe:
        localStorage.isChecked && localStorage.username
          ? JSON.parse(localStorage.isChecked)
          : false,
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const { email, rememberMe } = data;

    if (rememberMe === true) {
      localStorage.setItem("username", email);
      localStorage.setItem("isChecked", rememberMe);
    }
    // else{
    //   localStorage.removeItem('username')
    //   localStorage.removeItem('isChecked')
    // }

    console.log("rememberMe", rememberMe);

    setLoading(true, () => {
      dispatch(setUserToken(data));

      // .then((res) => {
      //   if (!res.status) {
      //     //setErrorMessage(res.error_message);
      //   }
      //   setLoading(false);
      // })
      // .catch(() => setLoading(false));
      // setUserToken(data)
      //   .then((res) => {
      //     if (!res.status) {
      //       setErrorMessage(res.error_message);
      //     }
      //     setLoading(false);
      //   })
      //   .catch(() => setLoading(false));
    });
  };

  const handleChange = (e) => {
    console.log("object", e.target, "checked", e.target.checked);
  };

  return (
    <div className="min-vh-100 d-flex justify-content-center align-items-center login-body">
      <Container className="d-flex justify-content-center align-items-center">
        <div className="login-box">
          <div className="text-center">
            <img src="/images/logo.png" alt="Logo" className="logo" />
            <h1 className="heading">{title}</h1>
            {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
          </div>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Input
              controlId="formEmail"
              placeholder={emailPlaceholder}
              error={errors.email && errors.email.message}
              showError={touchedFields && touchedFields.email}
              registeredEvents={register("email")}
              iconClass="fas fa-envelope"
            />
            <Input
              controlId="formPassword"
              type="password"
              placeholder={passwordPlaceholder}
              error={errors.password && errors.password.message}
              showError={touchedFields && touchedFields.password}
              registeredEvents={register("password")}
              iconClass="fas fa-lock"
            />

            <div>
              <Checkbox
                controlId="rememberMe"
                dataFor="select-all"
                error={errors?.rememberMe?.message}
                showError={touchedFields?.rememberMe}
                placeholder="Remember me"
                name="rememberMe"
                label="Remember Me"
                registeredEvents={register("rememberMe")}
              />

              <a
                href="javascript:;"
                onClick={() => history.push("/forgot-password")}
              >
                Forgot Password?
              </a>
            </div>
            <br></br>

            <div className="text-center">
              <Button
                disabled={isLoading}
                isLoading={isLoading}
                label={buttons.login}
                onClick={handleSubmit(onSubmit)}
                type="submit"
              />
            </div>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default Login;
