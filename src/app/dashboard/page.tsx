import { createClient } from 'lib/supabase/server';

import DashboardTabs from './_components/DashboardTabs/DashboardTabs';
import styles from './DashboardPage.module.css';

const DashboardPage = async () => {
  const supabase = await createClient();
  const { data: categories, error } = await supabase
    .from('categories')
    .select('*')
    .order('id', { ascending: true });
  if (error) {
    console.error('Ошибка загрузки категорий:', error);
    return <div>Ошибка загрузки категорий</div>;
  }
  return (
    <div className={styles.dashboardPagePage}>
      <DashboardTabs categories={categories} />
    </div>
  );
};

export default DashboardPage;
