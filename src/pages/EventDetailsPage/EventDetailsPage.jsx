import { useLocation } from "react-router-dom";
import { BtnBack } from "components/BtnBack";

const EventDetailsPage = () => {
  const location = useLocation();

  const backLinkHref = location.state?.from ?? "/";
  return (
    <>
      <BtnBack to={backLinkHref} />
      <p>детальна інформація про подію</p>
    </>
  );
};

export default EventDetailsPage;
