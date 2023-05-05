function getParams(path) {
    let path_name = window.location.pathname
    let arr_path = path.slice(1, path.length).split('/')
    let _idxRemovePath = []
    let res = {}
    path_name = path_name.slice(1, path_name.length).split('/')

    arr_path = arr_path.map((item, idx) => {
        if(item.toString().includes(':')){
            return item
        }else{
            _idxRemovePath.push(idx)
        }
    })

    _idxRemovePath.map(idx=>{
        path_name.splice(idx, 1)
        arr_path.splice(idx, 1)
    })

    path_name.map((item, key)=>{
        res[arr_path[key].toString().replace(':', '')] = item
    })
    return res
}

export {
    getParams
}