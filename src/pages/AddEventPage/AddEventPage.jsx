import { Link, useLocation } from "react-router-dom";

import { BtnBack } from "components/BtnBack";

const AddEventPage = () => {
  const location = useLocation();

  const backLinkHref = location.state?.from ?? "/";
  return (
    <>
      <BtnBack to={backLinkHref} />
      <p>створити подію</p>
    </>
  );
};

export default AddEventPage;
