import React, { Component } from "react";
import {Form, Row, Col} from 'antd';
import DersComboBoxField from "../../common/dersComboBoxField";
import TextInputField from "../../common/textInputField";

class OgretmenCriteria extends Component { 

    render(){
        return(
            <div>
                <Form 
                className= "ogretmenCriteria"
                labelCol={{ span: 5 }} 
                layout="horizontal">
                    <Row>
                        <Col span={15}>
                            <TextInputField
                            label="Adı"
                            name="adi"
                            onChangeState={this.props.handleAdiChange}/>
                        </Col>
                        <Col span={6}>
                            <TextInputField
                            label="Soyadı"
                            name="soyadi"
                            onChangeState={this.props.handleSoyadiChange}/>
                        </Col>
                    </Row>
                    <Row>                        
                        <Col span={15}>
                            <DersComboBoxField
                            label="Branş"
                            name="ders"
                            onChangeState={this.props.handleDersChange}/>
                        </Col> 
                    </Row>
                </Form>
            </div>
        );
    }
}

export default OgretmenCriteria;