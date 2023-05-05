import React, { Component } from 'react'
import ProductsModel from '../../../Models/ProductsModel'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

const product_model = new ProductsModel()

export default class View extends Component {
    constructor(props) {
        super(props)

        this.state = {
            products : [],
            products_list : [],
            keyword: "",
        }
    }

    componentDidMount(){
        this._fetchData()
    }

    async _fetchData(){
        const products_list = await product_model.getProductsBy()

        this.setState({
            products: products_list.data,
            products_list: products_list.data
        })

    }

    _onSearch(){
        let { products } = this.state
        products = products.filter(item => {
            return (
                item.product_no.toLowerCase().includes(this.state.keyword.toLowerCase()) ||
                item.product_name.toLowerCase().includes(this.state.keyword.toLowerCase()) ||
                item.product_detail.toLowerCase().includes(this.state.keyword.toLowerCase()) ||
                item.product_price.toLowerCase().includes(this.state.keyword.toLowerCase())
            )
        })
        this.setState({
            products_list: products
        })
    }

    _onDeleteProduct(code){
        Swal.fire({
            title: 'แจ้งเตือน', 
            text: 'คุณแน่ใจแล้วหรือไม่ที่จะลบสินค้าชิ้นนี้?', 
            icon: 'question',
            showConfirmButton: true,
            showCancelButton: true,
        })
        .then(async res=>{
            if(res.isConfirmed){
                const res = await product_model.deleteProductByCode({product_code : code})
                if (res.require) {
                    Swal.fire('แจ้งเตือน', 'ดำเนินการสำเร็จ', 'success')
                    this._fetchData()
                } else {
                    Swal.fire('แจ้งเตือน', 'เกิดข้อผิดพลาด', 'error')
                    this._fetchData()
                }
            }
        })
    }

    render() {
        return (
            <div className='col-md-12'>
                <div className='col-md-12 d-flex justify-content-between mb-3 pb-2'>
                    <div className='col-md-6 d-flex gap-3'>
                        <label className='text-light fs-4'>ค้นหาสินค้า</label>
                        <input className='form-control-sm col-md-8' value={this.state.keyword} onChange={e=>this.setState({ keyword : e.target.value }, ()=>this._onSearch())}/>
                        {
                            this.state.keyword.length > 0
                            ? <button className='btn btn-danger' onClick={()=>this.setState({ keyword: '' }, this._fetchData)}>X</button>
                            : null
                        }
                    </div>
                    <div className='col-md-6 d-flex justify-content-end'>
                        <Link className='btn btn-success' to={'/product/insert'}>
                            เพิ่มสินค้า
                        </Link>
                    </div>
                </div>
                <hr className='text-light' />
                <table className='table table-light'>
                    <thead>
                        <tr>
                            <th style={{width: '5%'}}>
                                ลำดับ
                            </th>
                            <th style={{width: '20%'}}>
                                รหัสสินค้า
                            </th>
                            <th style={{width: '20%'}}>
                                ชื่อสินค้า
                            </th>
                            <th style={{width: '30%'}}>
                                รายละเอียด
                            </th>
                            <th style={{width: '15%'}}>
                                ราคา
                            </th>
                            <th style={{width: '10%'}}>
                                #
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.products_list.length > 0
                            ? this.state.products_list.map((item, idx)=>(
                                <tr key={idx}>
                                    <td className='text-center'>{idx+1}</td>
                                    <td>{item.product_no}</td>
                                    <td>{item.product_name}</td>
                                    <td>{item.product_detail}</td>
                                    <td>{item.product_price}฿</td>
                                    <td>
                                        <Link to={`/product/detail/${item.product_no}`} className='btn btn-warning w-100'>Detail</Link>
                                        <Link to={`/product/update/${item.product_no}`} className='btn btn-primary w-100'>Edit</Link>
                                        <button onClick={()=>this._onDeleteProduct(item.product_code)} className='btn btn-danger w-100'>Delete</button>
                                    </td>
                                </tr>
                            ))
                            : null
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
