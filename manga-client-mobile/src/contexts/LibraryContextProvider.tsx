import { createContext, FC, useContext, useState } from "react";

import { Library } from "../models";

import { AxiosContext } from "./AxiosContextProvider";

interface ILibraryContext {
  library: Library;
  getLibrary: () => void;
}

const LibraryContext = createContext({} as ILibraryContext);

interface LibraryContextProps {
  children: React.ReactNode;
}
const LibraryContextProvider: FC<LibraryContextProps> = (props) => {
  const [library, setLibrary] = useState<Library>({ stories: [] });

  const { backend } = useContext(AxiosContext);

  const getLibrary = () => {
    backend.get("/api/mangas/library").then((res) => setLibrary(res.data));
  };

  const providerValue = {
    library,
    getLibrary,
  };

  return (
    <LibraryContext.Provider value={providerValue}>
      {props.children}
    </LibraryContext.Provider>
  );
};

export { LibraryContext, LibraryContextProvider };
