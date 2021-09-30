import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import "./style/project-form.css";

const initialState = {
    name: '',
    state: '',
    date: ''
}

const initialErrors = {
    name: '',
    state: '',
    date: ''
}

const ProjectForm = (props) => {

    const [inputs, setInputs] = useState(initialState);
    const [errors, setErrors] = useState(initialErrors);

    const hist = useHistory();

    const { id } = useParams();

    const updateFormValue = (e) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    }

    const save = (e) => {
        e.preventDefault();
        if (props.new) {
            axios.post('/api/pm/new', inputs)
                .then(resp => {
                    hist.push('/dashboard')
                }).catch(err => {
                    for (let field in err.response.data.errors) {

                        setErrors({
                            ...errors,
                            [field]: err.response.data.errors[field].message
                        });
                    }
                });
        } else if (props.edit) {
            axios.put('/api/pm/' + id, inputs)
                .then(resp => {
                    hist.push('/dashboard')
                }).catch(err => {
                    for (let field in err.response.data.errors) {
                        setErrors({
                            ...errors,
                            [field]: err.response.data.errors[field].message
                        });
                    }
                });
        }

    }

    useEffect(() => {
        if (props.view || props.edit) {
            axios.get('/api/pm/' + id)
                .then(resp => {
                    setInputs(resp.data);
                }).catch(err => console.log(err));
        }
    }, []);

    const back = (e) => {
        hist.push('/dashboard');
    }

    return (
        <>
            <h3>Planificar nuevo proyecto</h3>
            <div className="project-form">

                <Form onSubmit={save}>
                    <Row>
                        <Col xs={12}>
                            <FormGroup>
                                <Label>Nombre Proyecto</Label>
                                <Input type="tex" name="name" value={inputs.name} onChange={updateFormValue} required minLength="3" />
                                {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
                            </FormGroup>
                        </Col>
                        <Col xs={12}>
                            <FormGroup>
                                <Label>Fecha</Label>
                                <Input type="date" name="date" value={inputs.date} onChange={updateFormValue} required />
                                {errors.date && <span style={{ color: 'red' }}>{errors.date}</span>}
                            </FormGroup>
                        </Col>

                        <Col xs={12} className="mt-3">
                            {!props.view && <Button type="submit">Crear Proyecto</Button>}
                            <Button style={{ marginLeft: '10px' }} type="button" onClick={back}>Dashboard</Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        </>
    )
}

export default ProjectForm;