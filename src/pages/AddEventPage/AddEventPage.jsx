import { useLocation } from "react-router-dom";

import { MainContainer } from "components/MainContainer";
import { Section } from "components/Section";
import { BtnBack } from "components/BtnBack";

const AddEventPage = () => {
  const location = useLocation();

  const backLinkHref = location.state?.from ?? "/";
  return (
    <MainContainer>
      <Section>
        <BtnBack to={backLinkHref} />
        <p>створити подію</p>
      </Section>
    </MainContainer>
  );
};

export default AddEventPage;
