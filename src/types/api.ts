export interface Result<T = any> {
  code: number;
  data: T;
  msg: string;
}

export namespace Login {
  export interface params {
    userName: string;
    userPwd: string;
  }
}

export namespace User {
  export interface UserItem {
    _id: string;
    userId: number;
    userImg: string;
    userName: string;
    userEmail: string;
    mobile: string;
    deptId: string;
    deptName: string;
    job: string;
    state: number;
    role: number;
    createId: number;
    roleList: string;
  }
}
