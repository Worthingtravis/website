import { Button } from '@/components/ui/button';

export const RadioOptionGroup = ({
  title,
  options,
  activeValue,
  setActiveValue,
}: {
  title: string;
  options: { key: string; value: string | number }[];
  activeValue: string;
  setActiveValue: (value: string | number) => void;
}) => (
  <div className="flex justify-around gap-2">
    <h1>{title}:</h1>
    {options.map(({ key, value }) => (
      <label
        key={key}
        className="inline-flex items-center text-white"
        htmlFor={`radio-${key}`}
      >
        <input
          type="radio"
          id={`radio-${key}`}
          className="h-5 w-5"
          name={`radio-${key}`}
          value={value}
          checked={activeValue === value}
          onChange={() => setActiveValue(value)}
        />
        <span className="ml-2 ">{key}</span>
      </label>
    ))}
  </div>
);

export const OptionButtonGroup = ({
  title,
  options,
  activeValue,
  setActiveValue,
}: {
  title: string;
  options: { key: string; value: string | number }[];
  activeValue: string;
  setActiveValue: (value: string | number) => void;
}) => (
  <div className={'mt-4 space-x-2 space-y-4'}>
    <h3 className="text-lg font-semibold text-white ">{title}</h3>
    <div className={`grid grid-cols-4 gap-4 `}>
      {options.map(({ key, value }) => (
        <Button
          key={key}
          onClick={() => setActiveValue(value)}
          variant={value.toString() === activeValue ? 'outline' : 'ghost'}
        >
          {key}
        </Button>
      ))}
    </div>
  </div>
);
