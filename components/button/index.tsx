function Button({ className, children, ...props }: JSX.IntrinsicElements['button']) {
  return (
    <button
      {...props}
      className={`'min-h-12 px-3 py-3 color-white bg-tertiary border-rd-1 border-transparent text-5 cursor-pointer transition-property-all transition-timing-linear transition-duration-100 hover-brightness-70' ${
        typeof className === 'string' ? className : ''
      }`}
    >
      {children}
    </button>
  );
}

export default Button;
