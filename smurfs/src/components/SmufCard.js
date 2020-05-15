import React from 'react'
import { Button, Form, FormGroup, Label, Input, Card,  CardHeader, CardFooter, CardBody,
    CardTitle, CardText } from 'reactstrap';



    const smurfCard = () =>{
console.log('where',smurfCard) 
    return(

        <div>
            <h2>mike was here</h2>

            <Card>

            <CardHeader tag="h2"></CardHeader>
            <CardTitle></CardTitle>
            <CardTitle></CardTitle>
            </Card>




            <Form>
                <FormGroup>
                <Label>smurf name </Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="..." />
                    <Label>age </Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="..." />
                    <Label>height</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="..." />
                </FormGroup>
                <Button>Submit</Button>
            </Form>


        </div>
       
    )
}

export default smurfCard