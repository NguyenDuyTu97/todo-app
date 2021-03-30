import React from 'react';
import { Table, Button, } from 'antd';

function ResultTable(props) {
    const { onEdit, onShowDeleteModal, } = props;

    const columns = [
        {
            title: 'Uid',
            dataIndex: 'uid',
            key: 'uid',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'CN',
            key: 'operation',
            fixed: 'right',
            width: 200,
            render: (text, row, index) => <div>
                <Button type="primary" onClick={() => onEdit(row)}>
                    Edit
                </Button>
                <Button type="primary" danger onClick={() => onShowDeleteModal(row)}>
                    Delete
                </Button>
            </div>,
        },
    ];

    const { dataSource = [] } = props;
    return (
        <div>
            <Table
                dataSource={dataSource}
                columns={columns}
            />
        </div>
    );
}

export default ResultTable;