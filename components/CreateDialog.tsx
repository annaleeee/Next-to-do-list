"use client";

import { FC, PropsWithChildren, useEffect } from "react";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { z, ZodTypeAny } from "zod";
import { ControllerRenderProps, useForm } from "react-hook-form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { createProject } from "@/app/actions";
import { DialogProps } from "@radix-ui/react-dialog";
import { zodResolver } from "@hookform/resolvers/zod";

const formFields = {
  title: "프로젝트명",
  description: "설명",
  date: "날짜",
} as const;
const formFieldsKeys = Object.keys(formFields) as Array<
  keyof typeof formFields
>;

const formSchema = z.object<Record<keyof typeof formFields, ZodTypeAny>>({
  title: z
    .string()
    .min(1, "최소 1글자 이상입니다.")
    .max(20, "최대 20글자입니다."),
  description: z
    .string()
    .min(1, "최소 1글자 이상입니다.")
    .max(500, "최대 500글자입니다."),
  date: z.coerce
    .date()
    .min(new Date(Date.now()), "지난 날짜는 선택할 수 없습니다."),
});

const CreateDialog: FC<DialogProps> = ({ children, open }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      title: "",
      description: "",
      date: new Date().toLocaleDateString("fr-CA"),
    },
  });

  useEffect(() => {
    form.reset();
  }, [open]);

  const getInput = (
    field: ControllerRenderProps<
      z.infer<typeof formSchema>,
      "title" | "description" | "date"
    >,
  ) => {
    const fields: Record<
      keyof typeof formFields,
      "text" | "textarea" | "date"
    > = {
      title: "text",
      description: "textarea",
      date: "date",
    };
    const fieldType = fields[field.name];
    if (fieldType === "text") return <Input {...field} />;
    if (fieldType === "textarea") return <Textarea rows={10} {...field} />;
    return <Input type="date" {...field} />;
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <Form {...form}>
          <form action={createProject}>
            {formFieldsKeys.map((fieldKey) => (
              <FormField
                key={fieldKey}
                control={form.control}
                name={fieldKey}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{formFields[field.name]}</FormLabel>
                    <FormControl>{getInput(field)}</FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
            <Button type="submit" className="mt-2 float-right">
              생성
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateDialog;
