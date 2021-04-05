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
            onCancel={close}
        >
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <div className="form-group">
                            <div className="row">
                                <label htmlFor="address" className="col-3">Uid:</label>
                                <div className="col-9">
                                    <input
                                        name="uid"
                                        placeholder="Uid"
                                        ref={register()}
                                        className="col-12"
                                        disabled={true}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <label htmlFor="email" className="col-3">Name:</label>
                            <div className="col-9">
                                <input
                                    name="name"
                                    placeholder="Name"
                                    ref={register({ required: true, maxLength: 100 })}
                                    className="col-12"
                                />
                                {errors.name && <p className="text-danger m-0">This field is required</p>}
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="row">
                            <label htmlFor="age" className="col-3">Age:</label>
                            <div className="col-9">
                                <input
                                    name="age"
                                    placeholder="Age"
                                    ref={register({ required: true, max: 500 })}
                                    className="col-12"
                                />
                                {errors.age && <p className="text-danger m-0">This field is required</p>}
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="row">
                            <label htmlFor="address" className="col-3">Address:</label>
                            <div className="col-9">
                                <input
                                    name="address"
                                    placeholder="Address"
                                    ref={register({ required: true })}
                                    className="col-12"
                                />
                                {errors.address && <p className="text-danger m-0">This field is required</p>}
                            </div>

                        </div>
                    </div>
                </form>
            </div>
        </Modal>

    );
}

export default Form;