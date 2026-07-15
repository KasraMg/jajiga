import React, { FC } from "react";
interface TextareaProps {
  value: string;
  setValue: any;
  maxLength: number;
  className?: string;
  placeholder?: string; 
  buttonDisableFun?:()=>any
}

const Textarea: FC<TextareaProps> = ({
  maxLength,
  value,
  setValue,
  className,
  placeholder,
  buttonDisableFun 
}) => {
  return (
    <div className={`relative`}>
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={(event) =>{ 
          if (buttonDisableFun) buttonDisableFun()
           setValue(event.target.value)}}
        className={`${className ? className : ""} p-2 text-sm ouline-none w-full rounded-lg border border-solid border-gray-300`}
        maxLength={maxLength}
        cols={30}
        rows={5} 
      ></textarea>
      <span className="absolute bottom-2 left-3 text-sm text-[#404040]">
        {value?.length ? maxLength - value?.length : maxLength}
      </span>
    </div>
  );
};

export default Textarea;
