'use client';

import { Tabs } from '@base-ui/react/tabs';

import TabContent from './components/TabContent/TabContent';
import styles from './DashboardTabs.module.css';

const TABS = [
  { value: 'overview', label: 'Обзор' },
  { value: 'users', label: 'Пользователи' },
  { value: 'orders', label: 'Заказы' },
  // ...
];

const DashboardTabs = () => {
  return (
    <Tabs.Root defaultValue="overview" className={styles.root}>
      <Tabs.List className={styles.list}>
        {TABS.map((tab) => (
          <Tabs.Tab key={tab.value} value={tab.value} className={styles.tab}>
            {tab.label}
          </Tabs.Tab>
        ))}
        <Tabs.Indicator className={styles.indicator} />
      </Tabs.List>

      <div className={styles.panels}>
        <Tabs.Panel value="overview" className={styles.panel}>
          <TabContent />
        </Tabs.Panel>

        <Tabs.Panel value="users" className={styles.panel}>
          <TabContent />
        </Tabs.Panel>

        {/* другие панели */}
      </div>
    </Tabs.Root>
  );
};
export default DashboardTabs;
