import SubmitButton from "../Buttons/SubmitButton"
import Form from "../forms/Form"
import Input from "../forms/Input"

export default function Payment({ sendForm, setForm }) {
    return (
        <Form submit={sendForm}>
            <Input text="Nombre completo:" type="text" id="name" change={setForm} />
            <Input text="E-mail:" type="email" id="email" change={setForm} />
            <Input text="Verificacion E-mail:" type="email" id="emailValidate" change={setForm} />
            <Input text="Numero de telefono:" type="tel" id="phone" change={setForm} />
            <SubmitButton text="Terminar orden" />
        </Form>
    )
}
