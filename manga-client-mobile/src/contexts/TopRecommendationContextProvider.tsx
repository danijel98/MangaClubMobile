import React, { FC, createContext, useState, useContext } from "react";

import { StorySpecialCategory } from "../models";

import { AxiosContext } from "./AxiosContextProvider";

interface ITopRecommendationContext {
  topTenStories: StorySpecialCategory[];
  getTopTenStories: () => void;
}

const TopRecommendationContext = createContext({} as ITopRecommendationContext);

interface TopRecommendationContextProps {
  children: React.ReactNode;
}

const TopRecommendationContextProvider: FC<TopRecommendationContextProps> = (
  props
) => {
  const [topTenStories, setTopTenStories] = useState<StorySpecialCategory[]>(
    []
  );
  const { backend } = useContext(AxiosContext);

  const getTopTenStories = function () {
    backend.get("/api/mangas/special-categories/1").then((res) => {
      if (res && res.data) {
        setTopTenStories(res.data);
      }
    });
  };

  const providerValue = {
    topTenStories,
    getTopTenStories,
  };

  return (
    <TopRecommendationContext.Provider value={providerValue}>
      {props.children}
    </TopRecommendationContext.Provider>
  );
};

export { TopRecommendationContext, TopRecommendationContextProvider };
