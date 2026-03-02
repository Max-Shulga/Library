import DashboardTabs from './_components/DashboardTabs/DashboardTabs';
import styles from './DashboardPage.module.css';

const DashboardPage = () => {
  return (
    <div className={styles.dashboardPagePage}>
      <DashboardTabs />
    </div>
  );
};

export default DashboardPage;
