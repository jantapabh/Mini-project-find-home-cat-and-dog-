import Reatc from 'react'



const Pagnation = ({ animalPrePages, totalPage }) => {


    const pageNumber = [];

    for (let i = 1; i <= Math.ceil(totalPage / animalPrePages); i++) {

        pageNumber.push(i);
    }


    return (

        <nav>
            <ul className="pagination">
                {pageNumber.map(number => {
                    <li key={number} className="page=item">
                        <a href="!#" className="page-link">
                            {number}
                        </a>
                    </li>
                })}
            </ul>

        </nav>
    )
}

export default Pagnation