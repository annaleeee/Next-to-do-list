"use Client";
import { useState, FC } from "react";
import ProjectList from "./ProjectList";
import { Button } from "./ui/button";
import NewProjectDialog from "./NewProjectDialog";
import { Project } from "@/app/page";
import { Pen } from "lucide-react";
import { Input } from "./ui/input";

type AsideProps = {
  open: boolean;
  onCancel?: () => void;
  setSelected: (value: Project) => void;
};

const Aside: FC<AsideProps> = ({ onCancel, setSelected }) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [title, setTitle] = useState("이안나님의 프로젝트");

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };
  const handleCloseDialog = () => {
    setDialogOpen(false);
    if (onCancel) {
      onCancel();
    }
  };
  const editTitle = () => setIsEditMode(!isEditMode);

  return (
    <aside className="bg-gray-800">
      <nav className="pl-7">
        <ul className="pt-12">
          <li className="flex gap-5 items-center h-10">
            <Input
              disabled={!isEditMode}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-2/3 ml-0 text-lg bg-transparent disabled:opacity-100 disabled:border-transparent disabled:cursor-default border-b-1 border-b-white focus-visible:ring-transparent focus:outline-none rounded-none focus-visible:ring-offset-0"
            />
            <Pen
              size={20}
              onClick={editTitle}
              className="hover:cursor-pointer"
            />
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
};

export default Aside;
