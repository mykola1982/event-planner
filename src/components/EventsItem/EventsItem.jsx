import {
  Item,
  Image,
  CategoryAndPriorytyWrapper,
  CategoryStyled,
  PriorityStyled,
  WrapperDate,
  WrapperInfo,
  TitleStyled,
  DescriptionContainer,
  DescriptionStyled,
  LinkStyled,
} from "./EventsItem.styled";

import { formattedDate } from "services/formattedDate";

import NotPhoto from "images/img/default.png";

export const EventsItem = ({ event, location }) => {
  const {
    id,
    name,
    description,
    locationEvent,
    img,
    date,
    category,
    priority,
  } = event;

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
    <Item>
      {img !== "" ? (
        <Image src={img} alt={name} />
      ) : (
        <Image src={NotPhoto} alt="no events" />
      )}
      <CategoryAndPriorytyWrapper>
        <CategoryStyled>{category}</CategoryStyled>
        <PriorityStyled style={colorPriority}>{priority}</PriorityStyled>
      </CategoryAndPriorytyWrapper>

      <WrapperInfo id="wrapperInfo">
        <WrapperDate>
          <p>{formattedDate(date)}</p>
          <p> {locationEvent}</p>
        </WrapperDate>
        <TitleStyled>{name}</TitleStyled>
        <DescriptionContainer>
          <DescriptionStyled>{description}</DescriptionStyled>
        </DescriptionContainer>

        <LinkStyled to={`/events/${id}`} state={{ from: location }}>
          More info
        </LinkStyled>
      </WrapperInfo>
    </Item>
  );
};
