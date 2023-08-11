import React from 'react'
import ReactPaginate from 'react-paginate'

function Pagination() {
    const handlePageClick = () => { 
        
    }
    return (
        <ReactPaginate 
        breakLabel="..."
        breakAriaLabels={''}
        nextLabel="next >"
        onPageChange={handlePageClick}
        marginPagesDisplayed={1}
        pageRangeDisplayed={2}
        pageCount= {100}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName={'pagination justify-content-center p-3'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item mx-2'}
        nextLinkClassName={'page-link'}
        previousLinkClassName={'page-link'}
        nextClassName={'page-item mx-2'}
        breakClassName={'page-item'}
        breakLinkClassName={'page-link'}
        activeClassName={'active'}
        />
    )
}

export default Pagination