import { createRoot } from 'react-dom/client';
import Loading from './loading';
import './loading.less';

let count = 0;

// export const showLoading = () => {
//   if (count === 0) {
//     const loading = document.createElement('div');
//     loading.setAttribute('id', 'loading');
//     document.body.appendChild(loading);
//     createRoot(loading).render(<Loading tip="Loading" />);
//   }
//   count++;
// };

// export const hideLoading = () => {
//     console.log('count', count);
//   if (count <= 0) return;
//   count--;
//   if(count === 0) {
//     const loading = document.getElementById('loading') as HTMLElement;
//     document.body.removeChild(loading);
//   }
// };

export const showLoading = () => {
  if (count === 0) {
    const loading = document.getElementById('loading') as HTMLElement;
    loading?.style.setProperty('display', 'flex');
  }
  count++;
};

export const hideLoading = () => {
  if (count <= 0) return;
  count--;
  if (count === 0) {
    const loading = document.getElementById('loading') as HTMLElement;
    loading?.style.setProperty('display', 'none');
  }
};
