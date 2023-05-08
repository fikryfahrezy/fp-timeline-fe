import { type FieldProps } from './types';

function Date({ content, onChange }: FieldProps) {
  return (
    <input
      className="w-full bg-transparent border-0 text-4"
      value={content}
      onChange={(event) => {
        onChange(event.target.value);
      }}
    />
  );
}

export default Date;
