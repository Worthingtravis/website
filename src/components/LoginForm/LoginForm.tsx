import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import _ from 'lodash';
import { useCallback, useState } from 'react';
import { toast } from 'react-toastify';

import AnimatedCheckIcon from '../AnimatedSVG';
import { ErrorIcon, LoadingIcon, SubmitOutlineIcon } from '../Icons';
import type { Config } from './LoginForm.config';
import {
  configs,
  layoutOptions,
  positionOptions,
  variants,
} from './LoginForm.config';
import { useIsMounted } from '../../hooks/useIsMounted';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { DynamicLayout } from '../../templates/DynamicLayout';

import { OptionButtonGroup } from '../OptionGroups';
import { Button } from '@/components/ui/button';

export const LoginForm = ({ config }: { config: Config }) => {
  const classNames = variants[config.variant];
  const [values, setValues] = useState<{ [key: string]: string }>(
    config.fields.reduce(
      (prev, curr) => ({ ...prev, [curr.name]: curr.default }),
      {}
    )
  );
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

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
      }
    });

    setErrors(currentErrors);
    return currentErrors;
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        // eslint-disable-next-line unused-imports/no-unused-vars
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
            'bottom-0 m-1 flex h-12 w-[calc(100%-0.5rem)] max-w-full flex-nowrap items-center justify-between gap-4 rounded border border-blue-500  bg-transparent p-2 font-bold text-white transition-all duration-500 ease-in-out hover:ring-2 focus:outline-none disabled:text-white/70',
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

  const leftColumn = (
    <div className={'space-y-4'}>
      <OptionButtonGroup
        title="Layout"
        options={Object.entries(layoutOptions).map(([key, value]) => ({
          key,
          value,
        }))}
        activeValue={layout}
        setActiveValue={setLayout as (value: string | number) => void}
      />

      {Object.entries(positionOptions[layoutType]).map(
        ([positionType, values]) => (
          <OptionButtonGroup
            key={positionType}
            title={_.startCase(positionType)}
            // @ts-ignore
            options={Object.entries(values).map(([key, value]) => ({
              key,
              value,
            }))}
            // @ts-ignore
            activeValue={positions[positionType]}
            setActiveValue={(value) =>
              setPositions((prev) => ({ ...prev, [positionType]: value }))
            }
          />
        )
      )}

      <h3 className="sticky top-0 text-lg font-semibold text-white">Config</h3>
      <div className={'flex flex-wrap'}>
        <Button onClick={() => setShowConfig(!showConfig)}>
          {showConfig ? 'Hide' : 'Show'} Config
          <AnimatedCheckIcon isVisible={showConfig} initial={true} />
        </Button>
      </div>
    </div>
  );

  const mainContent = configs.map((config) => (
    <div key={config.variant} className={clsx(' gap-8')}>
      <motion.div layout>
        <h2 className=" text-center text-2xl font-semibold">
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
  ));

  return (
    <DynamicLayout
      layout={layout}
      positions={positions}
      leftColumn={leftColumn}
      mainContent={mainContent}
    />
  );
};
