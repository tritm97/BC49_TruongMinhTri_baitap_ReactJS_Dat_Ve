import React, { Component } from 'react'

export default class SelectedSeat extends Component {
  render() {
    return (
      <div className='selected_seat'>
        <h1 className="firstChar_2">DANH SÁCH GHẾ BẠN CHỌN</h1>
        <div className="daDatGhe">
          <p><span></span>Ghế đã đặt</p>
        </div>
        <div className="dangChonGhe">
          <p><span></span>Ghế đang chọn</p>
        </div>
        <div className="chuaDatGhe">
          <p><span></span>Ghế chưa đặt</p>
        </div>
        <table className='table'>
          <tbody>
            <tr>
              <td>Số ghế</td>
              <td>Giá</td>
              <td>Huỷ</td>
            </tr>
            <tr>
              <td className='td_orange'>A1</td>
              <td className='td_orange'>75000</td>
              <td><button className='btn_huy'>X</button></td>
            </tr>
            <tr>
              <td>Tổng tiền</td>
              <td className='td_orange'>75000</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
