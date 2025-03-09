// 给window对象扩展字段
declare interface window {
  app: string;
  getUser: () => { name: string; age: number };
  jQuery: () => void;
}

// 声明全局的方法&变量
declare function jQuery(selector: string): void;

declare let Dev: string;

declare interface String {
  getLen(): number;
}


// axios扩展属性 typing.d.ts文件