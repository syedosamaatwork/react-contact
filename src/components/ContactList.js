import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
    // console.log(props);
    const deleteContactHandler = (id) => {
        props.getContactId(id);
    }
    const contacts = [
        {
            "id": 1,
            "name": "mahal",
            "email": "mahal@mail.com"
        }
    ]
    const renderContactList = contacts.map((contact) => {
        return (
            <ContactCard key={contact.id} contact={contact} clickHandler={deleteContactHandler} />
        )
    })
    return (
        <div className="ui celled list">
            {renderContactList}
        </div>
    )
}

export default ContactList;