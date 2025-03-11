
import styles from './index.module.less'
export default function Welcome() {
  return (
    <div className={styles.welcome}>
      <div className={styles.content}>
        <div className={styles.subTitle}>欢迎体验</div>
        <div className={styles.title}>React18管理系统</div>
        <div className={styles.desc}>react18+ReactRouter6.0+Antd5+Typescript5+vite</div>
      </div>
      <div className={styles.img}></div>
    </div>
  );
}
