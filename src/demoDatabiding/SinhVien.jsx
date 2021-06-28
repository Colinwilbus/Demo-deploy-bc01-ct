import React, { Component } from 'react'

export default class SinhVien extends Component {
    // thuộc tính 
    hoTen = "Nguyễn Việt Bình";
    lop = "15DDS0503101";

    hienThiThongTinSinhVien =(TrungTam)=> {
        return(
            <ul>
                <li>Họ Tên {this.hoTen}</li>
                <li> Lớp {this.lop}</li>
                <li>{TrungTam}</li>
            </ul>
        )
    };
    // phương thức
    render() {
        const trungTam = "CyBerSoft";
        return (
            <div>
                {this.hienThiThongTinSinhVien(trungTam)}
            </div>
        )
    }
}
