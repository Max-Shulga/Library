import type { TTabKey } from '../../../models/dashboardTabs.model';
import type { Database } from '@/database.types/*';

type TActions = Database['public']['Tables']['actions']['Row'];
type TPersons = Database['public']['Tables']['persons']['Row'];
type TPlaces = Database['public']['Tables']['places']['Row'];
type TEquipment = Database['public']['Tables']['equipment']['Row'];

type TTabContentList = {
  actions: TActions[];
  equipment: TEquipment[];
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

export type { TTabContentList, TActions, TPersons, TPlaces, TEquipment, TAllRow };
