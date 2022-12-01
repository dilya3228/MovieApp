import { Input } from "antd";
import { useState } from "react";
// import { debounce } from "lodash";

const SearchInput = ({allFetchMovies, fetchMovies}) => {
    const [value, setValue] = useState('')

    const handleInput = (text) => {
        if(text.length === 0){
           fetchMovies(); 
        }
        setValue(text)
        allFetchMovies(text)
    };

    // const handleInputDebounce = debounce(handleInput, 500)

  return (
    <>
      <Input maxLength={50} onChange={(e) => handleInput(e.target.value)} value={value} className="search-input"/>
    </>
  );
};

export default SearchInput;