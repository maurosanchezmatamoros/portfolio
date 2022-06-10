import "./Contact.css"
import swal from "sweetalert"
import { Formik, Form, Field, ErrorMessage } from "formik"
import SocialNetworks from "./SocialNetworks"
import { useContext } from "react"
import LanguageContext from "../../Context/LanguageContext"

const Contact = () => {

    const {language} = useContext(LanguageContext)

    if(language==="en")
    {return(
        <div className="Contact">
            <h2>Contact</h2>
            <h4>If you are interested in contacting me, complete and submit this form, or use any social network link below.</h4>
            <Formik
                initialValues = {{
                    name: "",
                    lastName: "",
                    company: "",
                    cel: "",
                    email: "",
                    message: ""
                }}

                validate = {($values) => {

                    let errores = {}

                    if (!$values.name){
                        errores.name = 'Please write a name'
                    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test($values.name)){
                        errores.name = 'The name can only have letters and/or spaces'
                    }

                    if (!$values.lastName){
                        errores.lastName = 'Please write a last name'
                    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test($values.lastName)){
                        errores.lastName = 'The lastname can only have letters and/or spaces'
                    }

                    if (!$values.cel){
                        errores.cel = 'Please write a contact number'
                    } else if (!/^[0-9]+/.test($values.cel)){
                        errores.cel = 'It can only contain numbers'
                    }

                    if (!$values.email){
                        errores.email = 'Please write your email'
                    } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test($values.email)){
                        errores.email = 'The format does not correspond to an email'
                    }

                    return errores
                }}

                onSubmit = {(valores, {resetForm}) => {
                    swal("Message sent!", `Thank you for contacting me`, "success")
                    resetForm()
                }}>

                {( { errors } ) => (
                    <Form className="Contact__form">
                    <div className="Contact__input">
                        <label htmlFor="name">First name:</label>
                        <Field 
                            type="text" 
                            name="name" 
                            id="name" 
                        />
                    </div>
                        <ErrorMessage name="name" component={() => (
                            <div className="Contact__input__error">{errors.name}</div>
                        )} />
                    <div className="Contact__input">
                        <label htmlFor="lastname">Last name:</label>
                        <Field 
                            type="text" 
                            name="lastName" 
                            id="lastName" 
                        />
                    </div>
                        <ErrorMessage name="lastName" component={() => (
                            <div className="Contact__input__error">{errors.lastName}</div>
                        )} />
                    <div className="Contact__input">
                        <label htmlFor="company">Company:</label>
                        <Field 
                            type="text" 
                            name="company" 
                            id="company" 
                        />
                    </div>
                    <div className="Contact__input">
                        <label htmlFor="cel">Phone:</label>
                        <Field 
                            type="number" 
                            name="cel" 
                            id="cel"
                            min="1"
                        />
                    </div>
                        <ErrorMessage name="cel" component={() => (
                            <div className="Contact__input__error">{errors.cel}</div>
                        )} />
                    <div className="Contact__input">
                        <label htmlFor="email">Email:</label>
                        <Field 
                            type="email" 
                            name="email" 
                            id="email" 
                        />
                    </div>
                        <ErrorMessage name="email" component={() => (
                            <div className="Contact__input__error">{errors.email}</div>
                        )} />
                    <div className="Contact__input">
                        <label htmlFor="message">Message:</label>
                        <Field 
                            component="textarea" 
                            name="message" 
                            id="message"
                            placeholder="Write your message here..."
                            maxLength={500}
                            rows={2}
                        />
                    </div>
                    <div className="Contact__submit">
                        <input 
                            type="submit" 
                            value="Send" 
                            id="ContactSubmit"
                        />
                    </div>
                </Form>
                )}
            </Formik>
            <SocialNetworks />
        </div>
    )}

    return(
        <div className="Contact">
            <h2>Contacto</h2>
            <h4>Si estas interesado en contactarme, podés completar el siguiente formulario o enviarme un mensaje a cualquiera de mis redes sociales.</h4>
            <Formik
                initialValues = {{
                    name: "",
                    lastName: "",
                    company: "",
                    cel: "",
                    email: "",
                    message: ""
                }}

                validate = {($values) => {

                    let errores = {}

                    if (!$values.name){
                        errores.name = 'Por favor ingresa un nombre'
                    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test($values.name)){
                        errores.name = 'El nombre sólo puede contener letras y/o espacios'
                    }

                    if (!$values.lastName){
                        errores.lastName = 'Por favor ingresa un apellido'
                    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test($values.lastName)){
                        errores.lastName = 'El apellido sólo puede contener letras y/o espacios'
                    }

                    if (!$values.cel){
                        errores.cel = 'Por favor ingresa un número de contacto'
                    } else if (!/^[0-9]+/.test($values.cel)){
                        errores.cel = 'Sólo puede contener números'
                    }

                    if (!$values.email){
                        errores.email = 'Por favor ingresa un email'
                    } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test($values.email)){
                        errores.email = 'El formato ingresado no corresponde a un email'
                    }

                    return errores
                }}

                onSubmit = {(valores, {resetForm}) => {
                    swal("Mensaje enviado!", `Gracias por contactarte`, "success")
                    resetForm()
                }}>

                {( { errors } ) => (
                    <Form className="Contact__form">
                    <div className="Contact__input">
                        <label htmlFor="name">Nombre:</label>
                        <Field 
                            type="text" 
                            name="name" 
                            id="name" 
                        />
                    </div>
                        <ErrorMessage name="name" component={() => (
                            <div className="Contact__input__error">{errors.name}</div>
                        )} />
                    <div className="Contact__input">
                        <label htmlFor="lastname">Apellido:</label>
                        <Field 
                            type="text" 
                            name="lastName" 
                            id="lastName" 
                        />
                    </div>
                        <ErrorMessage name="lastName" component={() => (
                            <div className="Contact__input__error">{errors.lastName}</div>
                        )} />
                    <div className="Contact__input">
                        <label htmlFor="company">Empresa:</label>
                        <Field 
                            type="text" 
                            name="company" 
                            id="company" 
                        />
                    </div>
                    <div className="Contact__input">
                        <label htmlFor="cel">Teléfono:</label>
                        <Field 
                            type="number" 
                            name="cel" 
                            id="cel"
                            min="1"
                        />
                    </div>
                        <ErrorMessage name="cel" component={() => (
                            <div className="Contact__input__error">{errors.cel}</div>
                        )} />
                    <div className="Contact__input">
                        <label htmlFor="email">Email:</label>
                        <Field 
                            type="email" 
                            name="email" 
                            id="email" 
                        />
                    </div>
                        <ErrorMessage name="email" component={() => (
                            <div className="Contact__input__error">{errors.email}</div>
                        )} />
                    <div className="Contact__input">
                        <label htmlFor="message">Mensaje:</label>
                        <Field 
                            component="textarea" 
                            name="message" 
                            id="message"
                            placeholder="Ingresa aquí tu mensaje..."
                            maxLength={500}
                            rows={2}
                        />
                    </div>
                    <div className="Contact__submit">
                        <input 
                            type="submit" 
                            value="Enviar" 
                            id="ContactSubmit"
                        />
                    </div>
                </Form>
                )}
            </Formik>
            <SocialNetworks />
        </div>
    )
}

export default Contact