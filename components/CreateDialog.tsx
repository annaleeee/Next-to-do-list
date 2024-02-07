"use client";

import { FC, PropsWithChildren } from "react";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { Form } from "./ui/form";
import z from "zod";
import { useForm } from "react-hook-form";

const formSchema = z.object({
  title: z
    .string()
    .min(1, "최소 1글자 이상입니다.")
    .max(20, "최대 20글자입니다."),
  description: z
    .string()
    .min(1, "최소 1글자 이상입니다.")
    .max(500, "최대 500글자입니다."),
  date: z.date().min(new Date(Date.now()), "지난 날짜는 선택할 수 없습니다."),
});

const CreateDialog: FC<PropsWithChildren> = ({ children }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    mode: "onChange",
    defaultValues: {
      title: "",
      description: "",
      date: undefined,
    },
  });

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <Form {...form}>
          <form></form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateDialog;
