import { Table } from "antd";

const MainTable = ({ data, columns }: { data: any; columns: any }) => {
    return <Table dataSource={data} columns={columns} rowKey={(k) => k._id} />;
};

export default MainTable;
