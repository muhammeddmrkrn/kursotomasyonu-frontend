import React, { Component } from "react";
import {Form, Modal, Button} from 'antd';
import { ogretmenEkle , ogretmenList } from "../service/OgretmenService";
import {timeOutError, nullWarning} from '../../constants/constants'
import OgretmenListesi from "../panel/OgretmenListesi";
import OgretmenCriteria from "../panel/OgretmenCriteria";

const ogretmenFilterData = {
    id: null,
    adi: null,
    soyadi: null,
    ders: null,
};

class OgretmenIslemleri extends Component { 

    state = {
        data: ogretmenFilterData,
        ogretmenListesi: [],  
    };

    handleAdiChange(e) {
      let adi = e.target.value;
      ogretmenFilterData.adi = adi;
    };
    handleSoyadiChange(e) {
      let soyadi = e.target.value;
      ogretmenFilterData.soyadi = soyadi;
    };
    handleDersChange(value) {
      let ders = value;
      ogretmenFilterData.ders = ders;
    };

    handleOgretmenEkle = (e) => {
      e.preventDefault();
      
      if(this.state.data.adi === null || this.state.data.soyadi === null || this.state.data.ders === null){
        nullWarning();
      }
      else{
        ogretmenEkle(this.state.data)
          .then(res => {
            if (res && res.data) {
              ogretmenEklendi();
              ogretmenList()
                .then(res => {
                  if(res &&res.data){
                    this.setState({
                      ...this.state,
                      ogretmenListesi: res.data
                    })
                  }else{
                    this.setState({
                      ...this.state,
                      ogretmenListesi: ogretmenFilterData
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
        ogretmenList()
            .then(res => {
              if(res &&res.data){
                this.setState({
                  ...this.state,
                  ogretmenListesi: res.data
                })
              }else{
                this.setState({
                  ...this.state,
                  ogretmenListesi: ogretmenFilterData
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
            <h2>Öğretmen İşlemleri</h2>
            <OgretmenCriteria
              handleAdiChange={this.handleAdiChange}
              handleSoyadiChange={this.handleSoyadiChange}
              handleDersChange={this.handleDersChange}
            />
            <Form.Item wrapperCol={{ span: 15, offset: 2 }}>
              <Button onClick={this.handleOgretmenEkle} type="primary" htmlType="submit">
                Öğretmen Ekle
              </Button>
            </Form.Item> 
            <OgretmenListesi data = {this.state.ogretmenListesi}/>
          </div>
        );
    }
    
}

function ogretmenEklendi() {
  Modal.info ({
    title: 'Başarılı!',
    content: 'Öğretmen Eklendi.',
  });
}

export default (OgretmenIslemleri);