import React, {Component} from "react";
import axios from 'axios';
class ProductDetail extends Component{
    state = {
        data: null
    }
    componentDidMount() {
       if(this.state.data === null || this.state.data[0]._id !== this.props.match.params.id){
           const apicall = "https://sahebdairy.herokuapp.com/api/OrderList";
           let data;
           axios.get(apicall)
               .then(res => {
                   data = res.data.filter(e =>{
                       return e._id === this.props.match.params.id
                   })
                   console.log(data);
                   this.setState({
                       data
                   })
               })
               .catch(err => {
                   console.log(err);
               })
       }
    }

    render() {
     const   finalDetail = this.state.data === null ? (
         <div className="Loading">
             <button className="btn btn-primary" type="button" disabled>
                 <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                   Loading...
             </button>
         </div>
        ) : (
         <div className="container">
             <div className="row justify-content-md-center">
                 <div className="alert alert-primary" role="alert">
                 <div className="col-md-6">
                     <div className="card">
                         <ul className="list-group list-group-flush">
                             <li className="list-group-item">Name : {this.state.data[0].Name}</li>
                             <li className="list-group-item">Phone : {this.state.data[0].PhoneNumber}</li>
                             <li className="list-group-item">Address : {this.state.data[0].Address}</li>
                         </ul>
                     </div>
                     </div>
                 </div>
                 <div className="col-md-6">
                     <div>
                         <div className="alert alert-success" role="alert">
                             <table className="table table-hover table-responsive">
                                 <thead>
                                 <tr>

                                     <th scope="col">Image</th>
                                     <th scope="col">Product</th>
                                     <th scope="col">Price</th>
                                 </tr>
                                 </thead>
                                 <tbody>
                                 {this.state.data[0].todoLists.map(e => {
                                     return (
                                         <tr>

                                             <td><img src={e.Image} className="img-fluid"/></td>
                                             <td>{e.Name}</td>
                                             <td>{e.Price}</td>
                                         </tr>
                                     )
                                 })}

                                 </tbody>
                             </table>

                         </div>

                         <div className="alert alert-secondary" role="alert">
                             Total Price : {this.state.data[0].AmountPay}
                         </div>

                     </div>


                 </div>
             </div>
         </div>

                 )
       return (
           <div>
               {finalDetail}
           </div>

       )
   }
}

export default ProductDetail;
