import React, {useState, useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'
import { InputGroup, InputGroupAddon, InputGroupText, Input, Badge, Button } from 'reactstrap';

const AddSmurf = () => {
const [newSmurf, setNewSmurf] =useState({

    name:'',
    age: '',
    height: ''
})
const {addSmurf} =useContext(GlobalContext)

const onChange = (e) => {
    setNewSmurf({...newSmurf, [e.target.name]: e.target.value})
}

const onSubmit = (e) => {
    e.preventDefault()
    addSmurf(newSmurf)
    e.target.reset()
}


return(
    <div>
        <Badge color="primary">Add Smurf</Badge>
    <form onSubmit={onSubmit}>
        <InputGroup>
            <InputGroupAddon addonType="prepend">
        <InputGroupText>name</InputGroupText>
        </InputGroupAddon>
        <Input
        type='text'
        name='name'
        values={newSmurf}
        onChange ={onChange}
         placeholder="name" />
        <InputGroupAddon addonType="prepend">
        <InputGroupText>age</InputGroupText>
        </InputGroupAddon>
        <Input
        type='text'
        name='age'
        values={newSmurf}
        onChange ={onChange}
         placeholder="age" />
        <InputGroupAddon addonType="prepend">   
        <InputGroupText>height</InputGroupText>
        </InputGroupAddon>
        <Input
        type='text'
        name='height'
        values={newSmurf}
        onChange ={onChange}
         placeholder="height" />
        
        </InputGroup>
        <Button type='submit' color="primary">ADD</Button>
    </form>    
    </div>
)





}
export default AddSmurf