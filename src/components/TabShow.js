import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import News from './Tab/News'
import TabTwo from './Tab/TabTwo'

const TapShow = props => {

  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }


  return (
    <div>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
            ข่าวประชาสัมพันธ์
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
          มูลนิธิและเพจช่วยเหลือสัตว์
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
            <News />
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <TabTwo />
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
}

export default TapShow;