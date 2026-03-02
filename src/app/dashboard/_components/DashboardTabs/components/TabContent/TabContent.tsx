import { AgGridReact } from 'ag-grid-react';
import { useMemo, useRef } from 'react';
const TabContent = () => {
  const gridRef = useRef<AgGridReact>(null);

  const columnDefs = useMemo(
    () => [
      { field: 'id', headerName: 'ID', width: 90 },
      { field: 'name', headerName: 'Имя', filter: true },
      { field: 'email', headerName: 'Email', filter: 'agTextColumnFilter' },
      { field: 'role', headerName: 'Роль' },
      // ...
    ],
    []
  );

  const rowData = [
    { id: 1, name: 'Анна', email: 'anna@example.com', role: 'Admin' },
    // ... реальные данные из API / zustand / react-query
  ];

  return (
    <div className="ag-theme-alpine" style={{ width: '100%' }}>
      <AgGridReact
        ref={gridRef}
        rowData={rowData}
        columnDefs={columnDefs}
        pagination={true}
        paginationPageSize={15}
      />
    </div>
  );
};
export default TabContent;
