import React, { Component } from "react";
import {Form, Row, Col} from 'antd';
import DersComboBoxField from "../../common/dersComboBoxField";
import NumberInputField from "../../common/numberInputField";
import OgretmenCombobox from "../../common/OgretmenCombobox";
import OgrenciCombobox from "../../common/OgrenciCombobox";
import GunComboBoxField from "../../common/gunComboBoxField";

class DersProgramiCriteria extends Component { 

    render(){
        return(
            <div>
                <Form 
                className= "dersProgramiCriteria"
                labelCol={{ span: 5 }} 
                layout="horizontal">
                    <Row>
                        <Col span={15}>
                            <DersComboBoxField
                            label="Ders"
                            name="dersAdi"
                            onChangeState={this.props.handleDersAdiChange}/>
                        </Col>
                        <Col span={6}>
                            <OgretmenCombobox
                                onChangeState={this.props.handleOgretmenChange} 
                                isOgretmenSuccess = {this.props.isOgretmenSuccess}/>
                        </Col>
                    </Row>
                    <Row>                        
                        <Col span={15}>
                            <NumberInputField
                                label="Başlangıç Saati"
                                name="baslangicSaati"
                                onChangeState={this.props.handleBaslangicSaatiChange}/>                          
                        </Col> 
                        <Col span={6}>
                            <NumberInputField
                                label="Bitiş Saati"
                                name="bitisSaati"
                                onChangeState={this.props.handleBitisSaatiChange}/>
                        </Col>
                    </Row>
                    <Row>                        
                        <Col span={15}>
                            <OgrenciCombobox
                                onChangeState={this.props.handleOgrenciChange}/>                       
                        </Col>
                        <Col span={6}>
                            <GunComboBoxField
                                label="Gün"
                                name="gun"
                                onChangeState={this.props.handleGunChange}/>
                        </Col>
                    </Row>
                </Form>
            </div>
        );
    }
}

export default DersProgramiCriteria;