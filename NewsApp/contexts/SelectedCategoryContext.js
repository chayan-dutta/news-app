import { createContext, useState } from "react";

export const SelectedCategory = createContext({
  userSelectedcategories: [],
  setCategories: () => {},
});

export default function SelectedCategoryContextProvider({ children }) {
  const [categories, setCategories] = useState([]);

  function addingCategory() {}

  const value = {
    userSelectedcategories: categories,
    setCategories: addingCategory,
  };

  return (
    <SelectedCategory.Provider value={value}>
      {children}
    </SelectedCategory.Provider>
  );
}
