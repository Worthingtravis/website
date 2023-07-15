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
