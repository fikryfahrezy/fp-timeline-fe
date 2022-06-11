function Label({ className, children, ...props }: JSX.IntrinsicElements['label']) {
  return (
    <label
      {...props}
      className={`mb-1 color-white text-5 ${typeof className === 'string' ? className : ''}`}
    >
      {children}
    </label>
  );
}

export default Label;
