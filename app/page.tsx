"use client"; 
import { useState } from 'react';

import NewProjectDialog from "@/components/NewProjectDialog";
import { Button } from '@/components/ui/button';

export default function Home() {
  const [handleDialog, setHandleDialog] = useState(false);

  function handleButtonClick() {
    setHandleDialog(true);
  }

  return (
    <>
      <NewProjectDialog open={handleDialog}>
          <Button onClick={handleButtonClick}>
            + 새 프로젝트 생성하기
          </Button>
      </NewProjectDialog>
    </>
  );
}
