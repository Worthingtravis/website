export type Config = {
  fields: Array<{
    label: string;
    name: string;
    type: string;
    default: string;
    validationRules: {
      required: boolean;
      minLength?: number;
      maxLength?: number;
      regex?: string;
    };
  }>;
  variant: 'default' | 'outline' | 'questionable' | 'dark';
};

export const variants = {
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

export const configs: Config[] = [
  {
    fields: [
      {
        label: 'Username',
        name: 'username',
        type: 'text',
        default: '',
        validationRules: {
          required: true,
          minLength: 3,
        },
      },
      {
        label: 'Password',
        name: 'password',
        type: 'password',
        default: '',
        validationRules: {
          required: true,
          minLength: 6,
          maxLength: 20,
          regex: '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})', // At least 1 uppercase, 1 lowercase, and 1 number
        },
      },
    ],
    variant: 'default',
  },
  {
    fields: [
      {
        label: 'Email',
        name: 'email',
        type: 'email',
        default: '',
        validationRules: {
          required: true,
          regex: '^\\S+@\\S+\\.\\S+$', // Matches basic email format
        },
      },
      {
        label: 'Password',
        name: 'password',
        type: 'password',
        default: '',
        validationRules: {
          required: true,
          minLength: 8,
        },
      },
    ],
    variant: 'outline',
  },
  {
    fields: [
      {
        label: 'User ID',
        name: 'userId',
        type: 'text',
        default: '',
        validationRules: {
          required: true,
          minLength: 5,
          maxLength: 15,
        },
      },
      {
        label: 'PIN',
        name: 'pin',
        type: 'password',
        default: '',
        validationRules: {
          required: true,
          minLength: 4,
          maxLength: 4,
          regex: '^[0-9]+$', // Only numeric characters
        },
      },
      {
        label: 'Something Else',
        name: 'se',
        type: 'text',
        default: 'default',
        validationRules: {
          required: false,
          minLength: 6,
          maxLength: 20,
        },
      },
    ],
    variant: 'questionable',
  },
  {
    fields: [
      {
        label: 'Email or Username',
        name: 'emailOrUsername',
        type: 'text',
        default: '',
        validationRules: {
          required: true,
        },
      },
      {
        label: 'Password',
        name: 'password',
        type: 'password',
        default: '',
        validationRules: {
          required: true,
          minLength: 8,
          maxLength: 30,
        },
      },
    ],
    variant: 'dark',
  },
];

export const layoutOptions = {
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

export const positionOptions = {
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
    },
    alignSelf: {
      alignSelfStart: 'self-start', // align individual items as flex-start
      alignSelfEnd: 'self-end', // align individual items as flex-end
      alignSelfCenter: 'self-center', // align individual items as center
      alignSelfStretch: 'self-stretch', // stretch individual items
    },
  },
};
