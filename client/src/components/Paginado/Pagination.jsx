import style from './Pagination.module.css'


function Pagination({ pageNumbers, paginate }) {
    return (
      <nav>
        <ul className={style.pagination}>
          {pageNumbers.map((number) => (
            <li key={number} className={style.li}>
              <button onClick={() => paginate(number)} className={style.myButton}>
                {number}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    );
  }

  export default Pagination