import { createContext, FC, useContext, useState } from "react";

import { Story } from "../models";

import { AxiosContext } from "./AxiosContextProvider";

interface IStoryContext {
  story: Story;
  getStory: (id: number) => Promise<unknown>;
}

const StoryContext = createContext({} as IStoryContext);

interface StoryContextProps {
  children: React.ReactNode;
}

const StoryContextProvider: FC<StoryContextProps> = (props) => {
  const [story, setStory] = useState<Story>({});

  const { backend } = useContext(AxiosContext);

  const getStory = (id: number) => {
    return new Promise((resolve) => {
      backend.get(`/api/mangas/stories/${id}`).then((res) => {
        setStory(res.data);

        resolve(null);
      });
    });
  };

  const providerValue = {
    story,
    getStory,
  };

  return (
    <StoryContext.Provider value={providerValue}>
      {props.children}
    </StoryContext.Provider>
  );
};

export { StoryContext, StoryContextProvider };
