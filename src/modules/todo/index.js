import React, { useState } from 'react';
import ResultTable from "./ResultTable";
import Form from "./Form";
import DeleteModal from "../../common/modal/DeleteModal";
import { Button } from "antd";

function TodoApp(props) {
    const [list, setList] = useState(() => localStorage.getItem('listAccount') ? JSON.parse(localStorage.getItem('listAccount')) : []);
    const [showForm, setShowForm] = useState(false);
    const [dataEdit, setDataEdit] = useState({});
    const [dataDelete, setDataDelete] = useState({});
    const [isModalVisible, setIsModalVisible] = useState(false);


    function onCloseForm() {
        setShowForm(false);
        setDataEdit({});
    }

    function onSave(model) {
        let listUpdate = [];
        let idxItem = list.findIndex(l => l.uid === model.uid);
        if (idxItem > -1) {
            list[idxItem] = model;
            listUpdate = list;
        }
        else {
            listUpdate = [...list, model];
        }
        setList(listUpdate);
        localStorage.setItem("listAccount", JSON.stringify(listUpdate));
        onCloseForm();
    }

    function onCloseDeleteModal() {
        setIsModalVisible(false);
    }

    function onShowDeleteModal(data) {
        setIsModalVisible(true);
        setDataDelete(data);
    }

    function onDelete() {
        let res = list.filter(i => i.name !== dataDelete.name);
        setList(res);
        setIsModalVisible(false);
        localStorage.setItem("listAccount", JSON.stringify(res));
    }

    function onEdit(data) {
        setShowForm(true);
        setDataEdit(data)
    }

    return (
        <div className="container">
            <div className="header">
                <h3 className="title text-center mt-2">TODO APP</h3>
            </div>
            <div className="row justify-content-center">
                <div className="content col-8">
                    <div className="row justify-content-end">
                        <div className="col-12">
                            <Button
                                type="primary"
                                onClick={() => setShowForm(true)}
                            >
                                Add
                            </Button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <ResultTable
                                dataSource={list}
                                onEdit={onEdit}
                                onShowDeleteModal={onShowDeleteModal}
                            />
                            {
                                showForm && <Form
                                    show={showForm}
                                    close={onCloseForm}
                                    onSave={onSave}
                                    dataEdit={dataEdit}
                                />
                            }
                            {
                                isModalVisible && <DeleteModal
                                    isModalVisible={isModalVisible}
                                    handleOk={onDelete}
                                    handleCancel={onCloseDeleteModal}
                                />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TodoApp;