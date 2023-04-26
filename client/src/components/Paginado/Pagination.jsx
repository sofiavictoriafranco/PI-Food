import style from './Pagination.module.css'


function Pagination({ pageNumbers, currentPage, paginate }) {
  const nextPage = () => {
    if (currentPage < pageNumbers.length) {
      paginate(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      paginate(currentPage - 1);
    }
  };

  return (
    <nav>
      <ul className={style.pagination}>
        <li>
          <button onClick={prevPage} className={style.myButton}>
            {"<"}
          </button>
        </li>
        {pageNumbers.map((number) => (
          <li key={number} className={style.li}>
            <button
              onClick={() => paginate(number)}
              className={style.myButton}
            >
              {number}
            </button>
          </li>
        ))}
        <li>
          <button onClick={nextPage} className={style.myButton}>
            {">"}
          </button>
        </li>
      </ul>
    </nav>
  );
}


  export default Pagination