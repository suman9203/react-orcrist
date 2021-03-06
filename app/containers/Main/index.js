import React, {Component} from 'react';
import { Router, Route, Link, hashHistory } from 'react-router';
import Header from '../../components/Header/Header';
import '../../components/Header/Header.less';
import './style.less';
import IMG_ACE from './images/ace.jpg';


const headerCfg = {
  title: 'City Main',
  optionHandler: (e) => {
    console.log('i want it option');
  },
  backHandler: (e) => {
    console.log('i want it back');
  }
};

export default class Loading extends Component {

  render() {
    return (
      <div>
        <Header
          title={headerCfg.title}
          backHandler={headerCfg.backHandler}
          optionFlag={true}
          optionHandler={headerCfg.optionHandler.bind(this)}
        />
        <div className="main">
          <div>我是首页</div>
          <img className="loading-ace" src={IMG_ACE}/>
          <Link to='list' activeStyle={{color: 'red'}}>ListView</Link>
          &nbsp;&nbsp;&nbsp;
        </div>
        <ul>
          <li>12321</li>
          <li>12321</li>
        </ul>
      </div>
    )
  }
}
