import React from "react";

const ContactCard = (props) => {
    const {id, name, email} = props.contact;
    return (
        <div key={props.key} className="item">
            <div className="content">
                <div className="header">{name}</div>
                <div>{email}</div>
                <i className="trash alternate outline icon" style={{color: "red", marginTop: "5px"}}></i>
            </div>
        </div>
    );
}

export default ContactCard;