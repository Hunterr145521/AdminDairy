import React, {useState,useEffect} from "react";
import axios from 'axios';
import cow from '../.././images/cow.jpg'
import {NavLink} from "react-router-dom";
const ProductList = () => {
    const [ProductList, setProductList ] = useState([]);
    const apicall = "https://sahebdairy.herokuapp.com/api/OrderList";

    const  callDate = (date) => {
        const  datetime = new Date(date);
        const dates = (datetime.getDate()+datetime.getMonth()*datetime.getFullYear());
        return dates;
    }
    const getCompleteDate = (date) => {
        const datetime = new Date(date);
        const dates = ("Order Date : " + datetime.getDate() + "/" + datetime.getMonth() + "/" + datetime.getFullYear() + " | Order Placed At : " + datetime.getHours() + ":" + datetime.getMinutes() + ":" + datetime.getSeconds());
        return dates;
    }
    useEffect(() => {
      axios.get(apicall)
          .then(res => {
            const revData = res.data.reverse();
              setProductList(revData);
          })
          .catch(err => {
              console.log(err);
          })
    },[]);



    const curdate = Date.now();
    const printdata = ProductList.length === 0 ? (
            <div className="Loading">
        <button className="btn btn-primary" type="button" disabled>
            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
              Loading...
        </button>
            </div>
    ) : (
        ProductList.map((e,id) => {
            if(callDate(curdate) === callDate(e.createdAt)){
                return (
                    <div className="all" key={id}>
                        <div className="card">

                            <img src={cow} className="card-img-top img-fluid" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{e.Name}</h5>
                                <p className="card-text">{e.Address}</p>
                                <div className="alert alert-primary" role="alert">
                                    <p className="card-text">{getCompleteDate(e.createdAt)}</p>
                                </div>
                                <small><div className="alert alert-success" role="alert">
                                    New Order
                                </div></small>
                                <NavLink to={'/Product/'+e._id} className="btn btn-primary">Check Product Details</NavLink>
                            </div>
                        </div>
                    </div>
                )
            }else{
                return (
                    <div className="all" key={id}>
                        <div className="card">
                            <img src={cow} className="card-img-top img-fluid" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{e.Name}</h5>
                                <p className="card-text">{e.Address}</p>
                                <div className="alert alert-primary" role="alert">
                                    <p className="card-text">{getCompleteDate(e.createdAt)}</p>
                                </div>
                                <NavLink to={'/Product/'+e._id} className="btn btn-primary">Check Product Details</NavLink>
                            </div>
                        </div>
                    </div>
                )
            }
        })
    )
    return(

        <div>
            {printdata}
        </div>
    )
}
export default ProductList;
