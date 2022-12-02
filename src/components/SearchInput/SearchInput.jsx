import { Input } from "antd";
import { useState, useCallback } from "react";
import { debounce } from "lodash";

const SearchInput = ({ allFetchMovies }) => {
  const [value, setValue] = useState("");
  const allFetchMoviesDebounce = useCallback(debounce(allFetchMovies, 1000), []);

  const handleInput = (e) => {
    const text = e.target.value
    console.log(e);
      setValue(text);
    if(!text) return
    // debugger
    allFetchMoviesDebounce(text);
  };

    return (
      <>
        <Input
          maxLength={50}
          onChange={handleInput}
          value={value}
        />
      </>
    )
};

export default SearchInput;