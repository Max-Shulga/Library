import { useForm } from 'react-hook-form';
import styles from './signIn.module.css';

function SignInPage() {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      defaultValues: {
        email: '',
        password: '',
        remember: false,
      },
    });

    const onSubmit = (data) => {
      console.log('Login data:', data);
      // Здесь будет запрос на сервер
      // await loginMutation.mutateAsync(data);
    };

    return (
      <section className={styles.container}>
        <div className={styles.wrapper}>
          <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <h2 className={styles.title}>Login</h2>

            <div className={styles.inputField}>
              <input
                type="email"
                placeholder=" "
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: 'Invalid email format',
                  },
                })}
              />
              <label>Email</label>
              {errors.email && <span style={{ color: '#ff6b6b', fontSize: '0.85rem' }}>{errors.email.message}</span>}
            </div>

            <div className={styles.inputField}>
              <input
                type="password"
                placeholder=" "
                {...register('password', {
                  required: 'Password is required',
                  minLength: {
                    value: 6,
                    message: 'Minimum 6 characters',
                  },
                })}
              />
              <label>Password</label>
              {errors.password && <span style={{ color: '#ff6b6b', fontSize: '0.85rem' }}>{errors.password.message}</span>}
            </div>

            <div className={styles.forget}>
              <label className={styles.rememberLabel}>
                <input
                  type="checkbox"
                  className={styles.rememberCheckbox}
                  {...register('remember')}
                />
                <span>Remember me</span>
              </label>

              <a href="#" className={styles.link}>
                Forgot password?
              </a>
            </div>

            <button type="submit" className={styles.button}>
              Log In
            </button>

            <div className={styles.register}>
              Don't have an account?{' '}
              <a href="#" className={styles.link}>
                Register
              </a>
            </div>
          </form>
        </div>
      </section>
    );
}

export default SignInPage;
