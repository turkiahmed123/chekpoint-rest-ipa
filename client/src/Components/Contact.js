import React from "react";
import { Button, Card, Image } from "semantic-ui-react";
import { deleteContact, getContact } from "../JS/actions/contacts";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toggleTrue } from "../JS/actions/edit";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  return (
    <Card.Group>
      <Card>
        <Card.Content>
          <Image
            floated="right"
            size="mini"
            src="https://d29fhpw069ctt2.cloudfront.net/icon/image/49067/preview.svg"
          />
          <Card.Header>{contact.name}</Card.Header>
          <Card.Meta>{contact.phone}</Card.Meta>
          <Card.Description>{contact.email}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className="ui two buttons">
            <Button
              basic
              color="green"
              onClick={() => {
                dispatch(getContact(contact._id));
                dispatch(toggleTrue());
              }}
            >
              <Link to={"/edit/${contact._id}"}> Edit </Link>
            </Button>

            <Button
              basic
              color="red"
              onClick={() => dispatch(deleteContact(contact._id))}
            >
              Delete
            </Button>
          </div>
        </Card.Content>
      </Card>
    </Card.Group>
  );
};

export default Contact;
