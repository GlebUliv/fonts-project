import React, { Component } from 'react'
import Tab from '../Tab'
import TabContent from '../TabContent'
// import axiosFetch from '../../axios'

export default class App extends Component {
    state = {
        tabs: {},
        activeTab: 'my fonts',
        tabContent: {}
    }

    componentDidMount() {
        this.getTabs()
    }

    getTabs = () => {
        fetch('http://test-issue.ssv-design.com/main/tabs')
            .then((res) => res.json())
            .then((tabs) => {
                this.setState({ tabs })
                this.getTabContent(tabs[0].api)
            })
            .catch(function (error) {
                console.log('error', error)
            })
    }

    getTabContent = (apiURL) => {
        fetch(apiURL)
            .then((res) => res.json())
            .then((tabContent) => {
                this.setState({ tabContent })
            })
            .catch(function (error) {
                console.log('error', error)
            })
    }

    setActiveTab = (tabTitle, api) => {
        this.setState( {activeTab: tabTitle.toLowerCase()} )
        this.getTabContent(api)
    }

    renderTabs = (tabs, activeTab) => {

        const tabsContent = tabs.map((oneTab)=>{
            const { name, api } = oneTab;
            
            const showActTab = activeTab === name.toLowerCase() ? true : false;
            return (
                <Tab title={name} active={showActTab} onClick={()=> this.setActiveTab(name, api)}/>
            )
        })

        return tabsContent
        
    }

    render() {
        const { tabs, activeTab, tabContent } = this.state
        return (
            <div>
                <div className="widget">
                    <div className="wrapper">
                        <p className="title">Please select one font</p>
                        <div className="fonts-options">
                            {tabs.length > 0 && this.renderTabs(tabs, activeTab)}
                        </div>
                        <div className="clear"></div>
                        <div className="main-content">
                            {tabContent.length > 0  && <TabContent tabContent={tabContent} />}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}