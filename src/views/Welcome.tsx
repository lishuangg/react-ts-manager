import storage from "@/utils/storage";
import { Button } from "antd";

export default function Welcome() {
  const handleClick = (type: number) => {
    if(type === 1) {
      storage.set("test", "test");
      storage.set("test2", { name: "test" , age: 18 });
    }else if(type === 2) {
      console.log(storage.get("test"));
      console.log(storage.get("test2"));
    }else if(type === 3) {
      storage.remove("test");
    }else if(type === 4) {
      storage.clear();
    }
  };
  return (
    <div>
      <h1>Welcome</h1>
      <p>
        <Button onClick={() => handleClick(1)}>写入值</Button>
        <Button onClick={() => handleClick(2)}>读取值</Button>
        <Button onClick={() => handleClick(3)}>删除</Button>
        <Button onClick={() => handleClick(4)}>清空</Button>
      </p>
    </div>
  );
}