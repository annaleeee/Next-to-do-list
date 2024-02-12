import { Button } from "./ui/button";
import NewProjectDialog from './NewProjectDialog';

type AsideProps = {
  open: boolean;
  onCancel?: () => void;
};

const Aside: React.FC<AsideProps> = ({ open }) => {
  return (
    <aside>
      <nav>
        <ul className="min-h-screen pl-7 pt-12 bg-border">
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
    </aside>
  );
}

export default Aside;