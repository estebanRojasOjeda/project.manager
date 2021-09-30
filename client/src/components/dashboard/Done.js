import { useEffect } from "react";
import { Col, Row, Button } from "reactstrap";
import axios from 'axios';
import Swal from 'sweetalert2';
import "./style/backlog.css";

const Done = (props) => {

    useEffect(() => {
        axios.get('/api/pm/all')
            .then(resp => {
                const done = resp.data.Projects.filter(el => el.state == 2);
                props.setDone(done);
                console.log(done)
            }).catch(err => Swal.fire('Error al traer proyectos', 'Error al tratar de listar', 'error'));
    }, []);

    const deleteProject = (id) => {
        Swal.fire({
            title: 'Eliminar proyecto',
            text: 'Estas seguro/a?',
            confirmButtonText: 'Si, eliminar!!',
            cancelButtonText: 'No',
            showCancelButton: true,
            icon: 'warning'
        }).then(resp => {
            if (resp.value) {
                axios.delete('/api/pm/' + id)
                    .then(resp => {
                        const prods = props.done.filter(prd => prd._id !== id);
                        props.setDone(prods);
                        Swal.fire('Proyecto eliminado', 'good!', 'success');
                    })
                    .catch(err => Swal.fire('Proyecto no eliminado', 'ups, favor contactar al admin', 'error'));
            }
        })
    }


    return (
        <Row>
            <Col xs={12}>
             

                    {
                    
                    props.done.map((p, i) => {
                        return (<div key={i} style={{margin:'10px', padding:'10px', border:'2px solid #000'}}>
                            <h3>{p.name}</h3>
                            <p>Entrega: {p.date}</p>
                            
                            <Button color="danger"><a onClick={e => deleteProject(p._id)}>Remover Proyecto</a></Button>
                         
                        </div>
                        )
                    }
                    )
                    
                    }


                  
            </Col>
        </Row>
    )
}

export default Done;
