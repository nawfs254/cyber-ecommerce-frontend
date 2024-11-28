const Pagination = ({ totalProducts, productPerPage, setCurrentPage }) => {
    let pageNumbers = []
    console.log(Math.ceil(totalProducts / productPerPage))
    for (let i = 1; i <= Math.ceil(totalProducts / productPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <div className="flex gap-3 items-center justify-center my-3">{
            pageNumbers.map((pageNumber, index) => {
                return <button key={index} className="bg-gray-200 px-3 py-2 font-bold hover:bg-gray-300 transition rounded-sm" onClick={() => setCurrentPage(pageNumber)}>{pageNumber}</button>
            })
        }</div>
    )
}

export default Pagination