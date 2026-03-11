import type { TTabConfig, TTabKey } from '../../../models/dashboardTabs.model';
import type {
  TActions,
  TAllRow,
  TEquipment,
  TPersons,
  TPlaces,
  TTabContentList,
} from '../models/tabContentList.model';
import type { ColDef } from 'ag-grid-community';

const useTabContentList = ({ actions, equipment, persons, places }: TTabContentList) => {
  const actionsColumnDefs: ColDef<TActions>[] = [
    {
      headerName: 'ID',
      field: 'id',
      width: 90,
      sortable: true,
    },
    {
      headerName: 'Title',
      field: 'title',
      flex: 1,
      filter: true,
    },
    {
      headerName: 'Date',
      field: 'date',
      sortable: true,
      valueFormatter: (params) => (params.value ? new Date(params.value).toLocaleDateString() : ''),
    },
    {
      headerName: 'Persons',
      field: 'persons',
      valueFormatter: (params) => params.value?.join(', ') ?? '',
    },
  ];
  const personsColumnDefs: ColDef<TPersons>[] = [
    {
      headerName: 'ID',
      field: 'id',
      width: 90,
    },
    {
      headerName: 'Name',
      field: 'name',
      flex: 1,
      filter: true,
    },
  ];
  const placesColumnDefs: ColDef<TPlaces>[] = [
    {
      headerName: 'ID',
      field: 'id',
      width: 90,
    },
    {
      headerName: 'Title',
      field: 'title',
      flex: 1,
    },
  ];

  const equipmentColumnDefs: ColDef<TEquipment>[] = [
    {
      headerName: 'ID',
      field: 'id',
      width: 90,
    },
    {
      headerName: 'Name',
      field: 'title',
      flex: 1,
      filter: true,
    },
    {
      headerName: 'Description',
      field: 'description',
      flex: 1,
    },
  ];

  const allData = [
    ...actions.map((a) => ({
      type: 'События',
      id: a.id,
      title: a.title,
      description: null,
    })),

    ...persons.map((p) => ({
      type: 'Персонажи',
      id: p.id,
      title: p.name,
      description: p.description,
    })),

    ...places.map((p) => ({
      type: 'Места',
      id: p.id,
      title: p.title,
      description: null,
    })),

    ...equipment.map((e) => ({
      type: 'Оборудование',
      id: e.id,
      title: e.title,
      description: e.description,
    })),
  ];
  const allColumnDefs: ColDef<TAllRow>[] = [
    {
      headerName: 'Тип',
      field: 'type',
      width: 120,
    },
    {
      headerName: 'ID',
      field: 'id',
      width: 90,
    },
    {
      headerName: 'Наименование',
      field: 'title',
      flex: 1,
    },
    {
      headerName: 'Описание',
      field: 'description',
      flex: 1,
      valueFormatter: (params) => params.value ?? '',
    },
  ];

  const tabConfig: Record<TTabKey, TTabConfig> = {
    all: {
      rowData: allData,
      columnDefs: allColumnDefs,
    },
    actions: {
      rowData: actions,
      columnDefs: actionsColumnDefs,
    },
    persons: {
      rowData: persons,
      columnDefs: personsColumnDefs,
    },
    places: {
      rowData: places,
      columnDefs: placesColumnDefs,
    },
    equipment: {
      rowData: equipment,
      columnDefs: equipmentColumnDefs,
    },
  };
  return { tabConfig } as const;
};

export { useTabContentList };
