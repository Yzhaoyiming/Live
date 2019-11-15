import React, { Component } from 'react'
import { NavBar,Carousel} from 'antd-mobile';

export default class LiveMy extends Component {
    render() {
        return (
            <div>
                <img src={require('../img/title.jpg')} style={{width:"100%"}}/>

               <NavBar
                style={{backgroundColor:'#3fcccb',color:'#fff',height:70}}
                
                >我的</NavBar>              
                    <div style={{ height: '35%', backgroundColor: '#fff' }}>

                    <Carousel
                        autoplay={true}
                        infinite
                        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                        afterChange={index => console.log('slide to', index)}
                        >
                        {[1,2].map(val => (
                            <a
                            key={val}
                            style={{ display: 'inline-block', width: '100%', height: "100%" }}
                            >                            
                                <img
                                src={require("../img/lunbo"+val+".png")}
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
                    {[1,2,3].map(val => (
                            <a
                            key={val}
                            style={{ display: 'inline-block', width: '27%', height:"100%" ,margin:10}}
                            >                            
                                <img
                                src={require("../img/block"+val+".jpg")}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                
                            />                      
                            </a>
                        ))}
                    </div>
                    {/* 热门推荐 */}
                    <div style={{backgroundColor:"#fff",height:"70%"}}>
                        <div style={{fontSize:"20px",height:40}}><span style={{backgroundColor:"#3fcccb",width:"5%",height:"80%",marginRight:5}}>_</span> 热门推荐</div>
                        <div style={{textAlign:"center",position:"relative"}}>
                            <img src={require("../img/yinglun.jpg")} style={{width:"100%",height:"100%"}}/>
                            <span style={{position:"absolute",width:"100%",height:30,bottom:0,left:0,color:"white",fontSize:15}}>什么是英伦装修风格 英伦风家装 英伦风装修效果图</span>

                        </div>
                    </div>

                    
            </div>
        )
    }
}
