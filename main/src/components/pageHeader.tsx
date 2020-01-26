import React from 'react';
import { Link } from 'gatsby';
import { PageMetadata } from '../pageMetaData';

type Props = {
  pageMetadata: PageMetadata;
}

const PageHeader: React.FC<Props> = props => (
  <div className="jumbotron mb-0 border-bottom border-dark">
    <div className="container">
      <div>
        <ol className="breadcrumb bg-transparent">
          {props.pageMetadata.breadcrumb.map((v, i) => (
            <li className="breadcrumb-item" key={i}>
              {props.pageMetadata.breadcrumb.length - 1 === i
                ? <span>{v.text}</span>
                : <Link to={v.path}>{v.text}</Link>}
            </li>
          ))}
        </ol>
      </div>
      <h1 className="title">{props.pageMetadata.title}</h1>
      <p className="subtitle" style={{ whiteSpace: 'pre-wrap' }}>{props.pageMetadata.description}</p>
    </div>
  </div>
);

export default PageHeader;
