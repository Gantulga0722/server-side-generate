import Image from "next/image";
import { Inter } from "next/font/google";
import Page from "./contact";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <div className="flex">
        <Page />
      </div>
    </div>
  );
}
