"use client"; 
import { useState } from 'react';

import Aside from "@/components/Aside";
import NewProjectDialog from "@/components/NewProjectDialog";
import { Button } from '@/components/ui/button';

export default function Home() {
  const [handleDialog, setHandleDialog] = useState(false);

  function handleButtonClick() {
    setHandleDialog(true);
  }

  function handleCloseDialog() {
    setHandleDialog(false);
  }

  return (
    <>
      <main className="grid grid-cols-6 min-h-screen">
        <Aside open={handleDialog} onCancel={handleCloseDialog} />
        <section className="col-start-2 col-span-5">
          <NewProjectDialog open={handleDialog} onCancel={handleCloseDialog}>
            <Button onClick={handleButtonClick}>
              + 새 프로젝트 생성하기
            </Button>
          </NewProjectDialog>
        </section>
      </main>
    </>
  );
}
