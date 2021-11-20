import React from "react";
import "antd/dist/antd.css";
import { Table } from "antd";

class DersProgramiListesi extends React.Component {
  render() {
    return (
      <div>
        <h2>Ders Programı Listesi</h2>
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
    title: "Ders",
    dataIndex: "dersAdi",
    width: 80,
  },
  {
    title: "Gün",
    dataIndex: "gun",
    width: 80,
  },
  {
    title: "Başlangıç Saati",
    dataIndex: "baslangicSaati",
    width: 80,
  },
  {
    title: "Bitiş Saati",
    dataIndex: "bitisSaati",
    width: 80,
  },
  {
    title: "Ders Alan Öğrenci",
    width: 80,
    render: (text, record) => (
      <p>{record.ogrenci.adi} {record.ogrenci.soyadi}</p>
    )
  },
  {
    title: "Öğretmen",
    width: 80,
    render: (text, record) => (
      <p>{record.ogretmen.adi} {record.ogretmen.soyadi}</p>
    )
  },
];

export default DersProgramiListesi;
