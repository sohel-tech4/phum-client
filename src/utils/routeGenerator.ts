import { ReactNode } from "react";

type TRoute = {
  path: string;
  element: ReactNode;
};

type TRouteGenerator = {
  name: string;
  path?: string;
  element?: ReactNode;
  children?: TRouteGenerator[];
};

export const routeGenerator = (items: TRouteGenerator[]) => {
  const routes = items.reduce((acc: TRoute[], item) => {
    if (item.path && item.element) {
      acc.push({
        path: item.path,
        element: item.element,
      });
    }

    if (item.children) {
      item.children.forEach((child) => {
        acc.push({
          path: child.path!,
          element: child.element,
        });
      });
    }
    return acc;
  }, []);

  return routes;
};
