import React from 'react';

type Props = {
  title: string;
  subtitle: string | null;
}

const PageTitle: React.FC<Props> = props => (
  <div className="jumbotron alert-main mb-0">
    <div className="container">
      <h1 className="title">{props.title}</h1>
      {props.subtitle && (<p className="subtitle">{props.subtitle}</p>)}
    </div>
  </div>
);

export default PageTitle;
