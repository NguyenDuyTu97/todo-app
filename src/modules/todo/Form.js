import React from 'react';
import { Modal, } from 'antd';
import { useForm, } from "react-hook-form";
import { checkEmptyObject, randomUid, } from "../../common";

function Form(props) {
    const { show, close, dataEdit = {} } = props;
    const { register, errors, handleSubmit } = useForm({
        defaultValues: dataEdit ? dataEdit : {}
    });
    const onSubmit = values => {
        if (!values) return;
        if (checkEmptyObject(dataEdit)) {
            values.uid = randomUid();
        }
        else {
            values = { ...values, uid: dataEdit.uid };
        };
        props.onSave(values);
    }

    return (
        <Modal
            title={checkEmptyObject(dataEdit) ? "Add new information" : "Edit information"}
            visible={show}
            onOk={handleSubmit(onSubmit)}
            // confirmLoading={confirmLoading}
            onCancel={close}
        >
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <div className="form-group">
                            <div className="row">
                                <label htmlFor="address" className="col-3">Uid:</label>
                                <input
                                    name="uid"
                                    placeholder="Uid"
                                    ref={register}
                                    className="col-9"
                                    disabled={true}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <label htmlFor="email" className="col-3">Name:</label>
                            <input
                                name="name"
                                placeholder="Name"
                                ref={register}
                                className="col-9"
                            // className={`form-control ${errors.email ? "is-invalid" : ""
                            //     }`}
                            // ref={register({
                            //     required: "Email is required",
                            //     pattern: {
                            //         value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            //         message: "Invalid email address format"
                            //     }
                            // })}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="row">
                            <label htmlFor="age" className="col-3">Age:</label>
                            <input
                                name="age"
                                placeholder="Age"
                                ref={register}
                                className="col-9"
                            // className={`form-control ${errors.password ? "is-invalid" : ""
                            //     }`}
                            // ref={register({
                            //     required: "Password is required",
                            //     validate: value => value.length < 3 || "Password must be 3 characters at minimum"
                            // })}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="row">
                            <label htmlFor="address" className="col-3">Address:</label>
                            <input
                                name="address"
                                placeholder="Address"
                                ref={register}
                                className="col-9"
                            />
                        </div>
                    </div>
                </form>
            </div>
        </Modal>

    );
}

export default Form;