import React from 'react';

type FilterTarget = 1 | 2 | 3 | 4 | 'ALL';

const LABELS: { id: FilterTarget; label: string }[] = [
  { id: 'ALL', label: 'ALL' },
  { id: 1, label: '1 年生' },
  { id: 2, label: '2 年生' },
  { id: 3, label: '3 年生' },
  { id: 4, label: '4 年生' },
];

export const MemberFilterButtonGroup: React.FC<{
  target: FilterTarget;
}> = ({ target }) => {
  return (
    <div>
      {LABELS.map((v, i) => (
        <span className="mr-4 inline-block" key={i}>
          <input
            type="radio"
            name="memberFilter"
            value={v.id}
            checked={v.id === target}
          />
          <span className="ml-1">{v.label}</span>
        </span>
      ))}
    </div>
  );
};
