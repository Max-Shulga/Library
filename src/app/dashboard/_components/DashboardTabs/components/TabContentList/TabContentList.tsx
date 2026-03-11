'use client';
import { Tabs } from '@base-ui/react/tabs';

import TabContent from '../TabContent/TabContent';

import { useTabContentList } from './hooks/useTabContentList';

import type { TTabContentList } from './models/tabContentList.model';

const TabContentList = (props: TTabContentList) => {
  const { tabConfig } = useTabContentList(props);
  const { tabName } = props;
  const config = tabConfig[tabName];

  return (
    <Tabs.Panel value={tabName} style={{ height: '100%' }}>
      <TabContent rowData={config.rowData} columnDefs={config.columnDefs} />
    </Tabs.Panel>
  );
};
export default TabContentList;
