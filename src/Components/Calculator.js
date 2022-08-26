import Form from 'react-bootstrap/Form';

function Calculator() {
    return (
        <div className='controlForm'>
    <Form className='aturForm'>
      <Form.Group className="mb-3" controlId="primo">
        <Form.Label>Primogems</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Primogems" />
      </Form.Group>
      <Form.Group   className="mb-3" controlId="fate">
        <Form.Label>Intertwined Fate</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Int Fate" />
      </Form.Group>
    </Form>
    </div>

);
}


export default Calculator;