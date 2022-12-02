import { Input } from "antd";
import { useState } from "react";
import { debounce } from "lodash";

const SearchInput = ({allFetchMovies}) => {
    const [value, setValue] = useState('')

    const handleInput = (text) => {
        setValue(text)
        allFetchMovies(text)
    };
    
    const handleInputDebounce = debounce(handleInput, 50)

  return (
    <>
      <Input maxLength={50} onChange={(e) => handleInputDebounce(e.target.value)} value={value} className="search-input"/>
    </>
  );
};

export default SearchInput;