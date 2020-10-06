import React, { InputHTMLAttributes } from 'react';

export const MemberFilterRadios: React.FC<{
  target: string;
  labels: { id: string; label: string }[];
  onChange: (val: string) => void;
}> = ({ target, labels, onChange }) => {
  const changeHandler: InputHTMLAttributes<HTMLInputElement>['onChange'] = (
    e
  ) => {
    onChange(e.target.value);
  };

  return (
    <div>
      {labels.map((v, i) => (
        <div className="mr-4" key={i}>
          <input
            type="radio"
            name="memberFilter"
            value={v.id}
            checked={v.id === target}
            onChange={changeHandler}
          />
          <span className="ml-1">{v.label}</span>
        </div>
      ))}
    </div>
  );
};
