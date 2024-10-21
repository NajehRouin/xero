
export type Cell = {
    Value: string;
  };
  
  export type Row = {
    RowType: string;
    Cells?: Cell[];
    Title?: string;
    Rows?: Row[];
  };
  
  export type Report = {
    ReportID: string;
    ReportName: string;
    ReportTitles: string[];
    Rows: Row[];
  };
  
  export interface BalanceSheetTableProps {
    report: Report;
  }
  