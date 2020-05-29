import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import {GlobalContext} from '../context/GlobalState'

const AllSmurfs = (props) => {
    const  {smurf} = useContext(GlobalContext)
console.log('what is this@@@@',smurf)

    return(

        <div>

    <p></p>
           <p>bla blagg</p>1


            {smurf.map(data => (
                <div>
                    <div>{data.name}</div>
                    <div>{data.age}</div>
                    <div>{data.height}</div>

                </div>

))}
     

        </div>

    )
}

export default AllSmurfs