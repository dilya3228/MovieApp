import { Pagination } from 'antd'

const ListPagination = (props) => {
  const { total_pages, current, onChange } = props
  const handlePaginate = (numbers) => {
    onChange(numbers)
  }

  return (
    <div className="footer paginate">
      <Pagination
        showSizeChanger={false}
        PageSize={20}
        defaultCurrent={current}
        total={total_pages}
        onChange={handlePaginate}
      />
    </div>
  )
}

export default ListPagination
