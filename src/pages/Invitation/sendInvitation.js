import React from "react";
import { Container, Row, Col, Card, Form } from "react-bootstrap";
import { Input, Checkbox, Button } from "../../components";
import { showToast, useStateCallback } from "../../utility/common";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "../../schema/editUser";
import { constants } from "../../constants";
import "../../styles/editUser.scss";

const SendInvitation = ({ history }) => {
  const { emailPlaceHolder } = constants.sendInvitationPlaceHolder;

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
    <Container>
      <Row className="edit-user-form">
        <Col lg={12} xl={10} className="offset-lg-0 offset-xl-1">
          <Card>
            <Card.Body className="pad-1">
              {/* <Card.Title>{title}</Card.Title> */}
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Row>
                  <Col md={6}>
                    <Input
                      controlId="email"
                      error={errors.email?.message}
                      showError={touchedFields?.name}
                      registeredEvents={register("email")}
                      name="email"
                      isRequired={true}
                      inputRef={register}
                      placeholder={emailPlaceHolder}
                      label={"Email"}
                    />
                  </Col>
                </Row>
                <Card.Footer>
                  <Button
                    variant="success"
                    // disabled={isLoading}
                    // isLoading={isLoading}
                    label={"Submit"}
                    onClick={handleSubmit(onSubmit)}
                  />
                </Card.Footer>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SendInvitation;
