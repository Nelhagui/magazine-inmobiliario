import React from 'react'
import "./pagination.css"

function Pagination() {
  return (
    <div>
        <nav className="pagination" aria-label="Page navigation example">
            <ul className="pagination d-flex justify-content-center mx-auto py-2 gap-2">
                <li className="page-item">
                  <span aria-current="page" className="page-numbers current bg-white">1</span>
                </li>
                <li className="page-item">
                  <a className="page-numbers bg-white" href="/">2</a>
                </li>
                <li className="page-item">
                  <a className="next page-numbers bg-white" href="https://themeger.shop/wordpress/katen/personal/page/2/">»</a>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Pagination