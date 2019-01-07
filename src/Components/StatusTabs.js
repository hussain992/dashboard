import React, { Component } from 'react'
import { Tabs } from 'antd';
import Todo from './Todo';

const TabPane = Tabs.TabPane;

function callback(key) {
	console.log(key);
}
export default class StatusTabs extends Component {
  render() {
    return (
      <div>
        <Tabs defaultActiveKey="1" onChange={callback}>
        	<TabPane tab="TO DO" key="1">
            <Todo/>
          </TabPane>
        	<TabPane tab="IN PROGRESS" key="2">Content of Tab Pane 2</TabPane>
        	<TabPane tab="DONE" key="3">Content of Tab Pane 3</TabPane>
        </Tabs>,
      </div>
    )
  }
}
