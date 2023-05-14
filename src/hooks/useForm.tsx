import { useState } from "react";

export const useForm = (initialObj = {email:"", password: ""}) => {
  const [form, setForm] = useState(initialObj);

  const changed = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  return {
    form,
    changed,
  };
};
