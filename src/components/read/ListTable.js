import React, { useEffect, useState } from "react";
import { Delete, Read } from "../../APIServices/CRUDServices";
import FullScreenLoader from "../common/FullScreenLoader";
import "../../assets/css/style.css";
import { errorTost } from "../../helper/ValidationHelper";
import { useNavigate } from "react-router-dom";

const ListTable = () => {
    const navigate = useNavigate();
    let [dataList, setDataList] = useState([]);

    useEffect(() => {
        Read().then((Result) => {
            setDataList(Result);
        });
    }, []);

    //CRUD 19
    const deleteItem = (id) => {
        Delete(id).then((result) => {
            if (result === true) {
                errorTost("Data Successfully Deleted");
                navigate(0);
            } else {
                errorTost("Delete failed try again");
            }
        });
    };

    const updateItem = (id) => {
        navigate("/update/" + id);
    };

    if (dataList.length > 0) {
        return (
            <div>
                <div className="card m-5">
                    <div className="card-header">
                        <h2>My Product List ({dataList.length})</h2>
                    </div>
                    <div className="">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th> S.N. </th>
                                    <th> Product Name </th>
                                    <th> Description</th>
                                    <th> Price </th>
                                    <th> Quantity </th>
                                    <th> Product Code </th>
                                    <th> Image </th>
                                    <th> Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                {dataList.map((item, i) => {
                                    return (
                                        <tr key={i}>
                                            <td>{i}</td>
                                            <td>{item.title}</td>
                                            <td>{item.description}</td>
                                            <td>{item.price}</td>
                                            <td>{item.quantity}</td>
                                            <td>{item.code}</td>
                                            <td>
                                                <img
                                                    className="list-img"
                                                    src={item.image}
                                                    alt={item.image}
                                                />
                                            </td>
                                            <td>
                                                <div
                                                    className="btn-group"
                                                    role="group"
                                                >
                                                    <button
                                                        onClick={updateItem.bind(
                                                            this,
                                                            item._id
                                                        )}
                                                        className="btn btn-success btn-sm "
                                                    >
                                                        <i className="fa-regular fa-pen-to-square"></i>{" "}
                                                    </button>
                                                    <button
                                                        onClick={deleteItem.bind(
                                                            this,
                                                            item._id
                                                        )}
                                                        className="btn btn-danger btn-sm "
                                                    >
                                                        <i className="fa-regular fa-trash-can"></i>{" "}
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div>
                <FullScreenLoader></FullScreenLoader>
            </div>
        );
    }
};

export default ListTable;
