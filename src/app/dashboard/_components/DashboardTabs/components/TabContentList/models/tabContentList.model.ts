import type { TTabKey } from '../../../models/dashboardTabs.model';
import type { Database } from '@/database.types/*';

type TActions = Database['public']['Tables']['actions']['Row'];
type TPersons = Database['public']['Tables']['persons']['Row'];
type TPlaces = Database['public']['Tables']['places']['Row'];
type TEquipments = Database['public']['Tables']['equipments']['Row'];

type TTabContentList = {
  actions: TActions[];
  equipments: TEquipments[];
  persons: TPersons[];
  places: TPlaces[];
  tabName: TTabKey;
};
type TAllRow = {
  type: Exclude<TTabKey, 'all'>;
  id: number;
  title: string;
  description?: string | null;
};

export type { TTabContentList, TActions, TPersons, TPlaces, TEquipments, TAllRow };
