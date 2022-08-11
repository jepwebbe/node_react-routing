import React from "react";
import ContactForm from "../components/ContactForm"
import "./Kontakt.scss"

function Kontakt() {
  return (
    <>
    <h1>Kontakt os hvis du vil vide noget om de bedste ting</h1>
    <div className="ContactForm">
      <ContactForm />
    </div>
    </>
  );
}

export default Kontakt;