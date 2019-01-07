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

export default class Home extends Component {
	render() {
		return ( 
		<div class="container-fluid">
			<div className = "container px-0" >
				{/* Hello  */}
				{/* <DatePicker /> */}
				<Header/>
				<div>
					<div className="seperator">
						<div className="pr-3 pt-2"> who: </div>
						<Dropdown overlay={menu} trigger={['click']}>
							<a className="ant-dropdown-link" href="#">
								Company Person <Icon type="down" />
							</a>
						</Dropdown>
					</div>
				</div>
				<StatusTabs/>
			</div> 
		</div>
		)
	}
}