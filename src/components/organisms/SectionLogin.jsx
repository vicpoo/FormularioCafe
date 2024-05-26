import Field from "../molecules/Field";
import Button from "../atoms/Button";
import './SectionLogin.css'
import { guardar, imprimir } from "../../data/pila";
import { useState } from "react";

function SectionLogin() {

    const [nombre, setNombre] = useState('');
    const [origin, setOrigin] = useState('');
    const [hight, setHight] = useState('');
    const [score, setScore] = useState('');

    const handleClick = (e) => {
        e.preventDefault();
        const datos = {
            nombre,
            origin,
            hight,
            score
        };
        guardar(datos);
        imprimir();
    };



    return (
        <div id="login_section">
            <Field type="text" placeholder="p. ej : Café espresso" value={nombre}  onChange={(e) => setNombre(e.target.value)} text="Nombre del cafe"/>
            <Field type="text" placeholder="p. ej : Ocosingo" value={origin} onChange={(e) => setOrigin(e.target.value)}text="Origen del cafe"/>
            <Field type="text" placeholder="p. ej : 1100 metros" value={hight} onChange={(e) => setHight(e.target.value)}text="Altura del cafe"/>
            <Field type="text" placeholder="p. ej : 8.5" value={score} onChange={(e) => setScore(e.target.value)} text="Calificacion del cafe"/>
            
            <Button onClick={handleClick}/>
        </div> 
     );
}

export default SectionLogin;