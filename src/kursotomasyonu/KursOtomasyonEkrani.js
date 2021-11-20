import React from 'react';
import { Form } from 'antd';
import 'antd/dist/antd.css';
import { Tabs } from 'antd';
import OgretmenIslemleri from './ogretmen/action/OgretmenIslemleri';
import OgrenciIslemleri from './ogrenci/action/OgrenciIslemleri';
import DersProgramiIslemleri from './dersprogrami/action/DersProgramiIslemleri';

const { TabPane } = Tabs;

class KursOtomasyonEkrani extends React.Component {

    render() {
      return (
        <div>
          <Form className= "kursotomasyonu"
              labelCol={{ span: 3 }} 
              wrapperCol={{ span: 12 }}
              layout="horizontal">
              <Tabs defaultActiveKey="1">
                  <TabPane tab="Öğretmen İşlemleri" key="1">
                      <OgretmenIslemleri/>
                  </TabPane>
                  <TabPane tab="Öğrenci İşlemleri" key="2">
                      <OgrenciIslemleri/>
                  </TabPane>
                  <TabPane tab="Ders Programı İşlemleri" key="3">
                      <DersProgramiIslemleri/>
                  </TabPane>
              </Tabs>
          </Form>
        </div>
      );
    }
}


export default (KursOtomasyonEkrani);