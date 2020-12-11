import React, { useEffect, useReducer, useState } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import { postContact, editContact } from "../JS/actions/contacts";
import { Link } from "react-router-dom";

const Add = () => {
  const [user, setUser] = useState({ name: "", email: "", phone: "" });
  const userReducer = useSelector((state) => state.contactReducer.user);
  const edit = useSelector((state) => state.editReducer.edit);
  const dispatch = useDispatch();
  useEffect(() => {
    edit ? setUser(userReducer) : setUser({ name: "", email: "", phone: "" });
  }, [edit, useReducer]);
  const handleContact = () => {
    if (!edit) {
      dispatch(postContact(user));
    } else {
      dispatch(editContact(userReducer._id, user));
    }
  };
  const handleChange = (e) => {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
      }}
    >
      <Form>
        <Form.Field>
          <label>name</label>
          <input
            value={user.name}
            placeholder="add name"
            name="name"
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>email</label>
          <input
            value={user.email}
            placeholder="add email"
            name="email"
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>phone</label>
          <input
            value={user.phone}
            placeholder="add phone"
            name="phone"
            onChange={handleChange}
          />
        </Form.Field>
        <Link to="/">
          <Button type="submit" onClick={handleContact}>
            {" "}
            {edit ? "edit" : "save"}{" "}
          </Button>
        </Link>
      </Form>
    </div>
  );
};

export default Add;
