import React, { Component } from 'react';

export default class TabContent extends Component {


    renderFirstFont = ({name, abbr, color}) => {
        return (
            <div className="left-box col-md-5">
                <div className="large-font">
                    <div className="font-color" style={{ background: color }}>
                        <span>{abbr}</span>
                    </div>
                    <p>{name}</p>
                </div>
            </div>
        )
    }

    renderSecondTwoFonts = () => {
        
    }
//selected-font
    showBuyFonts = (tabContent) => {
        return (
            <div className="row">
                { this.renderFirstFont(tabContent[0])}
                <div className="right-box col-md-7">
                    <div className="font-line">
                        <div className="font-color" style={{ background: "#FE7FC3" }}>
                            <span>r</span>
                        </div>
                        <p className="">Roboto doesn't compromise, allowing letters</p>
                    </div>
                    <div className="font-line">
                        <div className="font-color" style={{ background: "#046DFF" }}>
                            <span>ns</span>
                        </div>
                        <p>Noto Sans covers over 30 scripts</p>
                    </div>
                </div>
            </div>
        )
    }

    showMyFonts = ({ title, description }) => {
        return (
            <div>
                <div className="title-myfonts">
                    {title}
                </div>
                <div className="description">
                    {description}
                </div>
            </div>
        )
    }


    render() {
        const { tabContent } = this.props
        const content = tabContent[0].title ? this.showMyFonts(tabContent[0]) : this.showBuyFonts(tabContent)
        return content
    }
}