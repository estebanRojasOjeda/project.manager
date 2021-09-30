import { useState, useEffect } from "react";
import axios from "axios";
import { Button, FormGroup, Input, Label } from "reactstrap";
import { useHistory, useParams } from "react-router-dom";

const PirateDetail = () => {
    console.log('cargado')
    const [pirate, setPirate] = useState('');
    const { id } = useParams();
    const hist = useHistory();

    useEffect(() => {
        axios.get('/api/pirate/' + id)
            .then(res => {
                setPirate({
                    ...res.data.pirate

                });
                console.log(res.data)
            })
            .catch(err => console.log('error: ' + err))
    }, []);



    const back = (e) => {
        hist.push('/pirates');
    }


    return (
        <>
            <h1>Detalle de producto</h1>
            <div>
                <p>Id: {pirate._id}</p>
                <p>Nombre: {pirate.name}</p>
                <p>posicion: {pirate.position}</p>
                <p>frase: {pirate.Phrase}</p>
                <p>tesoro: {pirate.treasure}</p>


                <FormGroup check inline>
                    <Label check>
                        <Input type="checkbox" name="HookHand" /> Pata de palo
                    </Label>
                </FormGroup>
                <FormGroup check inline>
                    <Label check>
                        <Input type="checkbox" name="HookHand" /> Parche en el ojo
                    </Label>
                </FormGroup>
                <FormGroup check inline>
                    <Label check>
                        <Input type="checkbox" name="HookHand" /> Mano de garfio
                    </Label>
                </FormGroup>


                <br/>
                <Button style={{ marginLeft: '10px' }} type="button" onClick={back}>Back</Button>


            </div>
        </>
    )
}

export default PirateDetail;