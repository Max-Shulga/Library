import { Tabs } from '@base-ui/react/tabs';

import { createClient } from 'lib/supabase/server';

import TabContentList from './components/TabContentList/TabContentList';
import styles from './DashboardTabs.module.css';

import type { TDashboardTabs, TTabKey } from './models/dashboardTabs.model';

const DashboardTabs = async ({ categories }: TDashboardTabs) => {
  const supabase = await createClient();
  const { data: actions, error: actionsError } = await supabase
    .from('actions')
    .select('*')
    .order('id', { ascending: true });
  const { data: equipment, error: equipmentError } = await supabase
    .from('equipment')
    .select('*')
    .order('id', { ascending: true });
  const { data: persons, error: personsError } = await supabase
    .from('persons')
    .select('*')
    .order('id', { ascending: true });
  const { data: places, error: placesError } = await supabase
    .from('places')
    .select('*')
    .order('id', { ascending: true });

  return (
    <Tabs.Root defaultValue="Все" className={styles.root}>
      <Tabs.List className={styles.list}>
        {categories.map((tab) => (
          <Tabs.Tab key={tab.id} value={tab.title} className={styles.tab}>
            {tab.value}
          </Tabs.Tab>
        ))}
        <Tabs.Indicator className={styles.indicator} />
      </Tabs.List>
      {categories.map((tab) => (
        <TabContentList
          key={tab.id}
          actions={actions ?? []}
          places={places ?? []}
          persons={persons ?? []}
          equipment={equipment ?? []}
          tabName={tab.title as TTabKey}
        />
      ))}
    </Tabs.Root>
  );
};
export default DashboardTabs;
