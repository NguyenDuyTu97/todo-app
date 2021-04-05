import React from 'react';
import { Table, Button, Tooltip, } from 'antd';
import { EditOutlined, DeleteOutlined, } from '@ant-design/icons';

function ResultTable(props) {
    const {
        onEdit, onShowDeleteModal, dataSource = [], listSearch = [],
    } = props;

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
            title: 'Action',
            key: 'action',
            width: 200,
            render: (text, row, index) => <div>
                <Tooltip placement="top" title={"Edit"}>
                    <Button type="primary" onClick={() => onEdit(row)}>
                        <EditOutlined />
                    </Button>
                </Tooltip>
                <Tooltip placement="top" title={"Delete"}>
                    <Button type="primary" danger onClick={() => onShowDeleteModal(row)}>
                        <DeleteOutlined />
                    </Button>
                </Tooltip>
            </div>,
        },
    ];

    return (
        <div>
            <Table
                dataSource={listSearch.length > 0 ? listSearch : dataSource}
                columns={columns}
            />
        </div>
    );
}

export default ResultTable;