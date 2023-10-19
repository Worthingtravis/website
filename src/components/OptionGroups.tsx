import { Button } from './Button';

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
  <div className="flex gap-2">
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
  <div>
    <h3 className="text-lg font-semibold text-white">{title}</h3>
    <div className={`mt-2 grid grid-cols-2 gap-4`}>
      {options.map(({ key, value }) => (
        <Button
          key={key}
          onClick={() => setActiveValue(value)}
          active={value.toString() === activeValue}
          className={''}
        >
          {key}
        </Button>
      ))}
    </div>
  </div>
);
