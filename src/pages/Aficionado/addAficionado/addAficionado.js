import React from "react";
import { Container, Row, Col, Card, Form } from "react-bootstrap";
import { Input, Checkbox, Button } from "../../../components";
import { showToast, useStateCallback } from "../../../utility/common";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "../../../schema/editUser";
import { constants } from "../../../constants";
import { editUser } from "../../../apis/manageUsers";
import "../../../styles/editUser.scss";

const AddAficionado = ({ history }) => {
  const {
    bioPlaceholder,
    contactNoPlaceholder,
    experiencePlaceholder,
    locationPlaceholder,
    namePlaceholder,
    occuptionPlaceholder,
    passionPlaceholder,
    websitePlaceholder,
  } = constants.addCreatorPlaceholder;

  const [isLoading, setLoading] = useStateCallback(false);

  const { first_name, last_name, email, id, is_admin } =
    history?.location?.state || {};

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      name: "",
      bio: "",
      contactNo: "",
      location: "",
      occuption: "",
      experience: "",
      passion: "",
      website: "",
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
                      controlId="name"
                      error={errors?.name?.message}
                      showError={touchedFields?.name}
                      registeredEvents={register("name")}
                      name="name"
                      isRequired={true}
                      inputRef={register}
                      placeholder={namePlaceholder}
                      label={"Name"}
                    />
                    {/* <Input
                      controlId="formFirstName"
                      error={errors.firstName && errors.firstName.message}
                      showError={touchedFields && touchedFields.firstName}
                      inputRef={register}
                      name="firstName"
                      isRequired={true}
                      label={"Enter name"}
                    /> */}
                  </Col>
                  <Col md={6}>
                    <Input
                      controlId="bio"
                      error={errors?.bio?.message}
                      showError={touchedFields?.bio}
                      registeredEvents={register("bio")}
                      isRequired={true}
                      placeholder={bioPlaceholder}
                      label={"Bio"}
                    />
                  </Col>
                  <Col md={6}>
                    <Input
                      controlId="contactNo"
                      error={errors?.contactNo?.message}
                      showError={touchedFields?.contactNo}
                      registeredEvents={register("contactNo")}
                      isRequired={true}
                      placeholder={contactNoPlaceholder}
                      label={"Contact"}
                    />
                  </Col>
                  <Col md={6}>
                    <Input
                      controlId="experience"
                      error={errors?.experience?.message}
                      showError={touchedFields?.experience}
                      registeredEvents={register("experience")}
                      isRequired={true}
                      placeholder={experiencePlaceholder}
                      label={"Experience"}
                      type={"Number"}
                    />
                  </Col>
                  <Col md={6}>
                    <Input
                      controlId="location"
                      error={errors?.location?.message}
                      showError={touchedFields?.location}
                      registeredEvents={register("location")}
                      isRequired={true}
                      placeholder={locationPlaceholder}
                      label={"Location"}
                    />
                  </Col>
                  <Col md={6}>
                    <Input
                      controlId="occuption"
                      error={errors?.occuption?.message}
                      showError={touchedFields?.occuption}
                      registeredEvents={register("occuption")}
                      isRequired={true}
                      placeholder={occuptionPlaceholder}
                      label={"Occuption"}
                    />
                  </Col>
                  <Col md={6}>
                    <Input
                      controlId="passion"
                      error={errors?.passion?.message}
                      showError={touchedFields?.passion}
                      registeredEvents={register("passion")}
                      isRequired={true}
                      placeholder={passionPlaceholder}
                      label={"Passion"}
                    />
                  </Col>
                  <Col md={6}>
                    <Input
                      controlId="website"
                      error={errors?.website?.message}
                      showError={touchedFields?.website}
                      registeredEvents={register("website")}
                      isRequired={true}
                      placeholder={websitePlaceholder}
                      label={"Website"}
                    />
                  </Col>

                  {/* <Col md={6}>
                    <Input
                      controlId="formEmail"
                      name="email"
                      // label={emailPlaceholder}
                      isControlled={true}
                      value={email}
                      disabled={true}
                    />
                  </Col> */}
                  {/* <Col md={6} className="inline-checkbox">
                    <Checkbox
                      controlId="isAdminCheckbox"
                      // label={adminPlaceholder}
                      registeredEvents={register("isAdmin")}
                    />
                  </Col> */}
                </Row>
                <Card.Footer>
                  <Button
                    variant="success"
                    // disabled={isLoading}
                    // isLoading={isLoading}
                    label={"Save Details"}
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

export default AddAficionado;
