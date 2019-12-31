import React from 'react';

type Props = {
  title?: string
  description?: string | null
  breadcrumb?: []
}

const PageHeader: React.FC<Props> = props => (
  <div className="jumbotron alert-main mb-0">
    <div className="container">
      <h1 className="title">{props.title}</h1>
      {props.description && (<p className="subtitle" style={{ whiteSpace: 'pre-wrap' }}>{props.description}</p>)}
    </div>
  </div>
);

export default PageHeader;
