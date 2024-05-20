import React from "react";
import { useGlobalContext } from "./Context";

const SearchForm = () => {
  const { setSearch } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    if (!searchValue) return;
    setSearch(searchValue);
  };

  return (
    <section>
      <h1 className='title'>Unsplash Images</h1>
      <form className='search-form' onSubmit={handleSubmit}>
        <input
          type='text'
          name='search'
          placeholder='Car'
          className='form-input search-input'
        />
        <button className='btn' type='submit'>
          Search
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
