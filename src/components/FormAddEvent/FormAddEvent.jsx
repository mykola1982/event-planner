import { useState } from "react";
import { useNavigate } from "react-router-dom";

import * as yup from "yup";
import { Formik, Field, ErrorMessage } from "formik";

import { toast } from "react-toastify";
import { nanoid } from "nanoid";

import * as eventsAPI from "../../services/events-API";
import { combineDateTime } from "services/combineDateTime";

import { categories } from "data/categories";

import { Loader } from "components/Loader";

import { StyledForm, Button } from "./FormAddEvent.styled";

const idInputName = nanoid();
const idInputDescription = nanoid();
const idInputLocationEvent = nanoid();
const idInputImg = nanoid();
const idInputDate = nanoid();
const idInputTime = nanoid();
const idInputCategory = nanoid();
const idInputPriority = nanoid();

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .required("This field is required")
    .matches(/^[A-Za-zА-Яа-яЁёЇїІіЄєҐґ]+$/, "Invalid input"),
  description: yup.string().required("This field is required"),
  locationEvent: yup
    .string()
    .required("This field is required")
    .matches(/^[A-Za-zА-Яа-яЁёЇїІіЄєҐґ]+$/, "Invalid input"),
  date: yup.date().required("This field is required"),
  time: yup.string().required("This field is required"),
  category: yup.string().required("This field is required"),
  priority: yup.string().required("This field is required"),
});

const initialValues = {
  name: "",
  description: "",
  locationEvent: "",
  img: "",
  date: new Date().toISOString().split("T")[0],
  time: new Date().toISOString().split("T")[1].slice(0, 5),
  category: categories[0],
  priority: "High",
};

export const FormAddEvent = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (values, { resetForm }) => {
    const newEvent = {
      name: values.name,
      description: values.description,
      locationEvent: values.locationEvent,
      img: values.img,
      date: combineDateTime(values.date, values.time),
      category: values.category,
      priority: values.priority,
    };

    try {
      setIsLoading(true);
      await eventsAPI.addEventAPI(newEvent);
      navigate("/");
      toast.success(`Event successfully added`);
    } catch (error) {
      toast.error(`Something went wrong. Try again...`);
    } finally {
      setIsLoading(false);
    }

    resetForm();
  };

  return (
    <>
      {isLoading && <Loader />}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <StyledForm>
          <label htmlFor={idInputName}>Title</label>
          <Field id={idInputName} type="text" name="name" />
          <ErrorMessage name="name" component="p" />
          <label htmlFor={idInputDescription}>Description</label>
          <Field
            component="textarea"
            id={idInputDescription}
            rows="10"
            name="description"
          />
          <ErrorMessage name="description" component="p" />
          <label htmlFor={idInputDate}>Select date</label>
          <Field id={idInputDate} type="date" name="date" />
          <ErrorMessage name="date" component="p" />
          <label htmlFor={idInputTime}>Select time</label>
          <Field id={idInputTime} type="time" name="time" />
          <ErrorMessage name="time" component="p" />
          <label htmlFor={idInputLocationEvent}>Location</label>
          <Field id={idInputLocationEvent} type="text" name="locationEvent" />
          <ErrorMessage name="locationEvent" component="p" />
          <label htmlFor={idInputCategory}>Category</label>
          <Field
            component="select"
            name="category"
            id={idInputCategory}
            value={initialValues.category}
          >
            {categories.map((category) => (
              <option key={nanoid()} value={category}>
                {category}
              </option>
            ))}
          </Field>
          <ErrorMessage name="category" component="p" />
          <label htmlFor={idInputImg}>Add picture</label>
          <Field id={idInputImg} type="file" name="img" />
          <ErrorMessage name="img" component="p" />
          <label htmlFor={idInputPriority}>Priority</label>

          <Field
            component="select"
            name="priority"
            id={idInputPriority}
            value={initialValues.priority}
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </Field>
          <ErrorMessage name="priority" component="p" />

          <Button type="submit">Add event</Button>
        </StyledForm>
      </Formik>
    </>
  );
};
