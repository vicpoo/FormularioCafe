import Field from "../molecules/Field";
import Button from "../atoms/Button";
import './SectionLogin.css'

function SectionLogin() {
    return (
        <div id="login_section">
            <Field type="text" placeholder="p.e. alilopez" text="Username"/>
            <Field type="password" placeholder="Password" text="Password"/>
            <Button />
        </div> 
     );
}

export default SectionLogin;