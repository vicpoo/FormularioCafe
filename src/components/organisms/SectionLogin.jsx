import Field from "../molecules/Field";
import Button from "../atoms/Button";
import './SectionLogin.css'

function SectionLogin() {
    return (
        <div id="login_section">
            <Field type="text" placeholder="p. ej : Café espresso" text="Nombre del cafe"/>
            <Field type="text" placeholder="p. ej : Ocosingo" text="Origen del cafe"/>
            <Field type="text" placeholder="p. ej : 1100 metros" text="Altura del cafe"/>
            <Field type="text" placeholder="p. ej : 8.5" text="Calificacion del cafe"/>
            
            <Button />
        </div> 
     );
}

export default SectionLogin;