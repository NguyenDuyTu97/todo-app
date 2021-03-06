import React from 'react';
import { Modal, Button } from 'antd';
import { useForm, ErrorMessage } from "react-hook-form";
import PropTypes from 'prop-types';

Form.propTypes = {

};

function Form(props) {

    const { register, errors, handleSubmit } = useForm();
    const onSubmit = values => {
        console.log(values);
        if (!values) return;
        props.onSave(values);
    }

    const { show, close } = props;

    return (
        <Modal
            title="Thêm mới thông tin"
            visible={show}
            onOk={handleSubmit(onSubmit)}
            // confirmLoading={confirmLoading}
            onCancel={close}
        >
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <label htmlFor="email">Name</label>
                        <input
                            name="name"
                            placeholder="Name"
                            ref={register}
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
                        {/* <br />
                        {errors.email && errors.email.message}
                        <br /> */}
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">age</label>
                        <input
                            name="age"
                            placeholder="Age"
                            ref={register}
                        // className={`form-control ${errors.password ? "is-invalid" : ""
                        //     }`}
                        // ref={register({
                        //     required: "Password is required",
                        //     validate: value => value.length < 3 || "Password must be 3 characters at minimum"
                        // })}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Address</label>
                        <input
                            name="address"
                            placeholder="Address"
                            ref={register}
                        />
                    </div>
                </form>
            </div>
        </Modal>

    );
}

export default Form;