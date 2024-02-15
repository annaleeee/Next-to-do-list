"use client";
import { useState, useEffect } from "react";
import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { cn } from "@/lib/utils";

type ButtonProps = {
  open: boolean;
  onClick?: () => void; // 선택적 프로퍼티
  onCancel?: () => void;
  children?: React.ReactNode;
};

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const formSchema = z.object({
  title: z.string().min(2, {
    message: "유효한 값을 입력하세요.",
  }),
  description: z.string().min(2, {
    message: "유효한 값을 입력하세요.",
  }),
  dueDate: z.date().refine((value) => !isNaN(value.getTime()), {
    message: "날짜를 선택해주세요.",
  }),
});

const NewProjectDialog: React.FC<ButtonProps & { onCancel?: () => void }> = ({
  onCancel,
  children,
  open,
}) => {
  const [date, setDate] = React.useState<Date | undefined>(undefined);
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    setDialogOpen(open);
  }, [open]);

  const handleCancelButton = () => {
    if (onCancel) {
      onCancel();
    }
    form.reset();
  };
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      dueDate: undefined,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values); // values 값 확인하기
  }

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <DialogHeader>
              <DialogTitle>New Project</DialogTitle>
              <DialogDescription>
                새로운 프로젝트를 생성해보세요.
              </DialogDescription>
            </DialogHeader>
            <div className="grid">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project Title</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Descrition</FormLabel>
                    <FormControl>
                      <Textarea {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="dueDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Due Date</FormLabel>
                    <FormControl>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-[280px] justify-start text-left font-normal",
                              !date && "text-muted-foreground",
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? (
                              format(date, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                            onDayClick={(date) => {
                              form.setValue("dueDate", date);
                            }}
                          />
                        </PopoverContent>
                      </Popover>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <DialogFooter>
              <DialogTrigger asChild>
                <Button onClick={handleCancelButton}>Cancel</Button>
              </DialogTrigger>
              <Button type="submit">Save</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default NewProjectDialog;
