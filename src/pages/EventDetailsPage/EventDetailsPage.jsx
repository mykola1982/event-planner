import { useLocation } from "react-router-dom";

import { MainContainer } from "components/MainContainer";
import { Section } from "components/Section";
import { BtnBack } from "components/BtnBack";

const EventDetailsPage = () => {
  const location = useLocation();

  const backLinkHref = location.state?.from ?? "/";
  return (
    <MainContainer>
      <Section>
        <BtnBack to={backLinkHref} />
        <p>детальна інформація про подію</p>
      </Section>
    </MainContainer>
  );
};

export default EventDetailsPage;
