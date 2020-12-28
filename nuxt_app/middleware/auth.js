/*
 * @Description:全局守卫中间件，可在nuxt.config.js中配置
 * @Author: zhaoyp
 * @Date: 2020-12-28 14:28:48
 * @LastEditTime: 2020-12-28 14:47:48
 * @LastEditors:
 */
export default ({
  store,
  route,
  redirect,
  params,
  query,
  req,
  res
}) => {
  console.log('中间件')
}
