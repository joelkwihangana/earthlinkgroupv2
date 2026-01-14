import React, { useEffect } from "react";

const LanguageSwitcher = () => {
  const changeLanguage = (lang) => {
    const select = document.querySelector(".goog-te-combo");
    if (select) {
      select.value = lang;
      select.dispatchEvent(new Event("change"));
      localStorage.setItem("lang", lang);
    }
  };

  useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    if (savedLang) {
      const select = document.querySelector(".goog-te-combo");
      if (select) {
        select.value = savedLang;
        select.dispatchEvent(new Event("change"));
      }
    }
  }, []);

  return (
    <select onChange={(e) => changeLanguage(e.target.value)}>
      <option value="en">English</option>
      <option value="fr">Français</option>
      <option value="pt">Português</option>
    </select>
  );
};

export default LanguageSwitcher;