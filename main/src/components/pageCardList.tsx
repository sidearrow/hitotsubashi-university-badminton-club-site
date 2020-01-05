import React from 'react';
import { PageMetadata } from '../config/configPageMetadata';
import { Link } from 'gatsby';

type Props = { pageList: PageMetadata[]; }

const PageCardList: React.FC<Props> = (props) => (
  <div className="form-row justify-content-center">
    {props.pageList.map((page, i) => (
      <div className="col-md-4 pb-2" key={i}>
        <div className="card h-100 border-dark">
          <div className="card-body">
            <Link to={page.path} className="stretched-link">{page.title}</Link>
            <div>{page.description}</div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default PageCardList;
