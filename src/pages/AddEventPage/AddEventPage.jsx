import { useLocation } from "react-router-dom";

import { MainContainer } from "components/MainContainer";
import { SectionPageWithBackBtn } from "components/SectionPageWithBackBtn";
import { BtnBack } from "components/BtnBack";

import { FormAddEvent } from "components/FormAddEvent";

import { Title } from "./AddEventPage.styled";

const AddEventPage = () => {
  const location = useLocation();

  const backLinkHref = location.state?.from ?? "/";
  return (
    <MainContainer>
      <SectionPageWithBackBtn>
        <BtnBack to={backLinkHref} />
        <Title>Create new event</Title>
        <FormAddEvent />
      </SectionPageWithBackBtn>
    </MainContainer>
  );
};

export default AddEventPage;
