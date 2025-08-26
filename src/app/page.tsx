import Banner from "@/components/ui/bannerfolder";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
<>

<div className=" flex items-center mt-5 justify-center p-2"> 

<Banner/>
</div>
<div className="p-2">
<Button className="cursor-pointer" >click me</Button>

</div>
</>
  );
}
