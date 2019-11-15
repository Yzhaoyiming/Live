import React, { Component } from 'react'
import { NavBar,Carousel,Icon} from 'antd-mobile';
export default class LiveShop extends Component {
    constructor(){
        super();
        
        this.state={
            data:["桌","床","椅","几","柜","书架","沙发","家居饰品","户外家具","全部分类"],
            todo:["Top Art Studio 欧式风格精细...","顺顺工艺欧式风格塑料外框黑..."],
            price:["¥ 39.95","¥ 83.99"],
            
        }
    }
    render() {
        return (
            <div>
                <img src={require('../img/title.jpg')} style={{width:"100%"}}/>

               <NavBar
                style={{backgroundColor:'#3fcccb',color:'#fff',height:70,position:"relative"}}    
                >
                    <img src={require("../img/scar.jpg")} style={{width:35,position:"absolute",top:"35%",right:10}}/>

                    商城</NavBar>              
                    <div style={{ height: '35%', backgroundColor: '#fff'}}>
                    
                    

                    <Carousel
                        // style={{position:"relative" }}
                        autoplay={true}
                        infinite
                        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                        afterChange={index => console.log('slide to', index)}
                        >
                        
                        {[1,2,3,4].map(val => (
                            <a
                            key={val}
                            style={{ display: 'inline-block', width: '100%', height: "100%" ,position:"relative" }}
                            > 
                            <div style={{height:60,position:"absolute",top:"10%",left:"20%"}}>
                                <img src={require("../img/search.jpg")} style={{marginLeft:10,height:38,width:38}}/>
                                <input type="text" style={{width:170,height:40,backgroundColor:"#f5e9e2",borderRadius:"7%"}} placeholder="请输入关键字搜索"/>
                            </div>                           
                                <img
                                src={require("../img/banner.jpg")}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                // fire window resize event to change height
                                window.dispatchEvent(new Event('resize'));
                                this.setState({ imgHeight: 'auto' });
                                }}
                            />                      
                            </a>
                        ))}
                    </Carousel>
                       
                    </div>
                    <div style={{ height: '30%', backgroundColor: '#fff' ,textAlign:"center"}}>
                    {[0,1,2,3,4,5,6,7,8,9].map(val => (
                            <a
                            key={val}
                            style={{ display: 'inline-block', width: '17%', height:"100%" ,paddingTop:10,margin:5}}
                            >                            
                                <img
                                src={require("../img/"+val+".jpg")}
                                alt=""
                                style={{ width: '80%', verticalAlign: 'top' }}
                                
                            />
                            <div style={{fontSize:12,width:"79%",height:"5%",color:"black",textAlign:"center",paddingTop:10,paddingBottom:10}}>{this.state.data[val]}</div>                     
                            </a>
                        ))}
                    </div> 
                    <div>
                    {[0,1].map(val => (
                            <a
                            key={val}
                            style={{ display: 'inline-block', width: '44%', height:"100%",margin:10}}
                            >                            
                                <img
                                src={require("../img/cup"+val+".jpg")}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                
                            />
                            <div style={{fontSize:12,width:"110%",height:"5%",color:"black",textAlign:"center",paddingTop:10}}>{this.state.todo[val]}</div> 
                            <span style={{fontSize:12,width:"110%",height:"5%",color:"black",paddingBottom:5,paddingLeft:7}}>{this.state.price[val]}</span>                     

                            </a>
                        ))}
                    </div>                  

                    
            </div>
        )
    }
}
