import { useEffect } from "react";
import { Col, Row, Button } from "reactstrap";
import axios from 'axios';
import Swal from 'sweetalert2';
import "./style/backlog.css";

const Backlog = (props) => {

    useEffect(() => {
        axios.get('/api/pm/all')
            .then(resp => {
                const backlog = resp.data.Projects.filter(el => el.state == null);
                props.setBacklog(backlog);
            }).catch(err => Swal.fire('Error al traer proyectos', 'Error al tratar de listar', 'error'));
    }, []);



    const updateProject = (id, newState) => {
        axios.put('/api/pm/' + id, { state: newState })
            .then(resp => {
                updateProgress();
            }).catch(err => {
                console.log('Error al tratr de cambiar de estado' + err)
            });
    }

    const updateProgress = () => {
        axios.get('/api/pm/all')
            .then(resp => {
                const backlog = resp.data.Projects.filter(prd => prd.state == null);
                props.setBacklog(backlog);
                const progress = resp.data.Projects.filter(prd => prd.state == 1);
                props.setProgress(progress);
            }).catch(err => Swal.fire('Error al traer proyectos', 'Error al tratar de listar', 'error'));
    }


    return (
        <Row>
            <Col xs={12}>


                {

                    props.backlog.map((p, i) => {
                        return (<div key={i} style={{ margin: '10px', padding: '10px', border: '2px solid #000' }}>
                            <h3>{p.name}</h3>
                            <p>Entrega: {p.date}</p>

                            <Button color="warning"><a onClick={e => updateProject(p._id, 1)}>Mover a en progreso</a></Button>

                        </div>
                        )
                    }
                    )

                }



            </Col>
        </Row>
    )
}

export default Backlog;
