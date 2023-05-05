import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

import { HistoryPush } from '../../../_helper/HistoryPush'

import ProductsModel from '../../../Models/ProductsModel'

const product_model = new ProductsModel()

class Update extends Component {
    constructor() {
        super()
        this.state = {
            product_code: '',
            product_no: '',
            product_name: '',
            product_detail: '',
            product_price: '',
            product_image: '',

            history: {
                back : {
                    go: false,
                    path: '/product'
                }
            }
        }
    }

    componentDidMount(){
        this._fetchData()
    }

    async _fetchData(){
        const { product_no } = this.props.urlParams()
        let product = await product_model.getProductByCode({product_no})
        if (product.require) {
            this.setState({
                product_code: product.data.product_code,
                product_no: product.data.product_no,
                product_name: product.data.product_name,
                product_detail: product.data.product_detail,
                product_price: product.data.product_price,
                product_image: product.data.product_image,
            })
        }else{
            Swal.fire('แจ้งเตือน', 'ไม่พบสินค้าที่คุณต้องการแก้ไข', 'error')
            .then(res=>{
                this.setState(this.props._historyManager(this.state.history, 'back'))
            })
        }
    }

    async _onSubmit() {
        if (this._checkSubmit()) {
            const res = await product_model.updateProductByCode({
                product_code: this.state.product_code,
                product_no: this.state.product_no,
                product_name: this.state.product_name,
                product_detail: this.state.product_detail,
                product_price: this.state.product_price,
                product_image: this.state.product_image,
            })

            if (res.require) {
                Swal.fire('แจ้งเตือน', 'ดำเนินการสำเร็จ', 'success')
                .then(res=>{
                    this.setState(this.props._historyManager(this.state.history, 'back'))
                })
            } else {
                Swal.fire('แจ้งเตือน', 'เกิดข้อผิดพลาด', 'error')
            }
        }
    }

    _checkSubmit() {
        if (this.state.product_no.length < 1) {
            Swal.fire('แจ้งเตือน', 'กรุณาระบุรหัสสินค้า', 'warning')
            return false
        }
        else if (this.state.product_name.length < 1) {
            Swal.fire('แจ้งเตือน', 'กรุณาระบุชื่อสินค้า', 'warning')
            return false
        }
        else if (this.state.product_detail.length < 1) {
            Swal.fire('แจ้งเตือน', 'กรุณาระบุรายละเอียดสินค้า', 'warning')
            return false
        }
        else if (this.state.product_price.length < 1) {
            Swal.fire('แจ้งเตือน', 'กรุณาระบุราคาสินค้า', 'warning')
            return false
        }
        else {
            return true
        }
    }

    render() {
        return (
            <div className='col-md-12 card'>
                <div className='col-md-12 card-header pt-3 d-flex justify-content-between'>
                    <div className='col-md-10'>
                        <h3>Product Update</h3>
                    </div>
                    <div className='col-md-2 d-flex justify-content-end'>
                        <Link className='btn btn-secondary' to={'/product'}>ย้อนกลับ</Link>
                    </div>
                </div>
                <div className='col-md-12 row card-body gap-3 ps-5'>
                    <div className='col-md-4 row'>
                        <label>รหัสสินค้า</label>
                        <input className='form-control-sm' value={this.state.product_no} onChange={e => this.setState({ product_no: e.target.value })} />
                    </div>
                    <div className='col-md-4 row'>
                        <label>ชื่อสินค้า</label>
                        <input className='form-control-sm' value={this.state.product_name} onChange={e => this.setState({ product_name: e.target.value })} />
                    </div>
                    <div className='col-md-4 row'>
                        <label>ราคาสินค้า</label>
                        <input className='form-control-sm' value={this.state.product_price} onChange={e => this.setState({ product_price: e.target.value })} />
                    </div>
                    <div className='col-md-12 row'>
                        <label>รายละเอียดสินค้า</label>
                        <textarea className='form-control-sm' value={this.state.product_detail} onChange={e => this.setState({ product_detail: e.target.value })} ></textarea>
                    </div>
                </div>
                <div className='card-footer col-md-12 d-flex justify-content-end gap-2'>
                    <button
                        className='btn btn-primary'
                        onClick={() => this.setState(
                            {
                                product_name: '',
                                product_detail: '',
                                product_price: '',
                                product_image: '',
                            }
                        )}
                    >ล้างข้อมูล</button>
                    <button
                        className='btn btn-success'
                        onClick={()=>this._onSubmit()}
                    >ยืนยัน</button>
                </div>
                <HistoryPush {...this.state.history.back} />
            </div>
        )
    }
}

export default Update