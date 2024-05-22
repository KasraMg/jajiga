 
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
          <DialogTitle className="text-center py-3">
            تماس با پشتیبانی
          </DialogTitle>
        </DialogHeader>
        <p className="text-sm text-center leading-7 text-[#404040] font-vazir font-light ">
            ساعات کار پشتیبانی تلفنی از<strong> 8 صبح</strong> الی{" "}
            <strong>12 شب</strong> می‌باشد. شماره تماس:{" "}
          </p>
          <section className="flex justify-center gap-3 text-yellow-300 pt-4">
            <p>09046417084</p>
            <p>09374816998</p>
          </section>
      </DialogContent>
    </Dialog>
  );
};

export default EditModal;
