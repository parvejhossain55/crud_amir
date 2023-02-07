import React, { useRef } from "react";
import { useNavigate } from "react-router";
import { Create } from "../../APIServices/CRUDServices";
import { errorTost, isEmpty, successTost } from "../../helper/ValidationHelper";
import FullScreenLoader from "../common/FullScreenLoader";

const CreateForm = () => {
    const navigate = useNavigate();

    let productName,
        prodDescription,
        productCode,
        productImage,
        quantity,
        price,
        loader = useRef();

    const saveData = () => {
        let product_Name = productName.value;
        let product_Code = productCode.value;
        let image = productImage.value;
        let prodDesc = prodDescription.value;
        let product_qty = quantity.value;
        let total_Price = price.value;

        if (isEmpty(product_Name)) {
            errorTost("Product Name is required");
        } else if (isEmpty(prodDesc)) {
            errorTost("Product product description is required");
        } else if (isEmpty(product_Code)) {
            errorTost("Product product_Code is required");
        } else if (isEmpty(image)) {
            errorTost("Product image is required");
        } else if (isEmpty(product_qty)) {
            errorTost("Product product_qty is required");
        } else if (isEmpty(total_Price)) {
            errorTost("Product total_Price is required");
        }
        else {
            loader.classList.remove("d-none");

            let postBody = {
                title: product_Name,
                description: prodDesc,
                code: product_Code,
                price: total_Price,
                quantity: product_qty,
                image: image,
            }

            Create(postBody).then((Result) => {
                loader.classList.add("d-none");
                console.log("|===================>", Result);
                if (Result === true) {
                    successTost("Data Successfully Created...");
                    productName.value = "";
                    productCode.value = "";
                    productImage.value = "";
                    quantity.value = "";
                    price.value = "";
                    navigate("/");
                } else {
                    errorTost("Data Created Failed..");
                }
            });
        }
    };
    return (
        <div>
            <div className="d-none" ref={(div) => (loader = div)}>
                <FullScreenLoader></FullScreenLoader>
            </div>

            <div className="container">
                <div className="card mt-5">
                    <div className="card-header font-weight-bold">
                        <h2>Add New Product</h2>
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
                                    ref={(input) => (prodDescription = input)}
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
                                <label className="form-label">Product Image (URL)</label>
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
                                    onClick={saveData}
                                    className=" btn btn-primary w-100"
                                >
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateForm;
