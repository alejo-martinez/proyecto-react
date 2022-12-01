import {useState} from 'react';

const useLocalStorage = (key, valorInicial) => {
   const [storedValue, setStoredValue] = useState(() => {
    try {
        const item = localStorage.getItem(key)
        return item? JSON.parse(item) : valorInicial
    } catch (error) {
        return valorInicial
    }
   })
   const setValue = (valor) => {
    try {
        setStoredValue(valor)
        localStorage.setItem(key, JSON.stringify(valor))
    } catch (error) {
        console.log(error);
    }
   }
   return [storedValue, setValue]
}

export default useLocalStorage;
