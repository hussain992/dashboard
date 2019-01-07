import React, { Component } from 'react'
import { Table } from 'reactstrap';
import {map} from 'lodash'
import { Menu, Dropdown, Icon } from 'antd';
import {
	DatePicker
} from 'antd';
import moment from 'moment';

const dateFormat = 'DD-MMM-YYYY';
const { MonthPicker, RangePicker } = DatePicker;

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="#">John Smith</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="#">Miller Millan</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);

let tableData = [
  {
    workflow: 'Test 132',
    img: '/img/no-pic.png',
    brand: 'Part two',
    nameImg: '/img/couch.png',
    name: ' 000 66copy of 39533',
    number: 'xxxx01',
    task: 'dslfjklsda-1'
  },
  {
    workflow: 'Test 132',
    img: '/img/no-pic.png',
    brand: 'Part two',
    nameImg: '/img/couch.png',
    name: ' 000 66copy of 39533',
    number: 'xxxx01',
    task: 'dslfjklsda-1'
  },
  {
    workflow: 'Test Kvadrat',
    img: '/img/no-pic.png',
    brand: 'Part two',
    nameImg: '/img/couch.png',
    name: ' 000 66copy of 39533',
    number: 'xxxx01',
    task: 'dslfjklsda-1'
  },
  {
    workflow: 'Test Kvadrat',
    img: '/img/no-pic.png',
    brand: 'Part two',
    nameImg: '/img/couch.png',
    name: ' 000 66copy of 39533',
    number: 'xxxx01',
    task: 'dslfjklsda-1'
  },
  {
    workflow: 'Test Kvadrat',
    img: '/img/no-pic.png',
    brand: 'Part two',
    nameImg: '/img/couch.png',
    name: ' 000 66copy of 39533',
    number: 'xxxx01',
    task: 'dslfjklsda-1'
  },
  {
    workflow: 'DBN 08a',
    img: '/img/no-pic.png',
    brand: 'Part two',
    nameImg: '/img/couch.png',
    name: ' 000 66copy of 39533',
    number: 'xxxx01',
    task: 'dslfjklsda-1'
  },
  {
    workflow: 'DBN 08a',
    img: '/img/no-pic.png',
    brand: 'Part two',
    nameImg: '/img/couch.png',
    name: ' 000 66copy of 39533',
    number: 'xxxx01',
    task: 'dslfjklsda-1'
  },
]
export default class Todo extends Component {
  namecolor(item) {
    if (item.workflow === "Test 132") {
      return '#e4d0cc'
    }
    else if (item.workflow === "Test Kvadrat"){
      return '#f2db85'
    }
    else if (item.workflow === "DBN 08a") {
      return '#afbfae'
    }
  }
  render() {
    return (
      <div>
       <Table striped bordered>
        <thead>
          <tr className="custom">
            <th style={{width: '13  0px'}}>WORKFLOW</th>
            <th>IMG</th>
            <th>BRAND</th>
            <th>NAME</th>
            <th>NUMBER</th>
            <th>TASK</th>
            <th style={{width: '180px'}}>ASSIGNED TO </th>
            <th style={{width: '100px'}}>DEADLINE</th>
            <th>IN PROGRESS</th>
            <th>DONE</th>
          </tr>
        </thead>
        <tbody>
          {
            map(tableData, (item, i) => (
              <tr>
                <td scope="row" style={{backgroundColor: this.namecolor(item) }}> {item.workflow}</td>
                <td>
                  <img width="30px" src={item.img} />
                </td>
                <td>
                  {item.brand}
                </td>
                <td style={{width: '140px'}}>
                  {/* <div className="w100"> */}
                    <p className="text-left" style={{lineHeight: '1.6'}}>
                      <img width="20px" height="20px" style={{float: 'left', marginRight: '10px'}} src={item.nameImg} />
                      {item.name}
                    </p>
                  {/* </div> */}
                </td>
                <td>
                  {item.number}
                </td>
                <td>
                  {item.task}
                </td>
                <td className="px-1">
                  <Dropdown overlay={menu} trigger={['click']}>
                      <a className="ant-dropdown-link" href="#">
                        Company Contact Person <Icon type="down" />
                      </a>
                  </Dropdown>
                </td>
                <td className="date">
                   <DatePicker allowClear='false' defaultValue={moment('07-Dec-2015', dateFormat)} format={dateFormat} />
                </td>
                <td>
                  <div className="progress-btn">in progress </div>
                </td>
                <td>
                  <div className="done-btn"> done </div>
                </td>
              </tr>
            ))
          }
          {/* <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr> */}
        </tbody>
      </Table>
      </div>
    )
  }
}
