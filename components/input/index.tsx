function Input({ className, ...props }: JSX.IntrinsicElements['input']) {
  return (
    <input
      {...props}
      className={`w-100% h-14 mb-4 px-2 py-2 border-solid border-size-3 border-rd-1 border-accent text-5 box-border ${
        typeof className === 'string' ? className : ''
      }`}
    />
  );
}

export default Input;
