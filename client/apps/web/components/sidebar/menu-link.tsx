import { forwardRef } from 'react';
import Link from 'next/link';
import type { ComponentPropsWithRef } from 'react';

type MenuLinkProps = ComponentPropsWithRef<'a'> & {
  href: string;
};

export const MenuLink = forwardRef<HTMLAnchorElement, MenuLinkProps>(
  ({ href, children, ...rest }, ref) => (
    <Link href={href}>
      <div ref={ref} {...rest}>
        {children}
      </div>
    </Link>
  )
);
