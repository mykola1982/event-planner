import { useState } from "react";
import { useNavigate } from "react-router-dom";

import * as yup from "yup";
import { Formik } from "formik";

import { toast } from "react-toastify";
import { nanoid } from "nanoid";

import * as eventsAPI from "../../services/events-API";
import { combineDateTime } from "services/combineDateTime";

import { categories } from "data/categories";
import { priorities } from "data/priorities";

import { Loader } from "components/Loader";
import { CustomSelect } from "components/CustomSelect";

import {
  StyledForm,
  Label,
  InputWrapper,
  Wrapper,
  Input,
  StyledErrorMessage,
  Button,
  DeleteButton,
  DeleteIconStyled,
} from "./FormAddEvent.styled";

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
    .matches(/^[A-Za-zА-Яа-яЁёЇїІіЄєҐґ\s]+$/, "Invalid input"),
  description: yup.string().required("This field is required"),
  locationEvent: yup
    .string()
    .required("This field is required")
    .matches(/^[A-Za-zА-Яа-яЁёЇїІіЄєҐґ\s]+$/, "Invalid input"),
  date: yup.date().required("This field is required"),
  time: yup.string().required("This field is required"),
  category: yup.string(),
  priority: yup.string(),
});

const initialValues = {
  name: "",
  description: "",
  locationEvent: "",
  img: "",
  date: new Date().toISOString().split("T")[0],
  time: new Date().toISOString().split("T")[1].slice(0, 5),
  category: categories[0],
  priority: priorities[0],
};

export const FormAddEvent = () => {
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState(
    initialValues.category
  );
  const [selectedPriority, setSelectedPriority] = useState(
    initialValues.priority
  );

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (values, { resetForm }) => {
    values.category = selectedCategory;
    values.priority = selectedPriority;

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
          <Wrapper>
            <InputWrapper>
              <Label htmlFor={idInputName}>Title</Label>
              <Input id={idInputName} type="text" name="name"></Input>
              <StyledErrorMessage name="name" component="p" />
            </InputWrapper>

            <InputWrapper>
              <Label htmlFor={idInputDescription}>Description</Label>
              <Input id={idInputDescription} rows="10" name="description" />
              <StyledErrorMessage name="description" component="p" />
            </InputWrapper>

            <InputWrapper>
              <Label htmlFor={idInputDate}>Select date</Label>
              <Input id={idInputDate} type="date" name="date" />
            </InputWrapper>

            <InputWrapper>
              <Label htmlFor={idInputTime}>Select time</Label>
              <Input id={idInputTime} type="time" name="time" />
            </InputWrapper>

            <InputWrapper>
              <Label htmlFor={idInputLocationEvent}>Location</Label>
              <Input
                id={idInputLocationEvent}
                type="text"
                name="locationEvent"
              />
              <StyledErrorMessage name="locationEvent" component="p" />
            </InputWrapper>

            <InputWrapper>
              <Label htmlFor={idInputCategory}>Category</Label>
              <CustomSelect
                id={idInputCategory}
                title={"Select Category"}
                data={categories}
                selected={selectedCategory}
                setSelected={setSelectedCategory}
              />
            </InputWrapper>

            <InputWrapper>
              <Label htmlFor={idInputImg}>Add picture</Label>
              <Input id={idInputImg} type="file" name="img" disabled />
            </InputWrapper>

            <InputWrapper>
              <Label htmlFor={idInputPriority}>Priority</Label>
              <CustomSelect
                id={idInputPriority}
                title={"Select Priority"}
                data={priorities}
                selected={selectedPriority}
                setSelected={setSelectedPriority}
              />
            </InputWrapper>
          </Wrapper>

          <Button type="submit">Add event</Button>
        </StyledForm>
      </Formik>
    </>
  );
};
