import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

import * as eventsAPI from "../../services/events-API";

import { MainContainer } from "components/MainContainer";
import { SectionPageWithBackBtn } from "components/SectionPageWithBackBtn";
import { BtnBack } from "components/BtnBack";
import { EventDetailsDescription } from "components/EventDetailsDescription";
import { Loader } from "components/Loader";

import { Title } from "./EventDetailsPage.styled";

const EventDetailsPage = () => {
  const location = useLocation();
  const { eventId } = useParams();

  const [detailsEvent, setDetailsEvent] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getEvent() {
      try {
        setIsLoading(true);
        const response = await eventsAPI.fetchEventAPI(eventId);

        setDetailsEvent(response);
      } catch (error) {
        toast.error(`Something went wrong. Try again...`);
      } finally {
        setIsLoading(false);
      }
    }
    getEvent();
  }, [eventId]);

  const deleteEvent = async (id) => {
    try {
      setIsLoading(true);
      await eventsAPI.removeEventAPI(id);
      setDetailsEvent(null);
      toast.success(`The event was successfully deleted`);
    } catch (error) {
      toast.error(`Something went wrong. Try again...`);
    } finally {
      setIsLoading(false);
    }
  };

  const backLinkHref = location.state?.from ?? "/";
  return (
    <MainContainer>
      {isLoading && <Loader />}
      <SectionPageWithBackBtn>
        <BtnBack to={backLinkHref} />

        {detailsEvent ? (
          <EventDetailsDescription
            detailsEvent={detailsEvent}
            onDelete={deleteEvent}
          />
        ) : (
          <Title>No event found</Title>
        )}
      </SectionPageWithBackBtn>
    </MainContainer>
  );
};

export default EventDetailsPage;
