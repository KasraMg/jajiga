import { Button } from "@/src/components/shadcn/ui/button";
import { book } from "@/src/types/Auth.types";
import { reservesColumns } from "@/src/utils/dataTableColumns";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

const Reserves = ({ books }: { books: book[] }) => {
  const [data, setData] = useState<book[]>(books);
  
  useEffect(() => {
    const tableData: unknown = books.map((book: book) => ({
      userData: book.user.firstName + " " + book.user.lastName,
      phone: book.user.phone,
      room: (
        <Link href={`/room/${book.villa}`}>
          <Button size={"sm"} variant={"main"}>
            مشاهده
          </Button>
        </Link>
      ),
      register: (
        <div>
          <p>{book.date.from}</p>
          <p>{book.date.to}</p>
        </div>
      ),
      price: book.price,
    }));
    setData(tableData as book[]);
  }, [books]);
  return (
    <div className="w-full xl:!w-1/2">
      <DataTable
        columns={reservesColumns as any}
        data={data}
        progressComponent={".... "}
        pagination
        paginationPerPage={5}
        paginationRowsPerPageOptions={[5]}
      />
    </div>
  );
};

export default Reserves;
