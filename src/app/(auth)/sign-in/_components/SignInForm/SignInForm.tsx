'use client';
import { Input } from '@base-ui/react/input';

import { emailRegex } from '@/core/constants/regex.constants';
import EyeSlashIcon from '@/icons/eye-slash.svg';
import EyeIcon from '@/icons/eye.svg';

import styles from '../../signIn.module.css';

import { useSignIn } from './hooks/useSignIn';

const SignInForm = () => {
  const { errors, showPassword, isSubmitting, setShowPassword, handleSubmit, onSubmit, register } =
    useSignIn();
  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className={styles.field}>
        <label htmlFor="email" className={styles.label}>
          Email
        </label>
        <Input
          id="email"
          type="email"
          placeholder="example@domain.com"
          className={styles.input}
          {...register('email', {
            required: 'Email обязателен',
            pattern: {
              value: emailRegex,
              message: 'Некорректный email',
            },
          })}
        />
        {errors.email && <p className={styles.error}>{errors.email.message}</p>}
      </div>

      <div className={styles.field}>
        <label htmlFor="password" className={styles.label}>
          Пароль
        </label>
        <div className={styles.inputWrapper}>
          <Input
            id="password"
            type={showPassword ? 'text' : 'password'}
            placeholder="••••••••"
            className={styles.input}
            {...register('password', {
              required: 'Пароль обязателен',
              minLength: { value: 6, message: 'Минимум 6 символов' },
            })}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className={styles.passwordToggle}
            aria-label={showPassword ? 'Скрыть пароль' : 'Показать пароль'}
          >
            {showPassword ? <EyeSlashIcon /> : <EyeIcon />}
          </button>
        </div>
        {errors.password && <p className={styles.error}>{errors.password.message}</p>}
      </div>

      <div className={styles.options}>
        <label className={styles.checkboxLabel}>
          <input type="checkbox" {...register('rememberMe')} />
          Запомнить
        </label>

        <a href="#" className={styles.forgot}>
          Забыли пароль?
        </a>
      </div>

      <button type="submit" disabled={isSubmitting} className={styles.button}>
        {isSubmitting ? 'Вход...' : 'Войти'}
      </button>
    </form>
  );
};
export default SignInForm;
