import { Button } from "@/src/components/shadcn/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/src/components/shadcn/ui/dialog";
import { book } from "@/src/types/Auth.types";
import { reserveModalColumns } from "@/src/utils/dataTableColumns";
import { convertToJalali } from "@/src/utils/utils";
import { useEffect, useState } from "react";
import DataTable  from "react-data-table-component";
import { FaRegTrashCan } from "react-icons/fa6";



const ReserveModal = ({ booked }: { booked: book[] }) => { 
  const [data, setData] = useState([]);
  console.log(booked);

  useEffect(() => {
    if (booked.length) {
      const tableData = booked.map((book) => ({
        reserveBy: book.user.firstName + " " + book.user.lastName,
        price: Number(book.price).toLocaleString(),
        from: book.date.from,
        to: book.date.to,
        count: book.guestNumber,
        register: convertToJalali(book.createdAt.slice(0, 10)),
      }));
      setData(tableData as any);
    }
  }, [booked]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="mt-4 flex w-full justify-center gap-2 px-4 text-xs xl:!px-8"
          variant={"main"}
        >
          <FaRegTrashCan />
          آمار رزرو ها
        </Button>
      </DialogTrigger>
      <DialogContent className="w-full max-w-full sm:!max-w-[80%]">
        <DataTable
          columns={reserveModalColumns as any}
          data={data}
          progressComponent={"...."}
          pagination
        />
      </DialogContent>
    </Dialog>
  );
};

export default ReserveModal;
