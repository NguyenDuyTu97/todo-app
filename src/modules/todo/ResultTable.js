import React from 'react';
import { Table } from 'antd';
import PropTypes from 'prop-types';

ResultTable.propTypes = {};

function ResultTable(props) {

    const columns = [
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