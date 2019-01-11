import React, {
	Component
} from 'react'
import {
	DatePicker
} from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import '../static/css/home.css'
import Header from '../Components/Header'
import StatusTabs from './StatusTabs';
import 'bootstrap/dist/css/bootstrap.css';
import { Menu, Dropdown, Icon } from 'antd';
import styled from 'styled-components';

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
const Flex = styled.div`
	display: flex;
`;	
const Tasks = styled.div`
	width: 100px;
	color: #cecece;
	background-color: #333;
	padding: 5px;
	font-size: 14px;
	text-transform: uppercase;
`;

const Simple = styled.div`
	text-transform : uppercase;
	border-right: 1px solid #ddd;
	font-size: 14px;
	padding: 5px 15px;
	color :#666;

`;
export default class Home extends Component {
	render() {
		return ( 
		<div class="container-fluid">
			<div className = "container px-0" >
				{/* Hello  */}
				{/* <DatePicker /> */}
				<Header/>
				<div>
					<Flex> 
						<Tasks> Tasks </Tasks>
						<Simple> Simple Request </Simple>
					</Flex>
					<Flex className="seperator">
						<div>
							<Tasks> Main </Tasks>
						</div>
						<Flex className="pr-3">
							<div className="pr-3"> who: </div>
							<Dropdown overlay={menu} trigger={['click']}>
								<a className="ant-dropdown-link" href="#">
									Company Person <Icon type="down" />
								</a>
							</Dropdown>
						</Flex>
					</Flex>
				</div>
				<StatusTabs/>
			</div> 
		</div>
		)
	}
}