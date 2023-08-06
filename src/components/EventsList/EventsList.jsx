import { EventsItem } from "components/EventsItem";

import { EventsListStyled } from "./EventsList.styled";

export const EventsList = ({ events, location }) => {
  return (
    <EventsListStyled>
      {events.map((event) => {
        return <EventsItem key={event.id} event={event} location={location} />;
      })}
    </EventsListStyled>
  );
};
