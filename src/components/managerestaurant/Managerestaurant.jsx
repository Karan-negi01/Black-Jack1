import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';







const Managerestaurant = () => {
    const navigate = useNavigate();
    const handledetails =()=>{
        navigate('/Restaurant')
    }
    return (
        <div>
            <Form className="update-form">

                <h2 className="update-form-heading">Update Restaurant Details</h2>

                <Form.Group className="detail" controlId="restaurantName">
                    <Form.Label>Restaurant Name</Form.Label>
                    <Form.Control placeholder="Abcd" />
                </Form.Group>

                <Form.Group className="detail" controlId="aboutRestaurant">
                    <Form.Label>About Restaurant</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Describe your restaurant..." />
                </Form.Group>

                <Form.Group className="detail" controlId="location">
                    <Form.Label>Location</Form.Label>
                    <Form.Control placeholder="India" />
                </Form.Group>

                <Form.Group className="detail" controlId="site">
                    <Form.Label>Site</Form.Label>
                    <Form.Control placeholder="https://www.xyz.com" />
                </Form.Group>


                <Button variant="primary" type="submit" className='update-form-button' onClick={handledetails}>
                    Add Restaurant Details
                </Button>
            </Form>
        </div>
    )
};

export default Managerestaurant
