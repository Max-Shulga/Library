import SignInForm from './_components/SignInForm/SignInForm';
import styles from './signIn.module.css';

const SignInPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Вход</h1>
        <p className={styles.subtitle}>Введите свои учетные данные для доступа к учетной записи</p>
        <SignInForm />
        <div className={styles.signup}>
          Нет аккаунта?{' '}
          <a href="#" className={styles.signupLink}>
            Создать
          </a>
        </div>
      </div>
    </div>
  );
};
export default SignInPage;
