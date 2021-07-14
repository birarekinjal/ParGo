import React, { useState, useEffect } from "react";
import { Container, Card, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Table, Input, Button } from "../../../components";
import { getUsers } from "../../../actions/manageUsers";
import { showToast, useStateCallback } from "../../../utility/common";
import { constants } from "../../../constants";
import "../../../styles/manageUsers.scss";
import fakeData from "../../creater/listManagement/fakeData";
import _ from "lodash";

const ListManagement = ({ history }) => {
  const [data, setData] = useState("");
  const [find, setFind] = useState("");
  const [offset, setOffset] = useState(0);
  const [perPage] = useState(10);
  const [pageCount, setpageCount] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const [page, setPage] = useStateCallback(1);
  const [isButtonLoading, setButtonLoading] = useStateCallback(false);
  const [sort, setSort] = useState(false);

  const dispatch = useDispatch();
  const { users, profile } = useSelector((state) => ({
    users: state.users,
    profile: state.profile,
  }));

  useEffect(() => {
    // dispatch(getUsers({ search: "", page: 1, is_active: true })).then((res) => {
    //   if (!res.status) {
    //     showToast(res.error_message);
    //   }
    // });
    getData();
  }, [offset]);

  const onPageChange = (page) => {
    setPage(page, () =>
      dispatch(
        getUsers({ search: searchValue, page: page, is_active: true })
      ).then((res) => {
        if (res.status) {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }
      })
    );
  };
  const onSearchValueChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage * perPage);
  };

  // const Ascending = () => {
  //   setData(_.orderBy(data, ["name"], ["asc"]));
  // };

  // const Desending = () => {
  //   setData(_.orderBy(data, ["name"], ["desc"]));
  // };

  const Sort = () => {
    if (sort) {
      setData(_.orderBy(data, ["name"], ["asc"]));
    } else {
      setData(_.orderBy(data, ["name"], ["desc"]));
    }
    setSort(!sort);
  };

  const onSearchUser = () => {
    setButtonLoading(true, () => {
      setPage(1);
      dispatch(getUsers({ search: searchValue, page: 1, is_active: true }))
        .then((res) => {
          if (!res.status) {
            showToast(res.error_message);
          }
          setButtonLoading(false);
        })
        .catch(() => setButtonLoading(false));
    });
  };
  const onEditUser = (user) => {
    history.push(`/edit-user/${user.id}`, user);
  };
  const onAddUser = () => {
    history.push("/add-creater");
  };

  const getData = () => {
    const data = fakeData;
    const slice = data.slice(offset, offset + perPage);
    setData(slice);
    setpageCount(Math.ceil(data.length / perPage));
  };

  const FilteredData =
    data &&
    data &&
    data.filter((s) => {
      return s.name.toLowerCase().includes(searchValue.toLocaleLowerCase());
    });

  const { items, totalItemCount, totalPages } = users;
  const {
    adminPlaceholder,
    buttons,
    headers,
    pageText,
    searchText,
    title,
    userPlaceholder,
  } = constants.manageUsers;
  return (
    <Container className="manage-users">
      <Card>
        <Card.Body className="pad-2">
          <Card.Title>
            <span>{title}</span>
            <div className="inline-heading-form">
              <Button
                label={buttons.add}
                onClick={onAddUser}
                className="add-btn left"
                prependIcon={true}
                iconClass="fas fa-plus"
              />
              {/* <Button type={"button"} label={"Asc"} onClick={Ascending} /> */}
              {/* <Button type={"button"} label={"Desc"} onClick={Desending} /> */}
              <Form>
                <Input
                  controlId="findUsers"
                  placeholder={searchText}
                  name="dataPoint"
                  isControlled={true}
                  value={searchValue}
                  onChange={onSearchValueChange}
                  iconClass="fas fa-search"
                  isButtonDisabled={isButtonLoading}
                  onButtonClick={onSearchUser}
                  isLoading={isButtonLoading}
                  buttonVariant="success"
                  hasButton={true}
                  buttonType="submit"
                />
              </Form>
            </div>
          </Card.Title>
          {/* <Table
            activePage={page}
            countText={pageText}
            pageCount={totalPages}
            totalItemsCount={totalItemCount}
            headers={headers}
            onPageChange={onPageChange}
          >
            {items &&
              items.length > 0 &&
              items.map((item, index) => {
                return (
                  <tr>
                    <td>{(page - 1) * 10 + index + 1}</td>
                    <td>{item.first_name}</td>
                    <td>{item.last_name}</td>
                    <td>
                      <i className="fas fa-envelope" />
                     
                    {item.email}
                    </td>
                    <td>
                      <i className="fas fa-user" />
                      {item.is_admin ? adminPlaceholder : userPlaceholder}
                    </td>
                    <td>
                      {profile && profile.id !== item.id && (
                        <a href="javascript:;" className="action edit">
                          <i
                            className="fas fa-pencil-alt"
                            onClick={() => onEditUser(item)}
                          />
                        </a>
                      )}
                    </td>
                  </tr>
                );
              })}
          </Table> */}

          <Table
            headers={headers}
            onPageChange={handlePageClick}
            breakClassName={"break-me"}
            pageCount={pageCount}
            onHeaderClick={Sort}
          >
            {FilteredData &&
              FilteredData.length > 0 &&
              FilteredData.map((item, k) => (
                <tr key={k}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.bio}</td>
                  <td>{item.contactNo}</td>
                  <td>{item.location}</td>
                  <td>{item.occuption}</td>
                  <td>{item.passion}</td>
                </tr>
              ))}
          </Table>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ListManagement;
