import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

import * as eventsAPI from "../../services/events-API";

import { MainContainer } from "components/MainContainer";
import { SectionPageWithBackBtn } from "components/SectionPageWithBackBtn";
import { BtnBack } from "components/BtnBack";

import { Loader } from "components/Loader";

import { Title } from "./EditEventPage.styled";

const EventDetailsPage = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  const backLinkHref = location.state?.from ?? "/";
  return (
    <MainContainer>
      {isLoading && <Loader />}
      <SectionPageWithBackBtn>
        <BtnBack to={backLinkHref} />

        <Title>Edit event</Title>
      </SectionPageWithBackBtn>
    </MainContainer>
  );
};

export default EventDetailsPage;
