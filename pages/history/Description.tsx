import { type FieldProps } from './types';

function Description({ content, onChange }: FieldProps) {
  return (
    <textarea
      className="w-full bg-transparent border-0 text-4 break-word whitespace-break-spaces resize-none"
      value={content}
      onChange={(event) => {
        onChange(event.target.value);
      }}
    />
  );
}

export default Description;
