import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/src/components/shadcn/ui/dialog";
import { FaShareAlt } from "react-icons/fa";
const ShareModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild></DialogTrigger>
      <div className="flex cursor-pointer items-center rounded-full bg-customYellow p-2 text-black">
        <FaShareAlt />
      </div>
      <DialogContent className="sm:!max-w-[425px] w-full max-w-full">
        <p>برای ارسال این صفحه به دوستانت، کلیک کن</p>
      </DialogContent>
    </Dialog>
  );
};

export default ShareModal;
