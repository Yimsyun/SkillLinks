import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import SpaceLayout from "@/components/templates/SpaceLayout";
import Service from "@/pages/Service";
import Home from "@/pages/Home";
import Layout from "@/components/templates/Layout";
import Category from "@/pages/Category";
import category from "@/data/category.json";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route
        path="/service/:serviceId"
        element={<SpaceLayout />}
        handle={{
          crumb: (match) => "service상세",
        }}
      >
        {/* /service/:serviceId */}
        <Route index exact element={<Service />} />
      </Route>
      <Route
        path="/category/:mainCategoryId"
        element={<SpaceLayout />}
        handle={{
          crumb: (match) =>
            category.find(
              ({ categoryId }) => categoryId === match?.params.mainCategoryId
            )?.label ?? "",
        }}
      >
        {/* /category/:mainCategoryId/ */}
        <Route
          index
          exact
          element={<Category pageName="카테고리 페이지이름" />}
        />
        {/* /category/:mainCategoryId/:subCategoryId */}
        <Route
          path=":subCategoryId"
          element={<Category pageName="카테고리 페이지이름" />}
          handle={{
            crumb: (match) => {
              const mainCategory = category.find(({ categoryId }) => {
                return categoryId === match?.params.mainCategoryId;
              });
              if (!mainCategory) return "";

              console.log(mainCategory);
              const subCategories = [];
              for (let i = 0; i < mainCategory.subCategory.length; i++) {
                subCategories.push(...mainCategory.subCategory[i].category);
              }
              // optional chaining
              // null 병합 연산자
              // array 관련 methods (find, push)
              // string 관련 methods (slice)
              return (
                subCategories.find(
                  ({ categoryId }) => categoryId === match?.params.subCategoryId
                )?.label ?? ""
              );
            },
          }}
        />
      </Route>
    </Route>
  )
);

export default router;
