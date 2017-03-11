import React from 'react'
import { render } from 'react-dom'
import Root from './config/Root'
require('./base/base.less')

render(
  <Root />,
  document.getElementById('app')
)