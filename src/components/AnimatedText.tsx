import clsx from 'clsx';

const variants = {
  pulse:
    'bg-gradient-to-r from-[#b2a8fd] bg-[200%_auto] to-transparent   group-hover:to-white group-hover:from-[#b2a8fd] group-hover:via-white group-hover:!animate-text-gradient-slow',
  default:
    ' animate-text-gradient  bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto]  group-hover:via-white group-hover:to-white',
};
export function AnimatedText({
  children,
  variant = 'default',
  className,
}: {
  children: React.ReactNode;
  variant?: 'default' | 'pulse';
  className?: string;
}) {
  return (
    <span
      className={clsx(
        'relative flex items-center gap-4 bg-clip-text text-transparent ',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
