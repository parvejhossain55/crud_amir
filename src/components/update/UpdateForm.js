import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import { ReadById, Update } from "../../APIServices/CRUDServices";
import { errorTost, isEmpty, successTost } from "../../helper/ValidationHelper";
import FullScreenLoader from "../common/FullScreenLoader";

const UpdateForm = (props) => {
    const navigate = useNavigate();

    let productName,
        prodDescription,
        productCode,
        quantity,
        price,
        productImage,
        loader = useRef();

    const updateData = () => {
        if (isEmpty(productName.value)) {
            errorTost("Product Name is required");
        } else if (isEmpty(prodDescription.value)) {
            errorTost("Product product description is required");
        } else if (isEmpty(productCode.value)) {
            errorTost("Product product_Code is required");
        } else if (isEmpty(productImage.value)) {
            errorTost("Product image is required");
        } else if (isEmpty(quantity.value)) {
            errorTost("Product product_qty is required");
        } else if (isEmpty(price.value)) {
            errorTost("Product total_Price is required");
        } else {
            loader.classList.remove("d-none");

            let postBody = {
                title: productName.value,
                description: prodDescription.value,
                code: productCode.value,
                price: price.value,
                quantity: quantity.value,
                image: productImage.value,
            };

            Update(props.id, postBody).then((Result) => {
                loader.classList.add("d-none");
                console.log("Update Error-------------->>", Result);
                if (Result === true) {
                    successTost("Data Successfully Updated..");
                    productName.value = "";
                    prodDescription.value = "";
                    productCode.value = "";
                    quantity.value = "";
                    price.value = "";
                    productImage.value = "";
                    navigate("/");
                } else {
                    errorTost("Request Fail Try Again");
                }
            });
        }
    };

    useEffect(() => {
        ReadById(props.id).then((Result) => {
            productName.value = Result[0]["title"];
            prodDescription.value = Result[0]["description"];
            productCode.value = Result[0]["code"];
            quantity.value = Result[0]["quantity"];
            price.value = Result[0]["price"];
            productImage.value = Result[0]["image"];
        });
    });

    return (
        <div>
            <div>
                <div className="d-none" ref={(div) => (loader = div)}>
                    <FullScreenLoader></FullScreenLoader>
                </div>

                <div className="container">
                    <div className="card mt-5">
                        <div className="card-header font-weight-bold">
                            <h2>Update Your Product</h2>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6 p-2">
                                    <label className="form-label">Product Name</label>
                                    <input
                                        ref={(input) => (productName = input)}
                                        type="text"
                                        className="form-control"
                                    ></input>
                                </div>
                                <div className="col-md-6 p-2">
                                    <label className="form-label">Product Description</label>
                                    <input
                                        ref={(input) =>
                                            (prodDescription = input)
                                        }
                                        type="text"
                                        className="form-control"
                                    ></input>
                                </div>
                                <div className="col-md-6 p-2">
                                    <label className="form-label">Product Code</label>
                                    <input
                                        ref={(input) => (productCode = input)}
                                        type="text"
                                        className="form-control"
                                    ></input>
                                </div>
                                <div className="col-md-6 p-2">
                                    <label className="form-label">Product Image</label>
                                    <input
                                        ref={(input) => (productImage = input)}
                                        type="text"
                                        className="form-control"
                                    ></input>
                                </div>
                                <div className="col-md-6 p-2">
                                    <label className="form-label">Product Quantity</label>
                                    <input
                                        ref={(input) => (quantity = input)}
                                        type="text"
                                        className="form-control"
                                    ></input>
                                </div>
                                <div className="col-md-6 p-2">
                                    <label className="form-label">Product Price</label>
                                    <input
                                        ref={(input) => (price = input)}
                                        type="text"
                                        className="form-control"
                                    ></input>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 p-2">
                                    <button
                                        onClick={updateData}
                                        className=" btn btn-primary w-100"
                                    >
                                        Update
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateForm;
