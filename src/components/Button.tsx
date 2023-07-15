import clsx from 'clsx';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  active?: boolean;
}
export const Button = ({
  children,
  onClick,
  active,
  ...props
}: ButtonProps) => (
  <button
    type="button"
    onClick={onClick}
    className={clsx(
      'flex items-center border border-blue-500 px-2 py-1 transition-colors duration-300 ease-in-out',
      active && 'bg-blue-500'
    )}
    {...props}
  >
    {children}
  </button>
);
