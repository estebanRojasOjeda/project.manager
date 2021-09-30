import "./style/header.css";
import { useHistory } from "react-router-dom";
import { Button } from "reactstrap";

const Header = () => {
    const history = useHistory();

    const newPirate = (e) => {
        history.push('/pirates/new');
    }

    return (
        <div className="head">
            <h1>Tripulación Pirata - Mantenedor</h1>
            <Button style={{ marginLeft: '10px' }} type="button" onClick={newPirate} color="primary">Registrar Pirata</Button>
        </div>
    )
}

export default Header;