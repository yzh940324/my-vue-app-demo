/**
 * 路由配置
 * @param basePath 基础路由
 * @param routerArr 路由数组对象
 */
export const routerConfig = (basePath: string, routerArr: string[]) => {
  return routerArr.map((router: string) => {
    return {
      path: `/${basePath}/${router}`,
      name: `/${basePath}/${router}`,
      component: () => import(`@/pages/${basePath}/${router}.vue`),
    };
  });
};
