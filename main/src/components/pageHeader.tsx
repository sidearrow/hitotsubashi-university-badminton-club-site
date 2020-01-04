import React from 'react';
import { Link } from 'gatsby';
import config from '../config/configIndex';
import { PageMetadata } from '../config/configPageMetadata';

type Props = {
  pageMetadata: PageMetadata;
}

const PageHeader: React.FC<Props> = props => (
  <div className="jumbotron mb-0 border-bottom border-dark">
    <div className="container">
      <div>
        <ol className="breadcrumb bg-transparent">
          {props.pageMetadata.breadcrumb.map((v, i) => (
            <li className="breadcrumb-item">
              {props.pageMetadata.breadcrumb.length - 1 === i
                ? <span>{config.pageMetadata[v].title}</span>
                : <Link to={config.pageMetadata[v].path}>{config.pageMetadata[v].title}</Link>}
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
