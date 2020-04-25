import React from 'react';
import { MemberPageTemplate } from '../../templates/MemberPageTemplate';

const MemberPagePreview: React.FC<{
  entry: any
}> = ({ entry }) => {
  const data = entry.toJS();
  console.log(data);

  return (
    <MemberPageTemplate
      title={data.data.title}
      description={data.data.description}
      members={data.data.members}
    />
  )
};

export default MemberPagePreview;
