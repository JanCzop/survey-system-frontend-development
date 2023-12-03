type Row = {
  title: string;
  startDate: string;
  endDate: string;
  link: string;
  analysisLink: string;
  status: string;
};

type RowsApiResponse = Array<{
  id: string;
  name: string;
  status: number;
  start_date: string;
  end_date: string;
}>;
