import React, { useState } from 'react';
import ResultTable from "./ResultTable";
import Form from "./Form";
import { Button } from "antd";
import PropTypes from 'prop-types';

TodoApp.propTypes = {

};

function TodoApp(props) {
    const [list, setList] = useState([]);
    const [showForm, setShowForm] = useState(false);

    function onCloseForm() {
        setShowForm(false);
    }

    function onSave(model) {
        setList([...list, model]);
        onCloseForm();
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
            />
            {
                showForm && <Form show={showForm} close={onCloseForm} onSave={onSave} />
            }
        </div>
    );
}

export default TodoApp;