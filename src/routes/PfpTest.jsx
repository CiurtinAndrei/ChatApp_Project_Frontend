import React, { useState } from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const PfpTest = () => {
  const [photoID, setPhotoID] = useState('');
  const initialValues = {
    photo: null,
  };

  const validationSchema = Yup.object({
    photo: Yup.mixed().required('A photo is required'),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    const file = values.photo;
    const reader = new FileReader();

    reader.onloadend = async () => {
      const base64Image = reader.result;
      console.log('Base64 Image:', base64Image);

      const url = 'http://localhost:32767/user/setpfp';
      const data = {
        image: base64Image.split(",")[1],
        fileName: file.name,
      };
      console.log(file.name);
      try {
        const response = await axios.post(url, data, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          },
        });
        resetForm();
      } catch (error) {
        console.error('Error uploading image:', error.response ? error.response.data : error.message);
      } finally {
        setSubmitting(false);
      }
    };

    reader.readAsDataURL(file);
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, isSubmitting }) => (
          <Form>
            <div>
              <label htmlFor="photo">Upload PFP</label>
              <input
                id="photo"
                name="photo"
                type="file"
                onChange={(event) => {
                  const file = event.currentTarget.files[0];
                  setFieldValue('photo', file);
                }}
              />
              <ErrorMessage name="photo" component="div" />
            </div>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default PfpTest;