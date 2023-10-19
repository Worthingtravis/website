import clsx from 'clsx';
import _ from 'lodash';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  active?: boolean;
}
export const Button = ({
  children,
  onClick,
  active,
  ...props
}: ButtonProps) => {
  if (typeof children === 'string') {
    // eslint-disable-next-line no-param-reassign
    children = _.startCase(children);
  }
  return (
    <button
      type="button"
      onClick={onClick}
      {...props}
      className={clsx(
        'flex items-center rounded  border border-white px-2 py-1 transition-colors duration-300 ease-in-out',
        active && ' bg-inherit text-white',
        'hover:bg-opacity-50 hover:text-white',
        props.className
      )}
    >
      {children}
    </button>
  );
};
