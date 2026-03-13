import { Tabs } from '@base-ui/react/tabs';

import InsertPersonButton from '../PersonInsert/InsertPersonButton';

import TabContentList from './components/TabContentList/TabContentList';
import styles from './DashboardTabs.module.css';
import { getTabContentList } from './services/getTabContentList';

import type { TDashboardTabs, TTabKey } from './models/dashboardTabs.model';

const DashboardTabs = async ({ categories }: TDashboardTabs) => {
  const { actions, equipments, persons, places } = await getTabContentList();

  return (
    <Tabs.Root defaultValue="Все" className={styles.root}>
      <Tabs.List className={styles.list}>
        {categories.map((tab) => (
          <Tabs.Tab key={tab.id} value={tab.title} className={styles.tab}>
            {tab.value}
          </Tabs.Tab>
        ))}
        <div className={styles.buttonContainer}></div>
        <InsertPersonButton />
        <Tabs.Indicator className={styles.indicator} />
      </Tabs.List>
      {categories.map((tab) => (
        <TabContentList
          key={tab.id}
          actions={actions}
          places={places}
          persons={persons}
          equipments={equipments}
          tabName={tab.title as TTabKey}
        />
      ))}
    </Tabs.Root>
  );
};
export default DashboardTabs;
