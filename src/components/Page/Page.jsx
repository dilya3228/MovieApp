import { Pagination } from 'antd';
import { useState } from 'react';

const ListPagination = ({ datas, allFetchMovies }) => {
    const {total_results} = datas;
    const [current, setCurrent] = useState(1);
    const handleonChangePaginate = (number) => {
        setCurrent(number)
        allFetchMovies(number)
    }
  return (
    <>
        <Pagination defaultCurrent={1} total={total_results} onChange={handleonChangePaginate} current={current} className="paginate"/>
    </>
    
  );
};

export default ListPagination;