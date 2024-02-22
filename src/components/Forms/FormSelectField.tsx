"use client";

import { Select } from "antd";
import { Controller, useFormContext } from "react-hook-form";

type SelectOptions = {
  label: string;
  value: string;
};

type SelectFieldProps = {
  options: SelectOptions[];
  name: string;
  size?: "large" | "small";
  value?: string | string[] | undefined;
  placeholder?: string;
  label?: string;
  defaultValue?: SelectOptions;
};

const FormSelectField = ({
  name,
  size,
  value,
  options,
  placeholder,
  label,
}: SelectFieldProps) => {
  const { control } = useFormContext();
  return (
    <>
      {label ? <p style={{ marginBottom: "4px" }}>{label}</p> : null}
      <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange } }) => (
          <Select
            onChange={onChange}
            options={options}
            value={value}
            size={size}
            placeholder={placeholder}
            style={{ width: "100%" }}
          />
        )}
      />
    </>
  );
};

export default FormSelectField;
