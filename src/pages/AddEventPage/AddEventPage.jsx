import { Link, useLocation } from "react-router-dom";

const AddEventPage = () => {
  const location = useLocation();

  const backLinkHref = location.state?.from ?? "/";
  return (
    <>
      <Link to={backLinkHref}>назад</Link>
      <p>створити подію</p>
    </>
  );
};

export default AddEventPage;
