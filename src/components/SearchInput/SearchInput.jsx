import { Input } from 'antd'

const SearchInput = (props) => {
  return <Input placeholder="Type to search..." {...props} className="search-input" maxLength={50} />
}

export default SearchInput
