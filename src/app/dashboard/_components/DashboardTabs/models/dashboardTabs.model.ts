import type { Database } from '@/database.types/*';
import type { ColDef } from 'ag-grid-community';

type TDashboardTabs = {
  categories: Database['public']['Tables']['categories']['Row'][];
};

type TTabConfig = {
  rowData: unknown[];
  columnDefs: ColDef[];
};
type TTabKey = 'all' | 'actions' | 'persons' | 'places' | 'equipment';

export type { TDashboardTabs, TTabConfig, TTabKey };
