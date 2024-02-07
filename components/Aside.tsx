import { FC } from "react";
import { Button } from "./ui/button";
import CreateDialog from "./CreateDialog";

type Props = {
  isDialog: boolean;
  setIsDialog: (value: boolean) => void;
};

const Aside: FC<Props> = ({ isDialog, setIsDialog }) => {
  return (
    <aside>
      <nav>
        <ul className="min-h-screen pl-7 pt-12 bg-gray-50">
          <li>
            <h1 className="font-bold text-xl">이안나님의 프로젝트</h1>
          </li>
          <li className="mt-8">
            <CreateDialog open={isDialog}>
              <Button onClick={() => setIsDialog(!isDialog)}>
                +새 프로젝트 생성하기
              </Button>
            </CreateDialog>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Aside;
