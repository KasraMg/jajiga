import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/src/components/shadcn/ui/dialog";
import { MdOutlineEdit } from "react-icons/md";
const EditModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <MdOutlineEdit className="cursor-pointer" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="py-3 text-center">
            تماس با پشتیبانی
          </DialogTitle>
        </DialogHeader>
        <p className="font-vazir text-center text-sm font-light leading-7 text-[#404040]">
          ساعات کار پشتیبانی تلفنی از<strong> 8 صبح</strong> الی{" "}
          <strong>12 شب</strong> می‌باشد. شماره تماس:{" "}
        </p>
        <section className="flex justify-center gap-3 pt-4 text-yellow-300">
          <p>09046417084</p>
          <p>09374816998</p>
        </section>
      </DialogContent>
    </Dialog>
  );
};

export default EditModal;
