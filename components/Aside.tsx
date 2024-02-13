'use Client';
import { useState, FC } from "react";
import ProjectList from "./ProjectList";
import { Button } from "./ui/button";
import NewProjectDialog from './NewProjectDialog';
import { Project } from "@/app/page";

type AsideProps = {
  open: boolean;
  onCancel?: () => void;
  setSelected: (value: Project) => void;
};

const Aside: FC<AsideProps> = ({ onCancel, setSelected }) => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleOpenDialog = () => {  
    setDialogOpen(true);
  };
  const handleCloseDialog = () => {
    setDialogOpen(false);
    if (onCancel) {
      onCancel();
    }
  }

  return (
    <aside className="bg-gray-800">
      <nav className="pl-7">
        <ul className="pt-12">

          <li>
            <h1 className="font-bold xl:text-xl">이안나님의 프로젝트</h1>
          </li>
          <li className="mt-8">
            <NewProjectDialog open={dialogOpen} onCancel={handleCloseDialog}>
              <Button
                className="max-xl:w-5/6 max-xl:text-xs"
                onClick={handleOpenDialog}
              >
                + 새 프로젝트 생성하기
              </Button>
            </NewProjectDialog>
          </li>
        </ul>
      </nav>
      <ProjectList
        projects={[
          {
            title: "project 1",
            description: "this is project 1",
            dueDate: new Date(),
          },
          {
            title: "project 2",
            description: "this is project 2",
            dueDate: new Date(),
          },
          {
            title: "project 3",
            description: "this is project 3",
            dueDate: new Date(),
          },
        ]}
        setSelected={setSelected}
      />
    </aside>
  );
}

export default Aside;
