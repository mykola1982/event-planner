import {
  WrapperDetails,
  Title,
  CartDetails,
  Image,
  Wrapper,
  DescriptionStyled,
  WrapperInfo,
  WrapperButton,
  ButtonEdit,
  ButtonDelete,
} from "./EventDetailsDescription.styled";

import { formattedDatePmAm } from "services/formattedDatePmAm";

import NotPhoto from "images/img/default2.png";

export const EventDetailsDescription = ({ detailsEvent, onDelete }) => {
  const {
    id,
    name,
    description,
    locationEvent,
    img,
    date,
    category,
    priority,
  } = detailsEvent;

  let colorPriority;
  switch (priority) {
    case "High":
      colorPriority = { color: "#FF2B77" };
      break;

    case "Medium":
      colorPriority = { color: "#E2A300" };
      break;

    case "Low":
      colorPriority = { color: "#6BD475" };
      break;

    default:
      colorPriority = { color: "#7B61FF" };
  }

  return (
    <WrapperDetails>
      <Title>{name}</Title>

      <CartDetails>
        {img !== "" ? (
          <Image src={img} alt={name} />
        ) : (
          <Image src={NotPhoto} alt="no events" />
        )}
        <Wrapper>
          <DescriptionStyled>{description}</DescriptionStyled>
          <WrapperInfo>
            <p>{category}</p>
            <p style={colorPriority}>{priority}</p>
            <p> {locationEvent}</p>
            <p>{formattedDatePmAm(date)}</p>
          </WrapperInfo>
          <WrapperButton>
            <ButtonEdit to={`/edit`}>Edit</ButtonEdit>
            <ButtonDelete type="button" onClick={() => onDelete(id)}>
              Delete event
            </ButtonDelete>
          </WrapperButton>
        </Wrapper>
      </CartDetails>
    </WrapperDetails>
  );
};
