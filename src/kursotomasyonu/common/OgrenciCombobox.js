import React, { Component } from "react";
import { Form, Select } from "antd";
import { ogrenciList } from "../ogrenci/service/OgrenciService";
import {timeOutError} from '../constants/constants'

const { Option } = Select;

const initialData = {
  id: null,
  ad: "",
};

class OgrenciCombobox extends Component {
  state = {
    success: false,
    data: initialData,
    ogrenciListesi: [],
  };

  componentDidMount() {
    ogrenciList().then((res) => {
      console.log(res.data);
      if (res && res.data) {
        this.setState({
          ...this.state,
          success: true,
          ogrenciListesi: res.data,
        });
      } else {
        this.setState({
          ...this.state,
          ogrenciListesi: [],
        });
      }
    })
    .catch(err => {
      this.setState({
        ...this.state,
      });
      timeOutError();
    });
  }

  render() {
    const listItems = [];
    listItems.push(<Option key={"null"} value={null}>&nbsp;</Option>);

    listItems.push(
      this.state.ogrenciListesi.map((ogrenci) => (
        <Option key={ogrenci.id}>{ogrenci.adi} {ogrenci.soyadi}</Option>
      ))
    );

    return (
      <Form.Item label="Öğrenci: " required={this.props.required}>
        <Select
          name="ogrencicombobox"
          onChange={this.props.onChangeState}
          style={{ width: 300 }}
          required={this.props.required}
        >
          {listItems}
        </Select>
      </Form.Item>
    );
  }
}

export default OgrenciCombobox;
