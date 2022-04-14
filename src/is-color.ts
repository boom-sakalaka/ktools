/*
 * @Date: 2022-04-13 17:28:06
 * @LastEditTime: 2022-04-13 17:28:07
 * @FilePath: \rollup-pro\src\is-color.ts
 * @Description:
 */
/**
 * 判断字符串是否是十六进制的颜色值
 * @param value
 */
const isColor = function (value: string): boolean {
  return /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/.test(value);
};

export default isColor;
