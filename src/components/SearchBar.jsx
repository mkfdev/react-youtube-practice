import React, { useRef } from 'react'

const SearchBar = ({ getQuery }) => {
  const inputRef = useRef(null);
  const formRef = useRef(null);
  const onSubmit = (e) => {
    e.preventDefault();
    getQuery(inputRef.current.value);
    formRef.current.reset();
  }
  return (
    <header>
        <span className="logo"><img src="logo_youtube.jpg" alt=""/></span>
        <form ref={formRef} className="search-form" onSubmit={onSubmit}>
          <input ref={inputRef} type="text" placeholder="Search" className="search-input"/>
          <button className="search-button">검색</button>
        </form>
      </header>
  )
}

export default SearchBar