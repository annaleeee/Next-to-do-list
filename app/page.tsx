"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";

import Aside from "@/components/Aside";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import NewProjectDialog from "@/components/NewProjectDialog";

export type Project = {
  title: number | string;
  description: string;
  dueDate: Date;
};

export default function Home() {
  const [selected, setSelected] = useState<Project>();

  const [handleDialog, setHandleDialog] = useState(false);

  function handleButtonClick() {
    setHandleDialog(true);
  }

  function handleCloseDialog() {
    setHandleDialog(false);
  }

  return (
    <main className="grid grid-cols-6 min-h-screen">
      <Aside setSelected={setSelected} open={handleDialog} onCancel={handleCloseDialog} />
      <section 
          className={cn(
          "col-start-2 col-span-5 grid",
          selected ? "p-10" : "place-items-center",
          )}
      >
      <article>
          {selected ? (
            <div>
              <h1 className="font-bold text-3xl">{selected.title}</h1>
              <p className="mt-3">{selected.description}</p>
              <span className="text-slate-500">
                date: {selected.dueDate.getDate()}
              </span>
            </div>
          ) : (
            <div className="flex flex-col justify-center items-center gap-3">
              <Image alt="logo" src="/logo.png" width={80} height={80} />
              <h1 className="text-xl font-bold">선택된 프로젝트가 없습니다.</h1>
              <span className="font-bold text-gray-500">
                프로젝트를 선택하시거나 생성하세요.
              </span>
              <NewProjectDialog open={handleDialog} onCancel={handleCloseDialog}>
                <Button onClick={handleButtonClick} className="mt-2">
                  + 새 프로젝트 생성하기
                </Button>
              </NewProjectDialog>
            </div>
          )}
        </article>
      </section>
    </main>
  );
}
