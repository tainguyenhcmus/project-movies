import { createContext, useContext, useEffect, useState } from 'react';


const Context = createContext({} as any);
function AppProvider(props: any) {
  const appContext = useApp();
  const [searchGlobalInput, setSearchGlobalInput] = useState('');
  const [toSearch, setToSearch] = useState(false);

  const handleInputSearchGlobal = (value: string) => {
    setSearchGlobalInput(value)
  }

  const triggerSearch = (value: boolean) => {
    setToSearch(value);
  }


  return <Context.Provider
    value={{
      handleInputSearchGlobal,
      searchGlobalInput,
      triggerSearch,
      toSearch
    }}>
    {props.children}
  </Context.Provider>
}


const useApp = () => {
  const app = useContext(Context)
  return app
}

export { AppProvider, useApp }