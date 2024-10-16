import {
  Alert as AlertComponent,
  AlertDescription,
  AlertTitle,
} from "@/src/components/shadcn/ui/alert";
import { AlertCircle } from "lucide-react";
import { FC } from "react";

type AlertProps = {
  title: string;
  children: React.ReactNode;
};

const Alert: FC<AlertProps> = ({ title, children }) => {
  return (
    <AlertComponent variant="destructive">
      <div className="flex items-center gap-2">
        <AlertCircle className="h-4 w-4" />
      <AlertTitle>{title}</AlertTitle>
      </div>
      <AlertDescription>{children}</AlertDescription>
    </AlertComponent>
  );
};

export default Alert;
