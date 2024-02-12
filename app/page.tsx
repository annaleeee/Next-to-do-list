"use client";
import Aside from "@/components/Aside";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

export type Project = {
  title: number | string;
  description: string;
  dueDate: Date;
};

export default function Home() {
  const [selected, setSelected] = useState<Project>();

  return (
    <main className="grid grid-cols-6 min-h-screen">
      <Aside setSelected={setSelected} />
      <section className="col-start-2 col-span-5 grid place-items-center">
        <article>
          {selected ? (
            <div>
              <h1 className="">{selected.title}</h1>
              <p>{selected.description}</p>
              <span>{selected.dueDate.getDate()}</span>
            </div>
          ) : (
            <div className="flex flex-col justify-center items-center gap-3">
              <Image alt="logo" src="/logo.png" width={80} height={80} />
              <h1 className="text-xl font-bold">선택된 프로젝트가 없습니다.</h1>
              <span className="font-bold text-gray-500">
                프로젝트를 선택하시거나 생성하세요.
              </span>
              <Button className="mt-2">+ 새 프로젝트 생성하기</Button>
            </div>
          )}
        </article>
      </section>
    </main>
  );
}
