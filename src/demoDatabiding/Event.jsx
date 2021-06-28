import React, { Component } from 'react'

export default class Event extends Component {
    // property
    hoVaTen = "Nguyễn Việt Bình";
    lop = "15DDS05031";

    hienThiThongTinSV = (mSSV) => {
        alert(`${this.hoVaTen} ${this.lop} `+ mSSV)
    }

    hienThi = (MonHoc) => {
        return(
            <ul>
                <li>{this.hoVaTen}</li>
                <li>{this.lop}</li>
                <li>{MonHoc}</li>
            </ul>
        )
    }
    render() {
        const mSSV = "15DDS0503101"
        const monHoc = "Toan"
        return (
            <div>
                {this.hienThi(monHoc)}
            <button onClick={()=>{this.hienThiThongTinSV(mSSV)}} >Nhấn đi</button>
            </div>
        )
    }
}
