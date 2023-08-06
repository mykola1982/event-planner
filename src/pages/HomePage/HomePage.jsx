import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";

import * as eventsAPI from "../../services/events-API";

import { CategoryDropdown } from "components/CategoryDropdown";
import { FilterDropdown } from "components/FilterDropdown";
import { AddNewButtonEvent } from "components/AddNewButtonEvent";
import { MainContainer } from "components/MainContainer";
import { ButtonSection } from "./HomePage.styled";
import { EventsList } from "components/EventsList";

const HomePage = () => {
  const [events, setEvents] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");

  const location = useLocation();

  useEffect(() => {
    async function getAllEvents() {
      try {
        setIsLoading(true);
        const data = await eventsAPI.fetchAllEventsAPI();
        setEvents(data);
      } catch (error) {
        toast.error(`Something went wrong. Try again...`);
      } finally {
        setIsLoading(false);
      }
    }
    getAllEvents();
  }, []);

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

      <section>
        {events && <EventsList events={events} location={location} />}
      </section>
    </MainContainer>
  );
};

export default HomePage;
