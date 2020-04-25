import React from 'react';
import { MemberPageTemplate } from '../../templates/MemberPageTemplate';

const MemberPagePreview: React.FC<{
  entry: any
}> = ({ entry }) => (
  <MemberPageTemplate
    title={entry.getIn(['data', 'title'])}
    description={entry.getIn(['data', 'description'])}
    members={entry.getIn(['data', 'members'])}
  />
);

export default MemberPagePreview;
