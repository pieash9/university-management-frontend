"use client";

import { Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";

type TextAreaProps = {
  name: string;
  label?: string;
  rows?: number;
  value?: string;
  placeholder?: string;
};

const FormTextArea = ({
  name,
  value,
  placeholder,
  label,
  rows,
}: TextAreaProps) => {
  const { control } = useFormContext();
  return (
    <div className={`flex flex-col  w-full`}>
      {label ? label : null}
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <Input.TextArea
            {...field}
            rows={rows}
            defaultValue={value ? value : field.value}
            placeholder={placeholder}
          />
        )}
      />
    </div>
  );
};

export default FormTextArea;
