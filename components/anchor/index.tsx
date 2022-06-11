import type { ComponentProps } from 'react';
import { chakra } from '@chakra-ui/system';

/**
 * Ref: React.ComponentProps
 * https://stackoverflow.com/a/55005902/12976234
 */
function Anchor({ className, children, ...props }: ComponentProps<typeof chakra.a>) {
  return (
    <chakra.a
      {...props}
      className={`color-accent text-5 ${typeof className === 'string' ? className : ''}`}
    >
      {children}
    </chakra.a>
  );
}

export default Anchor;
