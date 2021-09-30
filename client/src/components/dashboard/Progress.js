import { useEffect } from "react";
import { Col, Row, Button } from "reactstrap";
import axios from 'axios';
import Swal from 'sweetalert2';
import "./style/backlog.css";

const Progress = (props) => {

    useEffect(() => {
        axios.get('/api/pm/all')
            .then(resp => {
                const progress = resp.data.Projects.filter(el => el.state == 1);
                props.setProgress(progress);
            }).catch(err => Swal.fire('Error al traer proyectoddds', 'Error al tratar de listar', 'error'));
    }, []);

    const updateProject = (id, newState) => {
        axios.put('/api/pm/' + id, { state: newState })
        .then(resp => {
            updateDone();
        }).catch(err => {
           console.log('Error al tratr de cambiar de estado' + err)
        });
    }

    const updateDone = () => {
        axios.get('/api/pm/all')
            .then(resp => {
                const progress = resp.data.Projects.filter(el => el.state == 1);
                props.setProgress(progress);
                const done = resp.data.Projects.filter(prd => prd.state == 2);
                props.setDone(done);
            }).catch(err => Swal.fire('Error al traer proyectos', 'Error al tratar de listar', 'error'));
    }


    return (
        <Row>
            <Col xs={12}>
             

                    {
                    
                    props.progress.map((p, i) => {
                        return (<div key={i} style={{margin:'10px', padding:'10px', border:'2px solid #000'}}>
                            <h3>{p.name}</h3>
                            <p>Entrega: {p.date}</p>
                            
                            
                            <Button color="success"><a onClick={e => updateProject(p._id, 2)}>Mover a finalizado</a></Button>
                         
                        </div>
                        )
                    }
                    )
                    
                    }


                  
            </Col>
        </Row>
    )
}

export default Progress;
