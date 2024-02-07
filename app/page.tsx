"use client";
import Aside from "@/components/Aside";
import CreateDialog from "@/components/CreateDialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isDialog, setIsDialog] = useState(false);

  return (
    <main className="grid grid-cols-6 min-h-screen">
      <Aside isDialog={isDialog} setIsDialog={setIsDialog} />
      <section className="col-start-2 col-span-5 grid place-items-center">
        <article>
          <div className="flex flex-col justify-center items-center gap-3">
            <Image alt="logo" src="/logo.png" width={80} height={80} />
            <h1 className="text-xl font-bold">선택된 프로젝트가 없습니다.</h1>
            <span className="font-bold text-gray-500">
              프로젝트를 선택하시거나 생성하세요.
            </span>
            <CreateDialog open={isDialog}>
              <Button className="mt-2" onClick={() => setIsDialog(!isDialog)}>
                + 새 프로젝트 생성하기
              </Button>
            </CreateDialog>
          </div>
        </article>
      </section>
    </main>
  );
}
