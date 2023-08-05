import { useState } from "react";

import { CategoryDropdown } from "components/CategoryDropdown";

import { FilterDropdown } from "components/FilterDropdown";
import { MainContainer } from "components/MainContainer";

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");

  return (
    <MainContainer>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <CategoryDropdown
          selected={selectedCategory}
          setSelected={setSelectedCategory}
        />

        <FilterDropdown
          selected={selectedFilter}
          setSelected={setSelectedFilter}
        />

        <button> додати </button>
      </div>
    </MainContainer>
  );
};

export default HomePage;
