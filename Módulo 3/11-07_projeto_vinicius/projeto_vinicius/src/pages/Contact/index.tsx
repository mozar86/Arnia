import React from 'react'
import { Link } from 'react-router-dom';

interface ContactProps {
  toPerson?: string;
}

export const Contact: React.FC<ContactProps> = ({ toPerson }, ) => {
  return (
    <div>
        <h1>Contacts to {toPerson && `to ${toPerson}`}</h1>
        <Link to="/contact/director">Contact Director</Link><br />
        <Link to="/contact/rh">Contact RH</Link>
        <hr />
        <Link to="/">Home</Link>
  </div>
  )
};
