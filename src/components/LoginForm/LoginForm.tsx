import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import _ from 'lodash';
import { useCallback, useState } from 'react';
import { toast } from 'react-toastify';

import AnimatedCheckIcon from '@/components/AnimatedSVG';
import { Button } from '@/components/Button';
import { ErrorIcon, LoadingIcon, SubmitOutlineIcon } from '@/components/Icons';
import type { Config } from '@/components/LoginForm/LoginForm.config';
import { configs } from '@/components/LoginForm/LoginForm.config';
import { useIsMounted } from '@/hooks/useIsMounted';
import { useLocalStorage } from '@/hooks/useLocalStorage';

const variants = {
  outline: {
    background: 'bg-gray-900',
    text: 'text-white',
    border: 'border-gray-900',
    focus: 'focus:ring-gray-900',
    ring: 'ring-2',
  },
  default: {
    background: 'bg-transparent',
    text: 'text-white',
    border: 'border-white',
    focus: 'focus:ring-white',
  },
  questionable: {
    background: 'bg-teal-500',
    text: 'text-white',
    border: 'border-white',
    focus: 'focus:ring-white',
  },
  dark: {
    background: 'bg-gray-950',
    text: 'text-white',
    border: 'border-gray-950',
    focus: 'focus:ring-gray-900',
  },
};

export const LoginForm = ({ config }: { config: Config }) => {
  const classNames = variants[config.variant];
  const [values, setValues] = useState<{ [key: string]: string }>(
    config.fields.reduce(
      (prev, curr) => ({ ...prev, [curr.name]: curr.default }),
      {}
    )
  );
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const checkForErrors = useCallback(() => {
    setLoading(true);
    const currentErrors: { [key: string]: string } = {};

    config.fields.forEach((field) => {
      const value = values[field.name];

      if (field.validationRules.required && value?.length === 0) {
        currentErrors[field.name] = `${field.label} is required`;
      }

      if (
        field.validationRules.minLength &&
        value &&
        value.length < field.validationRules.minLength
      ) {
        currentErrors[
          field.name
        ] = `${field.label} must be at least ${field.validationRules.minLength} characters`;
      }

      if (
        field.validationRules.maxLength &&
        value &&
        value.length > field.validationRules.maxLength
      ) {
        currentErrors[
          field.name
        ] = `${field.label} must be less than ${field.validationRules.maxLength} characters`;
      }

      if (
        value &&
        field.validationRules.regex &&
        !new RegExp(field.validationRules.regex).test(value)
      ) {
        currentErrors[field.name] = `${field.label} is not valid`;
        console.log(field.validationRules.regex, field.name, value);
      }
    });

    setErrors(currentErrors);
    return currentErrors;
  }, [setLoading, setErrors, values]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const currentErrors = checkForErrors();

    if (Object.keys(currentErrors).length > 0) {
      setLoggedIn(false);
      setLoading(false);
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          setLoggedIn(true);
          toast.success('Welcome back!', { toastId: 'welcome' });

          setTimeout(() => {
            setLoggedIn(false);
          }, 2000);
        }
      } else {
        setLoggedIn(false);
        toast.error('Something went wrong!', { toastId: 'error' });
      }
    } catch (error) {
      setLoggedIn(false);
      toast.error('Something went wrong!', { toastId: 'error' });
    } finally {
      setLoading(false);
    }
  };

  const onInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValues((prevValues) => ({
        ...prevValues,
        [e.target.name]: e.target.value,
      }));
      setErrors((prevErrors) => {
        const { [e.target.name]: value, ...remainingErrors } = prevErrors;
        return remainingErrors;
      });
      setLoggedIn(false);
    },
    []
  );

  return (
    <div className="flex items-center justify-center text-sm">
      <form
        className={clsx(
          ...Object.values(classNames),
          'w-full max-w-sm rounded-lg p-4 transition-all duration-500 ease-in-out'
        )}
        onSubmit={handleSubmit}
      >
        {config.fields.map((field) => (
          <div className="mb-4" key={field.name}>
            <label
              className="mb-2 block text-sm font-bold"
              htmlFor={field.name}
            >
              {field.label}{' '}
              <small className={'text-red-500'}>- {errors[field.name]}</small>
            </label>

            <input
              className="w-full appearance-none rounded-lg border bg-inherit px-3 py-2 leading-tight  shadow transition-colors duration-300 ease-in-out focus:outline-none"
              id={field.name}
              type={field.type}
              name={field.name}
              onChange={onInputChange}
              value={values[field.name]}
              required={field.validationRules.required}
            />
          </div>
        ))}
        <button
          disabled={loading || loggedIn || Object.keys(errors).length > 0}
          className={clsx(
            'bottom-0 mx-1 my-1 flex h-12 w-[calc(100%-0.5rem)] max-w-full flex-nowrap items-center justify-between gap-4 rounded border-2 bg-transparent px-2 py-2 font-bold text-white transition-all duration-500 ease-in-out hover:ring-2 focus:outline-none disabled:text-white/70',
            Object.keys(errors).length > 0 && 'border-red-500',
            loggedIn && 'border-green-500',
            loading && 'border-blue-500'
          )}
          type="submit"
        >
          <span>Sign In</span>
          <span className={'flex h-16 w-10 items-center justify-center '}>
            <AnimatePresence mode={'popLayout'}>
              {Object.keys(errors).length === 0 && !loading && loggedIn && (
                <AnimatedCheckIcon isVisible={!!loggedIn} />
              )}
              {Object.keys(errors).length === 0 && !loading && !loggedIn && (
                <SubmitOutlineIcon />
              )}
              {loading && <LoadingIcon />}
              {Object.keys(errors).length > 0 && !loading && <ErrorIcon />}
            </AnimatePresence>
          </span>
        </button>
      </form>
    </div>
  );
};

const layoutOptions = {
  grid1: 'grid grid-cols-1',
  grid2: 'grid grid-cols-2',
  grid3: 'grid grid-cols-3',
  grid4: 'grid grid-cols-4',
  grid211: 'grid grid-cols-4 grid-span-2-1-1',
  grid12: 'grid grid-cols-3 grid-span-1-2',
  flex: 'flex',
  flexcol: 'flex flex-col',
  flexWrap: 'flex flex-wrap',
  flexNoWrap: 'flex flex-no-wrap',
  flexColWrap: 'flex flex-col flex-wrap',
  flexColNoWrap: 'flex flex-col flex-no-wrap',
};

const positionOptions = {
  grid: {
    items: {
      itemsCenter: 'items-center',
      itemsStart: 'items-start',
      itemsEnd: 'items-end',
      itemsStretch: 'items-stretch', // stretch to fill the grid cell
    },
    justify: {
      justifyCenter: 'justify-center',
      justifyStart: 'justify-start',
      justifyEnd: 'justify-end',
      justifyBetween: 'justify-between',
      justifyAround: 'justify-around',
      justifyEvenly: 'justify-evenly',
    },
  },
  flex: {
    items: {
      itemsCenter: 'items-center',
      itemsStart: 'items-start',
      itemsEnd: 'items-end',
      itemsBaseline: 'items-baseline', // align items along their baseline
      itemsStretch: 'items-stretch', // stretch to fill the flex container
    },
    justify: {
      justifyCenter: 'justify-center',
      justifyStart: 'justify-start',
      justifyEnd: 'justify-end',
      justifyBetween: 'justify-between',
      justifyAround: 'justify-around',
      justifyEvenly: 'justify-evenly',
      justifyNone: 'justify-none', // justify-content: normal
    },
    alignSelf: {
      alignSelfStart: 'self-start', // align individual items as flex-start
      alignSelfEnd: 'self-end', // align individual items as flex-end
      alignSelfCenter: 'self-center', // align individual items as center
      alignSelfStretch: 'self-stretch', // stretch individual items
    },
  },
};

export const LoginExamples = () => {
  const [layout, setLayout] = useState<string>(layoutOptions.grid2);
  const layoutType = layout.includes('grid') ? 'grid' : 'flex';

  const [positions, setPositions] = useState<{
    items: string;
    justify: string;
    alignSelf?: string;
  }>({
    items: positionOptions[layoutType].items.itemsCenter,
    justify: positionOptions[layoutType].justify.justifyStart,
    ...(layoutType === 'flex' && {
      alignSelf: positionOptions[layoutType].alignSelf.alignSelfStart,
    }),
  });

  const [showConfig, setShowConfig] = useLocalStorage('show-config', true);

  const isMounted = useIsMounted();
  if (!isMounted) return null;

  return (
    <div className={'grid grid-cols-4 gap-2 text-sm'}>
      <div
        className={
          'col-span-1 flex flex-col gap-4 border bg-gray-800 p-2 shadow-lg'
        }
      >
        <h3 className="text-lg font-semibold text-white">Config</h3>
        <div className={'flex flex-wrap'}>
          <Button onClick={() => setShowConfig(!showConfig)}>
            {showConfig ? 'Hide' : 'Show'} Config{' '}
            <AnimatedCheckIcon isVisible={showConfig} initial={true} />
          </Button>
        </div>
        <h3 className="text-lg font-semibold text-white">Layout</h3>
        <div className={`mt-2 grid grid-cols-2 gap-4`}>
          {Object.entries(layoutOptions).map(([key, value]) => (
            <Button
              key={key}
              onClick={() => setLayout(value)}
              active={value === layout}
            >
              {_.startCase(key)}
            </Button>
          ))}
        </div>
        {Object.entries(positionOptions[layoutType]).map(
          ([positionType, values]) => (
            <div key={positionType}>
              <h3 className="text-lg font-semibold text-white">
                {_.startCase(positionType)}
              </h3>
              <div className={`mt-2 grid grid-cols-2 gap-4`}>
                {Object.entries(values).map(([key, value]) => (
                  <Button
                    key={key}
                    aria-label={key}
                    onClick={() =>
                      setPositions((prev) => ({
                        ...prev,
                        [positionType]: value,
                      }))
                    }
                    active={value === positions[positionType]}
                  >
                    {_.startCase(key)}
                  </Button>
                ))}
              </div>
            </div>
          )
        )}
      </div>

      <div
        className={
          'scrollbar col-span-3 max-h-[calc(100vh-22rem)] overflow-y-auto border border-gray-600'
        }
      >
        <div
          className={clsx(
            layout,
            Object.values(positions),
            'gap-4 shadow-neutral-950 '
          )}
        >
          {configs.map((config) => (
            <div key={config.variant} className={clsx(`my-8 gap-8`)}>
              <motion.div layout>
                <h2 className="my-4 text-center text-2xl font-semibold">
                  {_.startCase(config.variant)}
                </h2>
                <LoginForm config={config} />
              </motion.div>
              {showConfig && (
                <pre className="w-full rounded bg-gray-900 p-4 text-xs">
                  <code>{JSON.stringify(config, null, 2)} </code>
                </pre>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
