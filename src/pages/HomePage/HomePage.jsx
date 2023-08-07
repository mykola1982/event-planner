import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useMedia } from "react-use";
import { toast } from "react-toastify";

import * as eventsAPI from "../../services/events-API";

import { CategoryDropdown } from "components/CategoryDropdown";
import { FilterDropdown } from "components/FilterDropdown";
import { AddNewButtonEvent } from "components/AddNewButtonEvent";
import { MainContainer } from "components/MainContainer";
import { Section } from "components/Section";
import { EventsList } from "components/EventsList";
import { Loader } from "components/Loader";

import { ButtonSection, Title } from "./HomePage.styled";

const HomePage = () => {
  const isTableDevice = useMedia("(min-width: 768px) and (max-width: 1437px)");
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
      {isLoading && <Loader />}
      <Section>
        <ButtonSection>
          {!isTableDevice && <Title>My events</Title>}
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
        {isTableDevice && <Title>My events</Title>}

        {events && <EventsList events={events} location={location} />}
      </Section>
    </MainContainer>
  );
};

export default HomePage;
