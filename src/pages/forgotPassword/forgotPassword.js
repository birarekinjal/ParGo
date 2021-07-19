import React from "react";
import { Container, Row, Col, Card, Form } from "react-bootstrap";
import { Input, Checkbox, Button } from "../../components";
import { showToast, useStateCallback } from "../../utility/common";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "../../schema/invitation";
import { constants } from "../../constants";
import "../../styles/editUser.scss";

const ForgotPassword = () => {
  const { emailPlaceholder, title, buttons } = constants.forgotPassword;

  const [isLoading, setLoading] = useStateCallback(false);

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      email: "",
    },
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    console.log("formdata", data);
    // setLoading(true, () => {
    //   const body = {
    //     first_name: data.firstName,
    //     last_name: data.lastName,
    //     is_admin: data.isAdmin,
    //   };
    //   editUser(id, body)
    //     .then((res) => {
    //       if (res.data.status) {
    //         showToast(res.data.message);
    //       } else {
    //         showToast(res.data.error_message);
    //       }
    //       setLoading(false);
    //     })
    //     .catch(() => setLoading(false));
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
              controlId="email"
              error={errors?.email?.message}
              showError={touchedFields?.email}
              registeredEvents={register("email")}
              name="email"
              isRequired={true}
              inputRef={register}
              placeholder={emailPlaceholder}
              label={"Email"}
              iconClass="fas fa-envelope"
            />
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

export default ForgotPassword;
