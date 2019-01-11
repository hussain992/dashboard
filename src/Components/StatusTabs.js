import React, { Component } from 'react'
import { Tabs } from 'antd';
import Todo from './Todo';
import styled from 'styled-components';



const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0px;
`;

const StyledTab = styled.div`
  width: 33%;
  text-align : center;
  background-color: #cecece;
  text-transform: uppercase;
  position: relative;
  padding: 15px 0px;
  &.active {
    background-color: #444444;
    color: white;
  }
`;

const Tododiv = styled.div`
  &.triangle_right {
    position: absolute;
    right: -25px;
    width: 0;
    top:0px;
    height: 0;
    border-top: 26px solid transparent;
    border-left: 25px solid #444;
    border-bottom: 26px solid transparent;
    z-index : 2;
  }
`;
const ProgressDiv = styled.div`
  &.triangle_left {
    position: absolute;
    width: 0;
    height: 0;
    top: 0;
    border-left: 26px solid white;
    border-top: 26px solid #cecece;
    border-right: 26px solid #cecece;
    border-bottom: 26px solid #cecece;
  }
  &.triangle_right {
    position: absolute;
    right: -25px;
    width: 0;
    top:0px;
    height: 0;
    border-top: 26px solid transparent;
    border-left: 25px solid #cecece;
    border-bottom: 26px solid transparent;
    z-index : 2;
  }
`;
const Progdiv = styled.div `
  &.triangle_right {
    position: absolute;
    right: -25px;
    width: 0;
    top:0px;
    height: 0;
    border-top: 26px solid transparent;
    border-left: 25px solid #cecece;
    border-bottom: 26px solid transparent;
    z-index : 2;
  }
`;


function callback(key) {
	console.log(key);
}
export default class StatusTabs extends Component {
  render() {
    return (
      <div>
        <Flex>
          <StyledTab className="active">  
            to do  
            <Tododiv className="triangle_right" />
          </StyledTab>
          <StyledTab> 
            in progress 
            <ProgressDiv className="triangle_left" />
            <Progdiv className="triangle_right" />

          </StyledTab>
          <StyledTab> 
            done 
            <ProgressDiv className="triangle_left" />

          </StyledTab>
        </Flex>
        <Todo/>
        {/* <Tabs className="triangle_right triangle_left" defaultActiveKey="1" onChange={callback}>
          <TabPane tab="TO DO" key="1">
            <Todo/>
          </TabPane>
        	<TabPane tab="IN PROGRESS" key="2">Content of Tab Pane 2</TabPane>
        	<TabPane tab="DONE" key="3">Content of Tab Pane 3</TabPane>
        </Tabs>, */}
      </div>
    )
  }
}
