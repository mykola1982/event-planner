import { useState } from "react";
import { useLocation } from "react-router-dom";

import { CategoryDropdown } from "components/CategoryDropdown";
import { FilterDropdown } from "components/FilterDropdown";
import { AddNewButtonEvent } from "components/AddNewButtonEvent";

import { MainContainer } from "components/MainContainer";

import { ButtonSection } from "./HomePage.styled";

import { eventsData } from "data/eventsData";

const HomePage = () => {
  const [events, setEvents] = useState(eventsData);

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");

  const location = useLocation();

  console.log(events);
  console.log(selectedCategory);
  console.log(selectedFilter);

  return (
    <MainContainer>
      <ButtonSection>
        <CategoryDropdown
          selected={selectedCategory}
          setSelected={setSelectedCategory}
        />

        <FilterDropdown
          selected={selectedFilter}
          setSelected={setSelectedFilter}
        />

        <AddNewButtonEvent location={location} />
      </ButtonSection>
    </MainContainer>
  );
};

export default HomePage;
