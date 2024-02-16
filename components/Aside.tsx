"use Client";
import { useState, FC, Dispatch, SetStateAction } from "react";
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
  list: Project[];
  setList: Dispatch<SetStateAction<Project[]>>;
  setHandleDialog: (value: boolean) => void;
};

const Aside: FC<AsideProps> = ({
  onCancel,
  setSelected,
  list,
  setList,
  setHandleDialog,
}) => {
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
    <aside>
      <nav className="pl-7">
        <ul className="pt-12">
          <li className="flex items-center h-10">
            <Input
              maxLength={11}
              disabled={!isEditMode}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border-t-0 border-x-0 border-b-1 border-b-black dark:border-b-white w-2/3 ml-0 text-lg bg-transparent disabled:opacity-100 disabled:border-transparent disabled:cursor-default focus-visible:ring-transparent focus:outline-none rounded-none focus-visible:ring-offset-0"
            />
            <Pen
              size={20}
              onClick={editTitle}
              className="hover:cursor-pointer"
            />
          </li>
          <li className="mt-8">
            <NewProjectDialog
              open={dialogOpen}
              onCancel={handleCloseDialog}
              setList={setList}
              setHandleDialog={setHandleDialog}
            >
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
      <ProjectList projects={list} setSelected={setSelected} />
    </aside>
  );
};

export default Aside;
