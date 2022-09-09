import React,{Component} from 'react';

// class ReactClass extends React.Component{
    
// }

class ReactClass extends Component{
    render(){
    console.log(this.props.studentDetails)
        return(
            <>
                <h1>Hello, Author name is {this.props.myName}</h1>
                <ul>
                    <li>First Name = {this.props.studentDetails.firstName}</li>
                    <li>Last Name = {this.props.studentDetails.lastName}</li>
                    <li>Address :{this.props.studentDetails.completeAddress.address} </li>
                    <li>PinCode :{this.props.studentDetails.completeAddress.pincode} </li>
                    <li>City :{this.props.studentDetails.completeAddress.city} </li>
                    <li>State :{this.props.studentDetails.completeAddress.state} </li>
                </ul>
                <h3>Hobbies</h3>
                <ul>
                    {this.props.studentDetails.hobbies.map(elem=><li>{elem}</li>)}
                </ul>
            </>
        )
    }
}

export default ReactClass;