import { createContext, FC, useContext, useState } from "react";

import { AxiosContext } from "./AxiosContextProvider";

import { SpecialCategory } from "../models";

interface ISpecialCategoryContext {
  specialCategories: {
    content: SpecialCategory[];
    totalPages: number;
    totalElements: number;
  };
  getSpecialCategories: () => Promise<any>;
  hasMore: boolean;
}

const SpecialCategoryContext = createContext({} as ISpecialCategoryContext);

interface SpecialCategoryContextProps {
  children: React.ReactNode;
}

const SpecialCategoryContextProvider: FC<SpecialCategoryContextProps> = (
  props
) => {
  const [hasMore, setHasMore] = useState(true);

  const [specialCategories, setSpecialCategories] = useState({
    content: [] as SpecialCategory[],
    totalPages: 0,
    totalElements: 0,
  });

  const [pageable, setPageable] = useState({
    page: 0,
    size: 5,
  });

  const { backend } = useContext(AxiosContext);

  const getSpecialCategories = async function () {
    if (!hasMore) {
      return;
    }

    if (pageable.page === 0) {
      await getData(pageable.page, pageable.size);
    } else {
      await getData(pageable.page + 1, pageable.size);
    }

    setHasMore(doesHaveMore);

    setPageable({ ...pageable, page: pageable.page + 1 });
  };

  const getData = async (page: number, size: number) => {
    backend
      .get(`/api/mangas/special-categories?page=${page}&size=${size}`)
      .then((res) => {
        if (page === 0) {
          setSpecialCategories({
            content: res.data.content,
            totalElements: res.data.totalElements,
            totalPages: res.data.totalPages,
          });
        } else {
          setSpecialCategories({
            content: [...specialCategories.content, ...res.data.content],
            totalElements: res.data.totalElements,
            totalPages: res.data.totalPages,
          });
        }
      });
  };

  const doesHaveMore = () => {
    return specialCategories.totalPages !== pageable.page + 2;
  };

  const providerValue = {
    specialCategories,
    hasMore,
    getSpecialCategories,
  };

  return (
    <SpecialCategoryContext.Provider value={providerValue}>
      {props.children}
    </SpecialCategoryContext.Provider>
  );
};

export { SpecialCategoryContextProvider, SpecialCategoryContext };
