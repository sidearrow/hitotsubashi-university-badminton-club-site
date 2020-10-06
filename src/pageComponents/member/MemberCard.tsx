import React from 'react';
import { Member } from './member';

const MemberLable: React.FC<{ label: string; value: string }> = ({
  label,
  value,
}) => {
  return (
    <div className="grid grid-cols-3 mt-1">
      <div className="bg-gray-400 col-span-1 py-1 px-2">{label}</div>
      <div className="col-span-2 py-1 px-2">{value}</div>
    </div>
  );
};

export const MemberCard: React.FC<Member> = ({
  firstName,
  familyName,
  gender,
  grade,
  faculty,
  highschool,
  positions,
}) => {
  const nameColorClass = gender === 'm' ? 'text-blue-700' : 'text-red-700';

  return (
    <div className="p-2 rounded border border-gray-400">
      <div className="border-b border-gray-400 pb-1 mb-2">
        <span className={`text-lg ${nameColorClass}`}>
          {familyName} {firstName}
        </span>
      </div>
      <MemberLable label="学年" value={grade + ' 年生'} />
      <MemberLable label="学部" value={faculty} />
      <MemberLable label="出身高校" value={highschool} />
      <MemberLable label="役職" value={positions.join(', ')} />
    </div>
  );
};
