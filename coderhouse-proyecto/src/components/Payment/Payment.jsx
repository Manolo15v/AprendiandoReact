import SubmitButton from "../Buttons/SubmitButton"
import Form from "../forms/Form"
import Input from "../forms/Input"

export default function Payment({ sendForm }) {
    return (
        <Form submit={sendForm}>
            <Input text="Nombre completo:" type="text" id="name" />
            <Input text="E-mail:" type="email" id="email" />
            <Input text="Verificacion E-mail:" type="email" id="email-validate" />
            <Input text="Numero de telefono:" type="tel" id="phone-number" />
            <SubmitButton text="Terminar orden" />
        </Form>
    )
}
