import React from 'react'
import AllSmurfs from './AllSmurfs'
import {Link, useHistory} from 'react-router-dom'
import { Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText } from 'reactstrap';

const Town = () =>{
    const {push} =useHistory()

    return(
        <div>
        <Card>
        <CardHeader tag="h3">Town Page</CardHeader>
        <CardBody>
          <CardTitle>
              
          </CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
         <Link to='/add'>
          <Button >Add Smurf</Button>
          </Link>
        </CardBody>
        <CardFooter className="text-muted">Footer</CardFooter>
      </Card>



        
        <div></div>

        
        </div>
    )
}

export default Town