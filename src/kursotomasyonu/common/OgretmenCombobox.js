import React, { Component } from "react";
import { Form, Select } from "antd";
import { ogretmenList } from "../ogretmen/service/OgretmenService";
import {timeOutError} from '../constants/constants'

const { Option } = Select;

const initialData = {
  id: null,
  ad: "",
};

class OgretmenCombobox extends Component {
  state = {
    success: false,
    data: initialData,
    ogretmenListesi: [],
  };

  componentDidMount() {
    ogretmenList().then((res) => {
      console.log(res.data);
      if (res && res.data) {
        this.setState({
          ...this.state,
          success: true,
          ogretmenListesi: res.data,
        },
        async () => {
            this.props.isOgretmenSuccess(this.state.success);
        });
      } else {
        this.setState({
          ...this.state,
          ogretmenListesi: [],
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
      this.state.ogretmenListesi.map((ogretmen) => (
        <Option key={ogretmen.id}>{ogretmen.adi} {ogretmen.soyadi}</Option>
      ))
    );

    return (
      <Form.Item label="Öğretmen: " required={this.props.required}>
        <Select
          name="ogretmencombobox"
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

export default OgretmenCombobox;
