import React, { useState } from 'react';
import ResultTable from "./ResultTable";
import Form from "./Form";
import { Button } from "antd";

function TodoApp(props) {
    const [list, setList] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [dataEdit, setDataEdit] = useState({});

    function onCloseForm() {
        setShowForm(false);
        setDataEdit({});
    }

    function onSave(model) {
        setList([...list, model]);
        onCloseForm();
    }

    function onDelete(data) {
        let res = list.filter(i => i.name !== data.name);
        setList(res);
    }

    function onEdit(data) {
        setShowForm(true);
        setDataEdit(data)
    }

    return (
        <div>
            <h3>Todo app</h3>
            <Button
                type="primary"
                onClick={() => setShowForm(true)}
            >
                Add
            </Button>
            <ResultTable
                dataSource={list}
                onEdit={onEdit}
                onDelete={onDelete}
            />
            {
                showForm && <Form
                    show={showForm}
                    close={onCloseForm}
                    onSave={onSave}
                    dataEdit={dataEdit}
                />
            }
        </div>
    );
}

export default TodoApp;