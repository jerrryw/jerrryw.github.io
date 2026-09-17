import type { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  /** Rendered element. Defaults to a plain div. */
  as?: 'div' | 'header' | 'footer' | 'nav' | 'main';
  className?: string;
}

/**
 * The single source of truth for page width and horizontal padding.
 * Never set max-width on a section directly — wrap it in this instead.
 */
export function Container({ children, as: Tag = 'div', className }: ContainerProps) {
  return <Tag className={['container', className].filter(Boolean).join(' ')}>{children}</Tag>;
}
