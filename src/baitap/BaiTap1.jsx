import React, { Component } from "react";

export default class BaiTap1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrFilm: [
                {
                    nameFilm: "Final Fantasy VII",
                    content:
                        "Final Fantasy VII: Hành trình của những đứa trẻ - Final Fantasy VII: Advent Children là bộ phim anime định dạng 3D được phát hành vào năm 2005 do đạo diễn Nomura Tetsuya và Nozue Takeshi đồng chịu trách nhiệm chỉ đạo. Tác phẩm được sản xuất bởi Kitase Yoshinori và Hashimoto Shinji",
                    poster: "./img/film/1.jpg",
                },
                {
                    nameFilm: "Vua Hải Tặc - One Piece",
                    content:
                        "Vua hải Tặc - One Piece là bộ phim hoạt hình Nhật Bản dựa trên loạt manga cùng tên của tác giả Eiichiro Oda. Tác phẩm do nhiều đạo diễn tham gia chỉ đạo với phần kịch bản",
                    poster: "./img/film/2.jpg",
                },
                {
                    nameFilm: "Lễ Hội Đặc Biệt Của Minions - Minions",
                    content:
                        "Lễ hội đặc biệt của Minions - Minions Holiday Special là đoạn phim ngắn gồm 4 phần, được hãng Illumination sản xuất, gồm 4 phần phim khác nhau được cắt ghép",
                    poster: "./img/film/3.jpg",
                },
                {
                    nameFilm: "Đảo Hải Tặc : GOLD",
                    content:
                        "One Piece Film Gold là bộ phim điện ảnh thứ 13 của thương hiệu One Piece. Bộ phim không chỉ dành riêng cho các fan One Piece mà cả những khán giả đại chúng cũng cảm thấy cực kỳ hứng thú khi xem bộ phim này.",
                    poster: "./img/film/4.jpg",
                },
                {
                    nameFilm: "Mùa Hè Của Luca",
                    content:
                        "Mùa hè của Luca - Luca (2021) là bộ phim hoạt hình thuộc thể loại hài hước, giả tưởng dành cho thiếu niên của Mỹ được sản xuất bởi Pixar Animation Studios và phân phối bởi Walt Disney",
                    poster: "./img/film/5.jpg",
                },
                {
                    nameFilm: "Boruto: Naruto Hậu Sinh Khả Úy",
                    content:
                        "Boruto: Naruto hậu sinh khả úy - Boruto: Naruto Next Generations còn được biết đến với cái tên Boruto, là bộ anime Nhật Bản",
                    poster: "./img/film/6.jpg",
                },
            ],
        };
    }
    renderListFilm = () => {
        return this.state.arrFilm.map((item, index) => {
            return (
                <div className="col-4" key={index}>
                    <div>
                        <img style={{ width: "80%", height: 320, objectFit: "center" }} src={item.poster} alt="" />
                    </div>
                    <div>
                        <h4>{item.nameFilm}</h4>
                        <p>{item.content.length > 100 ? item.content.substr(0, 100) + '...' : item.content}</p>
                    </div>
                </div>
            );
        });
    };
    render() {
        return (
            <div className="container">
                <div className="row">{this.renderListFilm()}</div>
            </div>
        );
    }
}
