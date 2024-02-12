import ProjectList from "./ProjectList";
import { Button } from "./ui/button";

export default function Aside() {
  return (
    <aside className="bg-gray-50">
      <nav className="pl-7">
        <ul className="pt-12">
          <li>
            <h1 className="font-bold text-xl">이안나님의 프로젝트</h1>
          </li>
          <li className="mt-8">
            <Button>+새 프로젝트 생성하기</Button>
          </li>
        </ul>
      </nav>
      <ProjectList projects={["project 1", "project2", "project3"]} />
    </aside>
  );
}
