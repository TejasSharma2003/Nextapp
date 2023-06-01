import React from "react";

const Search = props => {
  return (
    <input
      className="ml-2 inline-block h-full w-full  bg-transparent py-5 pl-2 pr-5 text-2xl placeholder:text-white-100 focus:outline-none "
      placeholder="Search for a specific blog"
      onChange={props.onChange}
    />
  );
};

export default Search;
