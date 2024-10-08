import { Button } from "@/src/components/shadcn/ui/button";
import { Book } from "@/src/types/Auth.types";
import { reservesColumns } from "@/src/utils/dataTableColumns";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

const Reserves = ({ books }: { books: Book[] }) => {
  const [data, setData] = useState<Book[]>(books);
  
  useEffect(() => {
    const tableData: unknown = books.map((Book: Book) => ({
      userData: Book.user.firstName + " " + Book.user.lastName,
      phone: Book.user.phone,
      room: (
        <Link href={`/room/${Book.villa}`}>
          <Button size={"sm"} variant={"main"}>
            مشاهده
          </Button>
        </Link>
      ),
      register: (
        <div>
          <p>{Book.date.from}</p>
          <p>{Book.date.to}</p>
        </div>
      ),
      price: Book.price,
    }));
    setData(tableData as Book[]);
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
