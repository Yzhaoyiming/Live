import React, { Component } from 'react'
import { NavBar, Icon,Tabs} from 'antd-mobile';
const tabs = [
    { title: '推荐'},
    { title: '冬季' },
    { title: '宜家'},
    { title: '小清新'},
    { title: '小户型'},
    { title: '个性色彩'},


  ];
export default class LiveInspiration extends Component {
    render() {
        return (
            <div>
                <img src={require('../img/title.jpg')} style={{width:"100%"}}/>

               <NavBar
                style={{backgroundColor:'#3fcccb',color:'#fff',height:70}}
                rightContent={[
                <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                ]}
                >灵感</NavBar>   
                {/* tab切换 */}
                <Tabs tabs={tabs}
                //设置默认页
                    initialPage={0}
                    onChange={(tab, index) => { console.log('onChange', index, tab); }}
                    onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                ></Tabs>  
                {/* 商品框*/}
                    <div style={{ height: '30%', backgroundColor: '#fff' ,textAlign:"center"}}>
                    {[1,2,3,4,5,6].map(val => (
                        <a key={val}
                            style={{ display: 'inline-block', width: '42%', height:"100%" ,marginLeft:10,marginRight:10}}>                            
                                <img
                                src={require("../img/shop"+val+".jpg")}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}   
                            />
                            <div style={{width:"100%",height:"5%",color:"black",position:"relative",paddingTop:10,paddingBottom:10}}>
                                <img src={require("../img/head"+val+".jpg")} style={{height:"60%",position:"absolute",left:5}}/>                       
                                橙色律动{val}
                                <img src={require("../img/xin.jpg")} style={{height:"40%",position:"absolute",right:5}}/>

                            </div>                      
                        </a>
                        ))}
                    </div>                                      
            </div>
        )
    }
        
}
