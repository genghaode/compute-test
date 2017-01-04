/* 入口启动文件 */
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import RootApp from './containers/index'
import store from './redux/store'


const root = document.getElementById('app')

render( 
	<Provider store={store}>
		<RootApp />
	</Provider>, 
	root
)
