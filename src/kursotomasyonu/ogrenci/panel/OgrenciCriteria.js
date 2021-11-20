import React, { Component } from "react";
import {Form, Row, Col} from 'antd';
import TextInputField from "../../common/textInputField";
import NumberInputField from "../../common/numberInputField";

class OgrenciCriteria extends Component { 

    render(){
        return(
            <div>
                <Form 
                className= "ogrenciCriteria"
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
                            <NumberInputField
                                label="Numarası"
                                name="numarasi"
                                onChangeState={this.props.handleNumarasiChange}/>
                        </Col>
                    </Row>
                    <Row>                        
                        <Col span={15}>
                            <TextInputField
                                label="Soyadı"
                                name="soyadi"
                                onChangeState={this.props.handleSoyadiChange}/>
                        </Col> 
                        <Col span={6}>
                            <TextInputField
                            label="Adresi"
                            name="adresi"
                            onChangeState={this.props.handleAdresiChange}/>
                        </Col>
                    </Row>
                </Form>
            </div>
        );
    }
}

export default OgrenciCriteria;