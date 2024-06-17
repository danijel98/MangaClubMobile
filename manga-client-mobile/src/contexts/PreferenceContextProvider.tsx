import { createContext, FC, useContext, useState } from "react";

import { PreferenceStory } from "../models";

import { AxiosContext } from "./AxiosContextProvider";

interface IPreferenceContext {
  selectedPreferences: PreferenceStory[];
  setSelectedPreferences: React.Dispatch<
    React.SetStateAction<PreferenceStory[]>
  >;
}

const PreferenceContext = createContext({} as IPreferenceContext);

interface PreferenceContextProps {
  children: React.ReactNode;
}
const PreferenceContextProvider: FC<PreferenceContextProps> = (props) => {
  const [selectedPreferences, setSelectedPreferences] = useState<
    PreferenceStory[]
  >([]);

  const { backend } = useContext(AxiosContext);

  const providerValue = { selectedPreferences, setSelectedPreferences };

  return (
    <PreferenceContext.Provider value={providerValue}>
      {props.children}
    </PreferenceContext.Provider>
  );
};

export { PreferenceContextProvider, PreferenceContext };
