import React from 'react';
import { Modal, Button } from 'antd';

export default function DeleteModal(props) {
    const { handleOk, handleCancel, isModalVisible } = props;
    return (
        <React.Fragment>
            <Modal
                title="You definitely want to delete?"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
            />
        </React.Fragment>
    );
}