import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
export default function SearchBar({ handleSearchBar }) {
  return (
    <>
      <InputGroup className="mb-3">
        <Form.Control placeholder="Search Here" onChange={handleSearchBar} />
      </InputGroup>
    </>
  );
}
