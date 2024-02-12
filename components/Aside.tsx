import { FC } from "react";
import ProjectList from "./ProjectList";
import { Button } from "./ui/button";
import NewProjectDialog from './NewProjectDialog';

type AsideProps = {
  open: boolean;
  onCancel?: () => void;
};

const Aside: React.FC<AsideProps> = ({ open }) => {
  return (
    <aside className="bg-gray-50">
      <nav className="pl-7">
        <ul className="pt-12">

          <li>
            <h1 className="font-bold text-xl">이안나님의 프로젝트</h1>
          </li>
          <li className="mt-8">
            <NewProjectDialog open={open}>
              <Button>+새 프로젝트 생성하기</Button>
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
