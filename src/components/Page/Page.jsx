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
        total={total_results}
        onChange={handlePaginate}
        showSizeChanger={false}
        defaultCurrent={1}
        defaultPageSize={20}
        // current={current}
      />
    </div>
  )
}

export default ListPagination
