import type { FieldProps } from './types';

function Title({ content, onChange }: FieldProps) {
  return (
    <input
      className="w-full bg-transparent border-0 text-2xl font-bold"
      value={content}
      onChange={(event) => {
        onChange(event.target.value);
      }}
    />
  );
}

export default Title;
