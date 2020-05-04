import React, { useState } from 'react';
import styled from 'styled-components';

const FormBox = styled.form`
  max-width: 460px;
  display: flex;
  margin: 0 auto 32px;
`;

const Input = styled.input`
  font-size: 1em;
  width: 100%;
  background-color: #edeff0;
  padding: 10px 15px;
  border: 3px solid #d7dbdf;
  outline: none;
  border-radius: 0.35em 0 0 0.35em;
`;

const Button = styled.button`
  outline: none;
  border: none;
  padding: 0 15px;
  border-radius: 0 0.35em 0.35em 0;
  cursor: pointer;
`;

const Form = ({ handleSubmit, history }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const updateSearchInput = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <FormBox
      className="search-form"
      onSubmit={(e) => handleSubmit(e, history, searchTerm)}
    >
      <Input
        type="text"
        name="search"
        placeholder="Search..."
        onChange={updateSearchInput}
        value={searchTerm}
      />
      <Button
        type="submit"
        className={`search-button ${searchTerm.trim() ? 'active' : null}`}
        disabled={!searchTerm.trim()}
      >
        <svg height="32" width="32">
          <path
            d="M19.427 21.427a8.5 8.5 0 1 1 2-2l5.585 5.585c.55.55.546 1.43 0 1.976l-.024.024a1.399 1.399 0 0 1-1.976 0l-5.585-5.585zM14.5 21a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13z"
            fill="#ffffff"
            fillRule="evenodd"
          />
        </svg>
      </Button>
    </FormBox>
  );
};

export default Form;
