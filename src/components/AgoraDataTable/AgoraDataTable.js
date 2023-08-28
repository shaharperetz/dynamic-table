import { Table} from 'antd';
import React, {useEffect, useMemo, useRef, useState} from 'react';
import classes from './styles.module.scss'
import 'react-resizable/css/styles.css'; // Import react-resizable styles
import './table.scss'
import {storeWidthPreferences} from "../../utils/data.utils";
import {ResizableTitle} from "../ResizableTitle/ResizableTitle";
import {getColumnSearchProps} from "../../utils/table.utils";


const AgoraDataTable = (props) => {
    const [columns, setColumns] = useState(props.columns);
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);

    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        setSearchedColumn(dataIndex);
        confirm();
        setSearchText(selectedKeys[0]);
    };

    const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText('');
    };


    useEffect(() => {
        storeWidthPreferences(columns);
    }, [columns]);

    const handleResize = (index) => (e, { size }) => {
        e.stopPropagation()
        const nextColumns = [...columns];
        nextColumns[index] = {
            ...nextColumns[index],
            width: size.width,
        };
        setColumns(nextColumns);
    };

    const resizableColumns = useMemo(() => columns.map((col, index) => ({
        ...col,
        ...getColumnSearchProps(
            col.key,
            searchInput,
            handleSearch,
            handleReset,
            setSearchText,
            setSearchedColumn,
            searchedColumn,
            searchText),
        onHeaderCell: (column) => ({
            width: column.width,
            onResize: handleResize(index),
        }),
    })),[columns, searchedColumn, searchText]);

    const components = {
        header: {
            cell: ResizableTitle,
        }
    }

    return (
        <div className={classes.tableContainer}>
        <Table dataSource={props.data} columns={resizableColumns} pagination={{pageSize: props.pageSize}} components={components} />
        </div>
    );
};

export {AgoraDataTable};
