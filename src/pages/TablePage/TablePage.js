import React from 'react';
import {columnsMock, tableMock} from "../../utils/data.utils";
import {AgoraDataTable} from "../../components/AgoraDataTable/AgoraDataTable";
import classes from './styles.module.scss';


const TablePage = () => {
    return (
        <div className={classes.container}>
            <AgoraDataTable data={tableMock} columns={columnsMock} pageSize={5}/>
        </div>
    );
};

export {TablePage};
