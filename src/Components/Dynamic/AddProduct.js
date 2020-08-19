import React from "react";
import uuid from 'react-uuid';
import axios from 'axios';
class AddProduct extends React.Component{
state = {
    Name: '',
    Description: "",
    Price: 0,
    Id: "",
    Image: ""
}

componentDidMount() {
    this.setState({
        Id: uuid().toString()
    })
}
handleChange = (e) => {
    this.setState({
        [e.target.id] : e.target.value
    })
}

handleClick = (e) => {
    e.preventDefault();
    console.log(this.state);

    axios.post('https://sahebdairy.herokuapp.com/api/Create',this.state)
        .then(res =>{
            console.log("Data Saved ");
        })
        .catch(err => {
            console.log("Error!");
        });

    this.props.history.push("/");
}
    render(){

        return(
            <div>
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Name</label>
                        <input type="text" className="form-control" id="Name"
                               aria-describedby="emailHelp" onChange={this.handleChange}/>

                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Description</label>
                        <input type="text" className="form-control" id="Description" onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Price</label>
                        <input type="number" className="form-control" id="Price" onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Image</label>
                        <input type="text" className="form-control" id="Image" onChange={this.handleChange}/>
                        <small>Add a valid Image link, copy image link from the image and paste here!</small>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.handleClick}>Submit</button>
                </form>
            </div>
        )
    }
}
export default AddProduct;
