import React from "react";
import "antd/dist/antd.css";
import { Table } from "antd";

class OgretmenListesi extends React.Component {
  render() {
    return (
      <div>
        <h2>Öğretmen Listesi</h2>
        <Table 
          pagination={{ pageSize: 5 }}
          dataSource={this.props.data}
          columns={COLUMNS}
          rowKey={record => record.id}
        />
      </div>
    );
  }
}

const COLUMNS = [
  {
    title: "Adı",
    dataIndex: "adi",
    width: 80,
  },
  {
    title: "Soyadı",
    dataIndex: "soyadi",
    width: 80,
  },
  {
    title: "Branşı",
    dataIndex: "ders",
    width: 80,
  },
];

export default OgretmenListesi;
