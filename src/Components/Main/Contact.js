import "./Contact.css"
import swal from "sweetalert"
import { Formik, Form, Field, ErrorMessage } from "formik"
import { colors } from "../../Styles/theme"
import { fonts } from "../../Styles/theme"

const Contact = () => {

    return(
        <div className="Contact">
            <h2>Contact</h2>
            <h4>If you are interested in getting in contact with me, complete and submit this form, or use any social network link above.</h4>
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
                        errores.email = 'El formato no corresponde a un email'
                    }

                    return errores
                }}

                onSubmit = {(valores, {resetForm}) => {
                    swal("Message sent!", `Thank you for contact me`, "success")
                    resetForm()
                }}>

                {( { errors } ) => (
                    <Form className="Contact__form" style={{backgroundColor: `${colors.primary}aa`}}>
                    <div className="Contact__input">
                        <label htmlFor="name">Firstname:</label>
                        <Field 
                            type="text" 
                            name="name" 
                            id="name" 
                            style={{fontFamily: fonts.base}}
                        />
                    </div>
                        <ErrorMessage name="name" component={() => (
                            <div className="Contact__input__error">{errors.name}</div>
                        )} />
                    <div className="Contact__input">
                        <label htmlFor="lastname">Lastname:</label>
                        <Field 
                            type="text" 
                            name="lastName" 
                            id="lastName" 
                            style={{fontFamily: fonts.base}}
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
                            style={{fontFamily: fonts.base}}
                        />
                    </div>
                    <div className="Contact__input">
                        <label htmlFor="cel">Cel:</label>
                        <Field 
                            type="number" 
                            name="cel" 
                            id="cel"
                            min="1"
                            style={{fontFamily: fonts.base}}
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
                            style={{fontFamily: fonts.base}}
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
                            style={{fontFamily: fonts.base}}
                        />
                    </div>
                    <div className="Contact__submit">
                        <input 
                            type="submit" 
                            value="Send" 
                            id="ContactSubmit"
                            style={{fontFamily: fonts.base}}
                        />
                    </div>
                </Form>
                )}
            </Formik>
            <h3>Social networks</h3>
            <div className="Contact__social">
                <a href="https://www.linkedin.com/in/maurosanchezmatamoros/" target="_blank" rel="noopener noreferrer">
                    <img src="./svg/linkedin.svg" alt="linkedin"/>
                </a>
                <a href="mailto:maurosanchezmatamoros@gmail.com" target="_blank" rel="noopener noreferrer">
                    <img src="./svg/gmail.svg" alt="gmail"/>
                </a>
                <a href="https://wa.me/+5491154612423/?text=Hello Mauro..." target="_blank" rel="noopener noreferrer">
                    <img src="./svg/whatsapp.svg" alt="whatsapp"/>
                </a>
                <a href="https://www.instagram.com/smmauro/" target="_blank" rel="noopener noreferrer">
                    <img src="./svg/instagram.svg" alt="instagram"/>
                </a>
                <a href="https://www.facebook.com/smmauro" target="_blank" rel="noopener noreferrer">
                    <img src="./svg/facebook.svg" alt="facebook"/>
                </a>
                <a href="https://twitter.com/smmauro" target="_blank" rel="noopener noreferrer">
                    <img src="./svg/twitter.svg" alt="twitter"/>
                </a>
            </div>
        </div>
    )
}

export default Contact