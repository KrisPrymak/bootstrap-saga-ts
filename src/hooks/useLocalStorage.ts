const useLocalStorage = (key: string) => {
  const storage = localStorage.getItem(key);
  if (storage && storage !== 'undefined') {
    return JSON.parse(storage);
  }
};

export default useLocalStorage;