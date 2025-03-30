import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "group/bento row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-white/[0.2] bg-cyan-500/5 p-4 transition duration-200 hover:shadow-xl hover:shadow-cyan-500/10",
        className,
      )}
    >
      {header}
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        {icon && (
          <div className="flex items-center gap-3 mb-2">
            <div className="size-8 lg:size-12 rounded-full bg-cyan-500/10 flex items-center justify-center shrink-0">
              {icon}
            </div>
            {title && (
              <div className="font-sans font-bold text-white text-lg lg:text-xl">
                {title}
              </div>
            )}
          </div>
        )}
        {!icon && title && (
          <div className="font-sans font-bold text-white text-lg lg:text-xl mb-2">
            {title}
          </div>
        )}
        <div className="font-sans text-sm font-normal text-gray-300">
          {description}
        </div>
      </div>
    </div>
  );
}; 