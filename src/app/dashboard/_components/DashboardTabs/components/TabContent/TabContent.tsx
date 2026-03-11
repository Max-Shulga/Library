import { AllCommunityModule, themeQuartz, colorSchemeDarkBlue } from 'ag-grid-community';
import { AgGridReact, AgGridProvider } from 'ag-grid-react';
import { useRef } from 'react';

import type { TTabContent } from './models/tabContent.model';

const TabContent = ({ rowData, columnDefs }: TTabContent) => {
  const gridRef = useRef<AgGridReact>(null);
  const modules = [AllCommunityModule];
  const themeDarkBlue = themeQuartz.withPart(colorSchemeDarkBlue);
  const defaultColDef = {
    editable: true,
    flex: 1,
    minWidth: 100,
    filter: true,
  };
  return (
    <div style={{ flex: 1, display: 'flex', height: '100%' }}>
      <div style={{ flex: 1 }}>
        <AgGridProvider modules={modules}>
          <AgGridReact
            ref={gridRef}
            theme={themeDarkBlue}
            rowData={rowData}
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
            pagination
            paginationPageSize={15}
          />
        </AgGridProvider>
      </div>
    </div>
  );
};

export default TabContent;
