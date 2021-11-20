import React, { Component } from "react";
import {Form, Modal, Button} from 'antd';
import { ogrenciEkle , ogrenciList } from "../service/OgrenciService";
import {timeOutError, nullWarning} from '../../constants/constants'
import OgrenciListesi from "../panel/OgrenciListesi";
import OgrenciCriteria from "../panel/OgrenciCriteria";

const ogrenciFilterData = {
    id: null,
    numarasi: null,
    adi: null,
    soyadi: null,
    adresi: null,
};

class OgrenciIslemleri extends Component { 

    state = {
        data: ogrenciFilterData,
        ogrenciListesi: [],  
    };

    handleNumarasiChange(value) {
      let numarasi = value;
      ogrenciFilterData.numarasi = numarasi;
    };
    handleAdiChange(e) {
      let adi = e.target.value;
      ogrenciFilterData.adi = adi;
    };
    handleSoyadiChange(e) {
      let soyadi = e.target.value;
      ogrenciFilterData.soyadi = soyadi;
    };
    handleAdresiChange(e) {
      let adresi = e.target.value;
      ogrenciFilterData.adresi = adresi;
    };

    handleOgrenciEkle = (e) => {
      e.preventDefault();
      
      if(this.state.data.adi === null || this.state.data.soyadi === null || this.state.data.adresi === null || this.state.data.numarasi === null){
        nullWarning();
      }
      else{
        ogrenciEkle(this.state.data)
          .then(res => {
            if (res && res.data) {
              ogrenciEklendi();
              ogrenciList()
                .then(res => {
                  if(res &&res.data){
                    this.setState({
                      ...this.state,
                      ogrenciListesi: res.data
                    })
                  }else{
                    this.setState({
                      ...this.state,
                      ogrenciListesi: ogrenciFilterData
                    })
                  }
                })
                .catch(err => {
                  this.setState({
                    ...this.state,
                  });
                  timeOutError();
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
    }

    componentDidMount() {
        ogrenciList()
            .then(res => {
              if(res &&res.data){
                this.setState({
                  ...this.state,
                  ogrenciListesi: res.data
                })
              }else{
                this.setState({
                  ...this.state,
                  ogrenciListesi: ogrenciFilterData
                })
              }
            })
            .catch(err => {
              this.setState({
                ...this.state,
              });
              timeOutError();
          });
    };
    
    render(){

        return(
          <div>
            <h2>Öğrenci İşlemleri</h2>
            <OgrenciCriteria
              handleNumarasiChange={this.handleNumarasiChange}
              handleAdiChange={this.handleAdiChange}
              handleSoyadiChange={this.handleSoyadiChange}
              handleAdresiChange={this.handleAdresiChange}
            />
            <Form.Item wrapperCol={{ span: 15, offset: 2 }}>
              <Button onClick={this.handleOgrenciEkle} type="primary" htmlType="submit">
                Öğrenci Ekle
              </Button>
            </Form.Item> 
            <OgrenciListesi data = {this.state.ogrenciListesi}/>
          </div>
        );
    }
    
}

function ogrenciEklendi() {
  Modal.info ({
    title: 'Başarılı!',
    content: 'Öğrenci Eklendi.',
  });
}

export default (OgrenciIslemleri);