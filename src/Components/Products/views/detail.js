import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

import { HistoryPush } from '../../../_helper/HistoryPush'

import ProductsModel from '../../../Models/ProductsModel'

const product_model = new ProductsModel()
export default class Detail extends Component {
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
                back: {
                    go: false,
                    path: '/product'
                }
            }
        }
    }

    componentDidMount() {
        this._fetchData()
    }

    async _fetchData() {
        const { product_no } = this.props.urlParams()
        let product = await product_model.getProductByCode({ product_no })
        if (product.require) {
            this.setState({
                product_code: product.data.product_code,
                product_no: product.data.product_no,
                product_name: product.data.product_name,
                product_detail: product.data.product_detail,
                product_price: product.data.product_price,
                product_image: product.data.product_image,
            })
        } else {
            Swal.fire('แจ้งเตือน', 'ไม่พบสินค้าที่คุณต้องการแก้ไข', 'error')
                .then(res => {
                    this.setState(this.props._historyManager(this.state.history, 'back'))
                })
        }
    }


    render() {
        return (
            <div className='col-md-12 card'>
                <div className='col-md-12 card-header pt-3 d-flex justify-content-between'>
                    <div className='col-md-10'>
                        <h3>Product Detail</h3>
                    </div>
                    <div className='col-md-2 d-flex justify-content-end'>
                        <Link className='btn btn-secondary' to={'/product'}>ย้อนกลับ</Link>
                    </div>
                </div>
                <div className='col-md-12 row card-body gap-3 ps-5'>
                    <div className='col-md-4 row'>
                        <label>รหัสสินค้า</label>
                        <input className='form-control-sm disabled' readOnly value={this.state.product_no} />
                    </div>
                    <div className='col-md-4 row'>
                        <label>ชื่อสินค้า</label>
                        <input className='form-control-sm disabled' readOnly value={this.state.product_name} />
                    </div>
                    <div className='col-md-4 row'>
                        <label>ราคาสินค้า</label>
                        <input className='form-control-sm disabled' readOnly value={this.state.product_price} />
                    </div>
                    <div className='col-md-12 row'>
                        <label>รายละเอียดสินค้า</label>
                        <textarea className='form-control-sm disabled' readOnly value={this.state.product_detail} ></textarea>
                    </div>
                </div>
                <HistoryPush {...this.state.history.back} />
            </div>
        )
    }
}
