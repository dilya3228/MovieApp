import { Input } from 'antd'
import { useState, useCallback } from 'react'
import { debounce } from 'lodash'

const SearchInput = ({ getAllMovies }) => {
  const [value, setValue] = useState('')
  const allFetchMoviesDebounce = useCallback(debounce(getAllMovies, 1000), [])

  const handleInput = (e) => {
    const text = e.target.value
    setValue(text)
    if (!text) return
    allFetchMoviesDebounce(text)
  }

  return (
    <>
      <Input
        className="search-input"
        maxLength={50}
        onChange={handleInput}
        value={value}
        placeholder="Type to search..."
      />
    </>
  )
}

export default SearchInput
