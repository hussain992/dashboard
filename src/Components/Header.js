import React, { Component } from 'react'
import '../static/css/home.css'
import {map} from 'lodash'


const menuOptions = [
	{
		img: '/img/menu-icon/three-bars-graph.png',
		title: 'Dashboard',
	},
	{
		img: '/img/menu-icon/sofa.png',
		title: 'Styles',
	},
	{
		img: '/img/menu-icon/circular-button-with-four-dots-of-holes.png',
		title: 'Items',
	},
	{
		img: '/img/menu-icon/price-tag.png',
		title: 'Prices',
	},
	{
		img: '/img/menu-icon/order.png',
		title: 'Order',
	},
	{
		img: '/img/menu-icon/school-calendar.png',
		title: 'Reports',
	},
	{
		img: '/img/menu-icon/promotion.png',
		title: 'Marketing',
	},
	{
		img: '/img/menu-icon/settings-work-tool.png',
		title: 'Admin',
	},
]

export default class Header extends Component {
  render() {
    return (
		<div className="black-bg">
			<div className="header-options">
				<div className="menu-list">
				{
					map(menuOptions,(item, i) =>(
					<div style={{backgroundColor: item.title === "Dashboard" ? '#333' : ''}} className="menu-items">
						<img src={item.img} alt="no-img"/>
						<div className="menu-name"> {item.title} </div>
					</div>
				))}
				</div>
				<div className="options pr-2">
					<a href="#"> Help</a>
					<div> | </div>
					<a href="#"> John Smith </a>
					<div> | </div>
					<a href="#"> Logout </a>
				</div>
			</div>
		</div>
    )
  }
}
