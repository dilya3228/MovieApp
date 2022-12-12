import { Pagination } from 'antd'
import { useState } from 'react'

const ListPagination = ({ datas, getAllMovies }) => {
  const { total_results, page } = datas
  const [current, setCurrent] = useState(1)
  const handlePaginate = (numbers) => {
    setCurrent(numbers)
    getAllMovies(numbers)
  }

  return (
    <div className="footer paginate">
      <Pagination
        showSizeChanger={false}
        defaultPageSize={1}
        defaultCurrent={page}
        total={total_results}
        onChange={handlePaginate}
        current={current}
      />
    </div>
  )
}

export default ListPagination
