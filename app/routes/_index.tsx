import type { MetaFunction } from "@remix-run/node";
import "../styles/index.less";

export const meta: MetaFunction = () => {
  return [{ title: "Game Log" }, { name: "description", content: "Welcome to Game-log!" }];
};

export default function Index() {
  return (
    <div>
      <div>
        <header>
          <h1 className='hello'>Hello World!</h1>
        </header>
      </div>
    </div>
  );
}
