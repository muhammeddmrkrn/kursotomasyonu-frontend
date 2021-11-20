import React, { Component } from "react";
import {Form, Modal, Button} from 'antd';
import { dersProgramiEkle , dersProgramiList } from "../service/DersProgramiService";
import {timeOutError, nullWarning} from '../../constants/constants'
import DersProgramiListesi from "../panel/DersProgramiListesi";
import DersProgramiCriteria from "../panel/DersProgramiCriteria";

const dersProgramiFilterData = {
    id: null,
    dersAdi: null,
    baslangicSaati: null,
    bitisSaati: null,
    ogretmenId: null,
    gun: null,
    ogrenciId: null,
};

class DersProgramiIslemleri extends Component { 

    state = {
        data: dersProgramiFilterData,
        dersProgramiListesi: [],  
    };

    handleDersAdiChange(e) {
      let dersAdi = e;
      dersProgramiFilterData.dersAdi = dersAdi;
    };
    handleBaslangicSaatiChange(e) {
      let baslangicSaati = e;
      dersProgramiFilterData.baslangicSaati = baslangicSaati;
    };
    handleBitisSaatiChange(e) {
      let bitisSaati = e;
      dersProgramiFilterData.bitisSaati = bitisSaati;
    };
    handleOgretmenChange(e) {
      let ogretmenId = e;
      dersProgramiFilterData.ogretmenId = ogretmenId;
    };
    handleGunChange(e) {
      let gun = e;
      dersProgramiFilterData.gun = gun;
    };
    handleOgrenciChange(e) {
      let ogrenciId = e;
      dersProgramiFilterData.ogrenciId = ogrenciId;
    };

    handleDersProgramiEkle = (e) => {
      e.preventDefault();
      
      if(this.state.data.dersAdi === null || this.state.data.baslangicSaati === null 
        || this.state.data.bitisSaati === null || this.state.data.ogretmenId === null
        || this.state.data.gun === null || this.state.data.ogrenciId === null){
         nullWarning();
      }
      else{
        dersProgramiEkle(this.state.data)
          .then(res => {
            if (res && res.data) {
              dersProgramiEklendi();
              dersProgramiList()
                .then(res => {
                  if(res &&res.data){
                    this.setState({
                      ...this.state,
                      dersProgramiListesi: res.data,
                    })
                  }else{
                    this.setState({
                      ...this.state,
                      dersProgramiListesi: [],
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
  
    isOgretmenSuccess = (e) => {
      dersProgramiList()
            .then(res => {
              if(res &&res.data){
                this.setState({
                  ...this.state,
                  dersProgramiListesi: res.data
                })
              }else{
                this.setState({
                  ...this.state,
                  dersProgramiListesi: dersProgramiFilterData
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
            <h2>Ders Programı İşlemleri</h2>
            <DersProgramiCriteria
              handleDersAdiChange={this.handleDersAdiChange}
              handleBaslangicSaatiChange={this.handleBaslangicSaatiChange}
              handleBitisSaatiChange={this.handleBitisSaatiChange}
              handleOgretmenChange={this.handleOgretmenChange}
              handleGunChange={this.handleGunChange}
              handleOgrenciChange={this.handleOgrenciChange}
              isOgretmenSuccess = {this.isOgretmenSuccess}
            />
            <Form.Item wrapperCol={{ span: 15, offset: 2 }}>
              <Button onClick={this.handleDersProgramiEkle} type="primary" htmlType="submit">
                Ders Programı Ekle
              </Button>
            </Form.Item> 
            <DersProgramiListesi data = {this.state.dersProgramiListesi}/>
          </div>
        );
    }
    
}

function dersProgramiEklendi() {
  Modal.info ({
    title: 'Başarılı!',
    content: 'Ders Programı Eklendi.',
  });
}

export default (DersProgramiIslemleri);