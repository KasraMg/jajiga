import { book } from "@/src/types/Auth.types";
import { reservesColumns } from "@/src/utils/dataTableColumns";
import React, { useState } from "react";
import DataTable from "react-data-table-component";


const Reserves = ({ books }: { books: book[] }) => {
  const [data, setData] = useState(books);
  
  return (
    <DataTable
      columns={reservesColumns as any}
      data={data}
      progressComponent={".... "}
      pagination
    />
  );
};

export default Reserves;
