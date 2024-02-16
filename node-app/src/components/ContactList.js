import React, { useRef }from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) =>{
    console.log(props);
    const inputEl = useRef("");
    const deleteContactHandler = (id) =>{
        props.getContactId(id);
    };

    const renderContactList = props.contacts.map((contact) =>{
        return(
            <ContactCard contact={contact} clickHandler={deleteContactHandler} key={contact.id} />
        );
    });

    const getSearchTerm = () => {
      props.searchKeyword(inputEl.current.value);
    };
    return(
        <div className="main" style={{marginTop: "50px"}}>
            <h2>
                Contact List
                <Link to="/add">
                <button className="ui blue button right" style={{marginLeft: "50px"}}>Add Contact</button></Link>
            </h2>
            <div className="ui search large">
                <div className="ui icon input">
                    <input ref={inputEl} type="text" placeholder="Search Contacts" className="prompt" vlaue={ props.term} onChange={ getSearchTerm}></input>
                    <i className="search icon"></i>
                </div>
            </div>
            <div className="ui celled list">{renderContactList.length > 0 ? renderContactList : "No Contacts Available" }</div>
        </div>

    );
}

export default ContactList;