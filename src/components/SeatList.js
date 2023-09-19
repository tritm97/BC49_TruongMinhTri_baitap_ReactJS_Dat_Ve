import React, { Component } from "react";

export default class SeatList extends Component {
  render() {
    const arrGhe = this.props.arrGhe;
    const newArrGhe = [...arrGhe];

    const ghe1 = [];
    for (let item of newArrGhe[1].danhSachGhe) {
      ghe1.push(item.soGhe);
    }

    const ghe2 = [...ghe1];
    for (let item of newArrGhe[2].danhSachGhe) {
      ghe2.push(item.soGhe);
    }

    const ghe3 = [...ghe2];
    for (let item of newArrGhe[3].danhSachGhe) {
      ghe3.push(item.soGhe);
    }

    const ghe4 = [...ghe3];
    for (let item of newArrGhe[4].danhSachGhe) {
      ghe4.push(item.soGhe);
    }

    const ghe5 = [...ghe4];
    for (let item of newArrGhe[5].danhSachGhe) {
      ghe5.push(item.soGhe);
    }

    const ghe6 = [...ghe5];
    for (let item of newArrGhe[6].danhSachGhe) {
      ghe6.push(item.soGhe);
    }

    const ghe7 = [...ghe6];
    for (let item of newArrGhe[7].danhSachGhe) {
      ghe7.push(item.soGhe);
    }

    const ghe8 = [...ghe7];
    for (let item of newArrGhe[8].danhSachGhe) {
      ghe8.push(item.soGhe);
    }

    const ghe9 = [...ghe8];
    for (let item of newArrGhe[9].danhSachGhe) {
      ghe9.push(item.soGhe);
    }

    const ghe10 = [...ghe9];
    for (let item of newArrGhe[10].danhSachGhe) {
      ghe10.push(item.soGhe);
    }

    return (
      <div className="seat_list">
        <h1 className="firstChar">ĐẶT VÉ XEM PHIM CYBERLEARN.VN</h1>
        <p className="textManHinh">Màn hình</p>
        <div className="screen"></div>

        <div className="seats">
          {ghe10.map((seat) => {
            return (
              <span tabIndex="0" key={seat}>
                <button className="ghe">{seat}</button>
              </span>
            );
          })}
        </div>
      </div>
    );
  }
}
