import { TabBar } from 'antd-mobile';
import React from 'react'
import LiveHome from './LiveHome'
import LiveInspiration from './LiveInspiration'
import LiveShop from './LiveShop'
import LiveMy from './LiveMy'




export default class LiveTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home',
     
    };
  }

 
  render() {
    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
        >
          <TabBar.Item
            title="首页"
            key="home"
            //选中
            icon={<i className='iconfont icon-home'></i>
            }
            //不选中
            selectedIcon={<i className='iconfont icon-home'></i>
            }
            selected={this.state.selectedTab === 'home'}
            
            onPress={() => {
              this.setState({
                selectedTab: 'home',
              });
            }}
            data-seed="logId"
          >
            <LiveHome/>
          </TabBar.Item>
          <TabBar.Item        
            title="灵感"
            key="灵感"
            icon={<i className='iconfont icon-linggan'></i>
            }
            //不选中
            selectedIcon={<i className='iconfont icon-linggan'></i>
            }
            
            selected={this.state.selectedTab === 'inspiration'}
            onPress={() => {
              this.setState({
                selectedTab: 'inspiration',
              });
            }}
            data-seed="logId1"
          >
            <LiveInspiration/>
            
          </TabBar.Item>
          <TabBar.Item
            
            title="商城"
            key="商城"
            icon={<i className='iconfont icon-shangcheng'></i>
            }
            //不选中
            selectedIcon={<i className='iconfont icon-shangcheng'></i>
            }
            
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
            }}
          >
            <LiveShop/>
            
          </TabBar.Item>
          <TabBar.Item
            icon={<i className='iconfont icon-wode'></i>
            }
            //不选中
            selectedIcon={<i className='iconfont icon-wode'></i>
            }
            title="我的"
            key="我的"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab',
              });
            }}
          >
           <LiveMy/>
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}