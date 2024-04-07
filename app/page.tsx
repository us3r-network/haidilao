/* eslint-disable @next/next/no-img-element */

import List from "./components/list";
import Check from "./components/check";
import Header from "./components/header";

export default function Home() {
  return (
    <main className="bg-[#D92622] w-full min-h-screen">
      <Header />
      <div className="flex items-center justify-center">
        <Check />
      </div>
      <div className="flex  justify-center">
        <List />
      </div>
    </main>
  );
}
