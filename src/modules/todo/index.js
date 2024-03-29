import React, { useEffect, useState } from 'react';
import ResultTable from "./ResultTable";
import Form from "./Form";
import DeleteModal from "../../common/modal/DeleteModal";
import { success, error } from "../../common/modal/NotificationModal";
import { Button, Input, } from "antd";
import { PlusCircleOutlined, } from '@ant-design/icons';

const { Search } = Input;

function TodoApp(props) {
    const [list, setList] = useState(() => localStorage.getItem('listAccount') ? JSON.parse(localStorage.getItem('listAccount')) : []);
    const [listSearch, setListSearch] = useState([]);

    const [dataEdit, setDataEdit] = useState({});
    const [dataDelete, setDataDelete] = useState({});

    const [showForm, setShowForm] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);

    useEffect(() => {
        localStorage.setItem("listAccount", JSON.stringify(list));
    }, [list]);

    function onCloseForm() {
        setShowForm(false);
        setDataEdit({});
    }

    function onSave(model) {
        if (!model) return;

        let newList = [...list];
        let idxItem = newList.findIndex(l => l.uid === model.uid);
        if (idxItem > -1) {
            newList[idxItem] = model;
        }
        else {
            newList.push(model);
        }
        setList(newList);
        onCloseForm();
        success("The data has been saved successfully.");
    }

    function onCloseDeleteModal() {
        setIsModalVisible(false);
    }

    function onShowDeleteModal(data) {
        setIsModalVisible(true);
        setDataDelete(data);
    }

    function onDelete() {
        let newList = [...list];
        let res = newList.filter(i => i.uid !== dataDelete.uid);
        setList(res);
        setIsModalVisible(false);
        success("The data has been deleted successfully.")
    }

    function onEdit(data) {
        setShowForm(true);
        setDataEdit(data)
    }

    function onSearch(valueSearch) {
        let newList = [...list];
        let res = newList.filter(i => i.name.toLowerCase().includes(valueSearch.toLowerCase()));
        setListSearch(res);
    }

    return (
        <div className="container">
            <div className="header">
                <h3 className="title text-center mt-2">TODO APP</h3>
            </div>
            <div className="row justify-content-center">
                <div className="content col-10">
                    <div className="row mb-2">
                        <div className='col-10'>
                            <Search placeholder="search name" onSearch={onSearch} enterButton />
                        </div>

                        <div className="col-2">
                            <Button
                                type="primary"
                                block
                                onClick={() => setShowForm(true)}
                            >
                                <PlusCircleOutlined />
                                Add
                            </Button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <ResultTable
                                dataSource={list}
                                listSearch={listSearch}
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