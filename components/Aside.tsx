import { Button } from "./ui/button";

export default function Aside() {
  return (
    <aside>
      <nav>
        <ul className="min-h-screen pl-7 pt-12 bg-sky-800">
          <li>
            <h1 className="font-bold text-xl">이안나님의 프로젝트</h1>
          </li>
          <li className="mt-8">
            <Button>+새 프로젝트 생성하기</Button>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
