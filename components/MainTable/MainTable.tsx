import { Table } from "antd";

const MainTable = ({ data, columns }: { data: any; columns: any }) => {
    return <Table dataSource={data} columns={columns} />;
};

export default MainTable;
