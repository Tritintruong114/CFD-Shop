import React, { useMemo } from "react";
const PAGE_STEP = 2;
const Pagination = ({ page, limit = 0, total = 0, onPagichange }) => {
  //Function TotalPage
  const totalPage = useMemo(() => {
    if (!limit || !total) {
      return 1;
    }
    return Math.ceil(Number(total) / Number(limit)) || 1;
  }, [limit, total]);

  //Function PageList
  const pageList = useMemo(() => {
    let start = page - PAGE_STEP;
    let end = page - PAGE_STEP;

    if (start <= 0) {
      start = 1;
      end = start + PAGE_STEP * 2;
      if (end > totalPage) {
        end = totalPage;
      }
    }

    if (end >= totalPage) {
      end = totalPage;
      start = end - PAGE_STEP * 2;
      if (start < 1) {
        start = 1;
      }
    }

    const list = [];
    for (let index = start; index < end; index++) {
      list.push[index];
    }

    return list;
  }, [page, totalPage]);

  //Function onNext
  const onNext = () => {
    const nextPage = page + 1;
    if (nextPage <= totalPage) {
      onPagichange(nextPage);
    }
  };

  //Finction onPrev
  const onPrev = () => {
    const prevPage = page - 1;
    if (prevPage > 0) {
      onPagichange(prevPage);
    }
  };

  //Function onFirst
  const onFirst = () => {
    onPagichange(1);
  };

  //Function onLast
  const onLast = () => {
    onPagichange(totalPage);
  };

  return (
    <nav aria-label="Page navigation">
      <ul className="pagination justify-content-center">
        <li className="page-item disabled">
          <a
            className="page-link page-link-prev"
            href="#"
            aria-label="Previous"
            tabIndex={-1}
            aria-disabled="true"
          >
            <span aria-hidden="true">
              <i className="icon-long-arrow-left" />
            </span>
            Prev{" "}
          </a>
        </li>
        <li className="page-item active" aria-current="page">
          <a className="page-link" href="#">
            1
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            2
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            3
          </a>
        </li>
        <li className="page-item-total">of 6</li>
        <li className="page-item">
          <a className="page-link page-link-next" href="#" aria-label="Next">
            {" "}
            Next{" "}
            <span aria-hidden="true">
              <i className="icon-long-arrow-right" />
            </span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
