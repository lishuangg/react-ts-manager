import resso from 'resso';
import { User } from '@/types/api';

const store = resso({
  token: '',
  userInfo: {
    userEmail: '',
    userName: '',
  },
  updateUserInfo: (userInfo: User.UserItem) => {
    store.userInfo = userInfo;
  }
});

export default store;

// export const store = resso({
//   count: 0,
//   inc: () => {
//     // 1.
//     store.count = store.count + 1;
//     // 2.
//     // store('count', (prev) => prev + 1);
//   }
// })
