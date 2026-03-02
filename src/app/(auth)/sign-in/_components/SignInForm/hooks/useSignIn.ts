import { redirect } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { ROUTES } from '@/core/constants/routes.constant';

import { signIn } from '../api/signIn';

import type { TSignIn } from '../model/signInForm.model';
import type { TNullable } from '@/core/types/utility.types';

const useSignIn = () => {
  const [error, setError] = useState<TNullable<string>>(null);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TSignIn>({
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    mode: 'all',
  });

  const handleSignIn = async ({ email, password }: TSignIn) => {
    setError(null);
    const { error } = await signIn({ email, password });

    if (error) {
      setError(error.message);
      return false;
    }
    redirect(ROUTES.AUTHENTICATED.HOME);
    return true;
  };
  const onSubmit = async (data: TSignIn) => {
    await handleSignIn(data);
  };

  return {
    error,
    showPassword,
    errors,
    isSubmitting,
    register,
    handleSubmit,
    setShowPassword,
    onSubmit,
  } as const;
};

export { useSignIn };
