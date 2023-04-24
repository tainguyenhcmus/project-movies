import React, { useState } from 'react'
import { useApp } from '../../contexts/app';
import { useNavigate } from 'react-router-dom';
import { CONSTANT_LINKS, getConstantLinkDetail } from "../../models/links";

type Props = object

const SearchWrapper = (props: Props) => {
  const history = useNavigate();

  const [inputText, setInputText] = useState("");
  const { handleInputSearchGlobal, triggerSearch } = useApp()

  const inputHandler = (e: any) => {
    //convert input text to lower case
    const lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  const handleSearch = () => {
    triggerSearch(true);
    handleInputSearchGlobal(inputText);
    history(CONSTANT_LINKS.route_search_result);
  }

  return (
    <>
      <input onChange={inputHandler} className="form-control me-2 w-50" type="search" placeholder="Search" aria-label="Search" />
      <button onClick={() => handleSearch()} className="btn btn-outline-success" >Search</button>
    </>
  )
}

export { SearchWrapper }