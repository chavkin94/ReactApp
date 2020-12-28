import React from 'react';
import s from './pagination.module.css';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (
    let index = 1;
    index <= Math.ceil(totalPosts / postsPerPage);
    index += 1
  ) {
    pageNumbers.push(index);
  }

  return (
    <nav>
      <ul className={s.pagination}>
        {pageNumbers.map(index => (
          <li key={index} className={s.page_item}>
            <a
              href="!#"
              className={s.page_link}
              onClick={event => {
                event.preventDefault();
                return paginate(index);
              }}
            >
              {index}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
