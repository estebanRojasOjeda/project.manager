import "./style/footer.css";
import { useHistory } from "react-router-dom";
import { Button } from "reactstrap";

const Footer = () => {
    const history = useHistory();

    const newPirate = (e) => {
        history.push('/dashboard/new');
    }

    return (
        <div className="footer">
            <Button style={{ marginLeft: '10px' }} type="button" onClick={newPirate} color="primary">Ingresar nuevo proyecto</Button>
        </div>
    )
}

export default Footer;