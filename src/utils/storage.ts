/**
 * localStorage封装
 */
export default {
  /**
   * storage存储
   * @param key {string} 参数名称
   * @param value {any} 写入值
   */
  set(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  },
  /**
   * sttorage获取
   * @param key {string} 参数名称
   * @returns
   */
  get(key: string) {
    const value = localStorage.getItem(key);
    if (!value) return '';
    try {
      return JSON.parse(value);
    } catch (e) {
      return value;
    }
  },
  /**
   * sttorage删除
   * @param key {string} 参数名称
   * @returns
   */
  remove(key: string) {
    localStorage.removeItem(key);
  },
  /**
   * 清空storage
   */
  clear() {
    localStorage.clear();
  }
};
