"use client";

import { FC, PropsWithChildren } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "./ui/dialog";

const CreateDialog: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogHeader></DialogHeader>
      <DialogContent></DialogContent>
    </Dialog>
  );
};

export default CreateDialog;
