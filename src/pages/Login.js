import React, { useState } from "react";

import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import { Link, Redirect } from "react-router-dom";
import {
  PageWrapper,
  Label,
  Input,
  StyledInlineErrorMessage,
  Submit
} from "./formik/styles";


import './StyleLogin.css'; 
import Recurso440 from '../assets/projects_images/Recurso 440.png'



const validationSchema = Yup.object().shape({

    email: Yup.string()
    .email("Tù rut es incorrecto")
    .required("Por favor ingrese su Rut"),
});

const Login=()=> {
  const [formValues, setFormValues] = useState();
  const [showComponent, setShowComponent]=useState(false);

  const accion=()=>{
    setShowComponent(true)
  
  
}
if(showComponent==true){
  return <Redirect to="/mascercadeti"/>
}
  return (
    <PageWrapper className="formu">
      
      <Formik
        initialValues={{
          email: "",
          password: ""
        }}
        validate={(values) => {
          const errors = {};

          
         
         
          // We need a valid password
          if (!values.password) errors.password = "La contraseña es requerida";
          else if (`${values.password}`.length < 7)
            errors.password =
              "La contraseñaes de minimo 7 caracteres";

          console.log({ values, errors });

          return errors;
        }}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          console.log(values);
          setFormValues(values);

          const timeOut = setTimeout(() => {
            actions.setSubmitting(false);

            clearTimeout(timeOut);
          }, 1000);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleSubmit,
          isSubmitting,
          isValidating,
          isValid
        }) => {
          return (
            <>
              <Form name="contact" method="post" onSubmit={handleSubmit}>
              <img src={Recurso440} alt="avatar" className="logologin" />
                <Label htmlFor="email">
                 
                 <Input
                  
                   name="email"
                   autoCapitalize="off"
                   autoCorrect="off"
                   autoComplete="rut"
                   placeholder="RUT"
                   valid={touched.email && !errors.email}
                   error={touched.email && errors.email}
                  
                 />
               </Label>
               <ErrorMessage name="email">
                 {msg => (
                   <StyledInlineErrorMessage>{msg}</StyledInlineErrorMessage>
                 )}
               </ErrorMessage>
         
                
                <Label htmlFor="password">
                 
                  <Input
                    type="password"
                    name="password"
                    autoCapitalize="off"
                    autoCorrect="off"
                    autoComplete="email"
                    placeholder="Contraseña"
                    valid={touched.password && !errors.password}
                    error={touched.password && errors.password}
                  />
                </Label>
                <ErrorMessage name="password">
                  {msg => (
                    <StyledInlineErrorMessage>{msg}</StyledInlineErrorMessage>
                  )}
                </ErrorMessage>
                
                <Submit type="submit" className="button" style={{width: "140px", marginRight: "auto", marginLeft: "auto", background: "#004364"}} onClick={accion} disabled={!isValid || isSubmitting}>
               {isSubmitting ? `Ingresando...` : `Ingresar`}
                </Submit>
               
              </Form>

              
            </>
          );
        }}
      </Formik>
    </PageWrapper>
  );
}

export default Login;
