import Introduction from "@/components/Introduction";
import Landing from "@/components/Landing";
import Myworks from "@/components/Myworks";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      
      <Landing/>
      <Introduction/>
      <Myworks/>
    </div>
  );
}
