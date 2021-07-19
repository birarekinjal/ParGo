import React from "react";
import { Container, Row, Col, Card, Form } from "react-bootstrap";
import { Input, Checkbox, Button } from "../../components";
import { showToast, useStateCallback } from "../../utility/common";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "../../schema/resetPassword";
import { constants } from "../../constants";
import "../../styles/editUser.scss";

const ResetPassword = () => {
  const {
    title,
    buttons,
    confirmationPasswordPlaceholder,
    passwordPlaceholder,
  } = constants.resetPassword;

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",

    defaultValues: {
      new_password1: "",
      new_password2: "",
    },
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    console.log("data", data);
    // setLoading(true, () => {
    //   data.uid = uid;
    //   data.token = token;
    //   resetPassword(data)
    //     .then((res) => {
    //       if (res.status) {
    //         showToast(res.data.detail);
    //       }
    //       setLoading(false);
    //       history.push('/');
    //     })
    //     .catch((e) => {
    //       if (e.response.status === 400) {
    //         setErrorMessage(messages.resetPassword);
    //       } else {
    //         showToast(messages.tryAgain);
    //       }
    //       setLoading(false);
    //     });
    // });
  };

  return (
    <div className="min-vh-100 d-flex justify-content-center align-items-center login-body">
      <Container className="d-flex justify-content-center align-items-center">
        <div className="login-box">
          <div className="text-center">
            <img src="/images/logo.png" alt="Logo" className="logo" />
            <h1 className="heading">{title}</h1>
            {/* {errorMessage && <Alert variant="danger">{errorMessage}</Alert>} */}
          </div>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Input
              controlId="new_password1"
              type="password"
              placeholder={passwordPlaceholder}
              error={errors?.new_password1?.message}
              showError={touchedFields?.new_password1}
              registeredEvents={register("new_password1")}
              name="new_password1"
              isRequired={true}
              inputRef={register}
              label={"Enter New Password"}
              iconClass="fas fa-lock"
            />
            <Input
              controlId="new_password2"
              type="password"
              placeholder={confirmationPasswordPlaceholder}
              error={errors?.new_password2?.message}
              showError={touchedFields?.new_password2}
              registeredEvents={register("new_password2")}
              name="new_password2"
              isRequired={true}
              inputRef={register}
              label={"Enter New Password"}
              iconClass="fas fa-lock"
              onPaste={(e) => {
                e.preventDefault();
                return false;
              }}
            />
            <div className="text-center">
              <Button
                // disabled={isLoading}
                // isLoading={isLoading}
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

export default ResetPassword;
