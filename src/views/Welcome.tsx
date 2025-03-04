import storage from "@/utils/storage";
import { Button } from "antd";
import {formatMoney, toLocalDate, formatDate} from "@/utils/index";

export default function Welcome() {
  const handleClick = () => {
    // const money = formatMoney('142353654.224');
    // console.log(money);
    // let data = toLocalDate(new Date(), 'yyyy-MM-dd');
    // console.log(data);
    let data = formatDate(new Date(), 'yyyy-MM-dd');
    console.log(data);
  }
  const handleStorage= (type: number) => {
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
        <Button onClick={() => handleClick()}>点击事件</Button>
        <Button onClick={() => handleStorage(1)}>写入值</Button>
        <Button onClick={() => handleStorage(2)}>读取值</Button>
        <Button onClick={() => handleStorage(3)}>删除</Button>
        <Button onClick={() => handleStorage(4)}>清空</Button>
      </p>
    </div>
  );
}