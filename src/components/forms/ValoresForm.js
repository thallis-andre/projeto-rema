import React, { useState } from 'react';
import { Form, Button, Col } from 'react-bootstrap';

function ValoresForm({ className }) {
	const [validated, setValidated] = useState();
	const [w, setw] = useState();
	const [p, setP] = useState();
	const [tensao, setTensao] = useState();
	const [elasticidade, setElasticidade] = useState();
	const [l1, setL1] = useState();
	const [l2, setL2] = useState();
	const [l3, setL3] = useState();
	const [l4, setL4] = useState();
	const [l5, setL5] = useState();

	const handleSubmit = (event) => {
		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		} else {
			const dados = {
				w,
				p,
				tensao,
				elasticidade,
				l1,
				l2,
				l3,
				l4,
				l5,
			};

			console.log('AAAAAAAA: ', w);
		}

		setValidated(true);
	};
	return (
		<Form
			noValidate
			validated={validated}
			onSubmit={handleSubmit}
			className="valores-form"
		>
			<Form.Row>
				<Form.Group as={Col} md="12" controlId="validationCustom01">
					<Form.Label>W</Form.Label>
					<Form.Control
						required
						type="number"
						placeholder="KN/m"
						value={w}
						onChange={(e) => setw(e.target.value)}
					/>
					<Form.Control.Feedback type="invalid">
						O W é obrigatório.
					</Form.Control.Feedback>
				</Form.Group>
			</Form.Row>
			<Form.Row>
				<Form.Group as={Col} md="6" controlId="validationCustom01">
					<Form.Label>Força (P)</Form.Label>
					<Form.Control
						required
						type="number"
						placeholder="KN"
						value={p}
						onChange={(e) => setP(e.target.value)}
					/>
					<Form.Control.Feedback type="invalid">
						O P é obrigatório.
					</Form.Control.Feedback>
				</Form.Group>
				<Form.Group as={Col} md="6" controlId="validationCustom01">
					<Form.Label>Tensão normal (σ)</Form.Label>
					<Form.Control
						required
						type="number"
						placeholder="MPa"
						value={tensao}
						onChange={(e) => setTensao(e.target.value)}
					/>
					<Form.Control.Feedback type="invalid">
						A tensão é obrigatória.
					</Form.Control.Feedback>
				</Form.Group>
			</Form.Row>
			<Form.Row>
				<Form.Group as={Col} md="6" controlId="validationCustom01">
					<Form.Label>Módulo elasticidade (E)</Form.Label>
					<Form.Control
						required
						type="number"
						placeholder="MPa"
						value={elasticidade}
						onChange={(e) => setElasticidade(e.target.value)}
					/>
					<Form.Control.Feedback type="invalid">
						O Módulo elasticidade é obrigatório.
					</Form.Control.Feedback>
				</Form.Group>
				<Form.Group as={Col} md="6" controlId="validationCustom01">
					<Form.Label>L1</Form.Label>
					<Form.Control
						required
						type="number"
						placeholder="m"
						value={l1}
						onChange={(e) => setL1(e.target.value)}
					/>
					<Form.Control.Feedback type="invalid">
						O comprimento L1 é obrigatório.
					</Form.Control.Feedback>
				</Form.Group>
			</Form.Row>
			<Form.Row>
				<Form.Group as={Col} md="6" controlId="validationCustom01">
					<Form.Label>L2</Form.Label>
					<Form.Control
						required
						type="number"
						placeholder="m"
						value={l2}
						onChange={(e) => setL2(e.target.value)}
					/>
					<Form.Control.Feedback type="invalid">
						O comprimento L2 é obrigatório.
					</Form.Control.Feedback>
				</Form.Group>
				<Form.Group as={Col} md="6" controlId="validationCustom01">
					<Form.Label>L3</Form.Label>
					<Form.Control
						required
						type="number"
						placeholder="m"
						value={l3}
						onChange={(e) => setL3(e.target.value)}
					/>
					<Form.Control.Feedback type="invalid">
						O comprimento L3 é obrigatório.
					</Form.Control.Feedback>
				</Form.Group>
			</Form.Row>
			<Form.Row>
				<Form.Group as={Col} md="6" controlId="validationCustom01">
					<Form.Label>L4</Form.Label>
					<Form.Control
						required
						type="number"
						placeholder="m"
						value={l4}
						onChange={(e) => setL4(e.target.value)}
					/>
					<Form.Control.Feedback type="invalid">
						O comprimento L4 é obrigatório.
					</Form.Control.Feedback>
				</Form.Group>
				<Form.Group as={Col} md="6" controlId="validationCustom01">
					<Form.Label>L5</Form.Label>
					<Form.Control
						required
						type="number"
						placeholder="m"
						value={l5}
						onChange={(e) => setL5(e.target.value)}
					/>
					<Form.Control.Feedback type="invalid">
						O comprimento L5 é obrigatório.
					</Form.Control.Feedback>
				</Form.Group>
			</Form.Row>
			<Button type="submit">Submit form</Button>
		</Form>
	);
}
export default ValoresForm;
