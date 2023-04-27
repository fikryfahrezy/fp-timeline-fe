import type { DateProps } from './types';

function Date({ content, isEditable, onChange }: DateProps) {
  return (
    <span
      className="bg-transparent border-0 text-4"
      contentEditable={isEditable}
      suppressContentEditableWarning={isEditable}
      onKeyDown={(event) => {
        onChange((event.target as HTMLElement).innerText);
      }}
    >
      {content}
    </span>
  );
}

export default Date;
