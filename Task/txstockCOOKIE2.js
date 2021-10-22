//独立COOKIE文件     ck在``里面填写，多账号换行
let userheaderVal= `oA0GbjlR_YMYMMtVeeF_vqNV9EkE&_appName=ios&_dev=iPhone10,1&_devId=82795e016e290d124bee883a0e96cb549ba8364b&_appver=9.5.0&_ifChId=&_isChId=1&_osVer=15.0.2&openid=oA0GbjlR_YMYMMtVeeF_vqNV9EkE&fskey=v0aaf8a8222617268a418c7e05e95e1e&appid=wxcbc3ab3807acb685&access_token=50_L5vnaRz2rIA_6Yjp0YMTW6Onl2xk9gehHwpWUwkS-IaMyjTiWRZ1KL3dApG5C7DdWJMwezwxxYafz4BGK5GQvXL9ZK1dDai2tTjVHpFsWKE&buildType=store&check=11&_idfa=&lang=zh_CN`

let userkeyVal= `pgv_pvid=1400747250; ts_last=/activity/page/welwareCenter/; ts_sid=629967524; ts_uid=8985750672; ts_refer=zqact.tenpay.com/`

let cashheaderVal= `5`

let signheaderVal= `v0aaf8a8222617268a418c7e05e95e1e&channel=1&access_token=50_L5vnaRz2rIA_6Yjp0YMTW6Onl2xk9gehHwpWUwkS-IaMyjTiWRZ1KL3dApG5C7DdWJMwezwxxYafz4BGK5GQvXL9ZK1dDai2tTjVHpFsWKE&_appName=ios&_appver=9.5.0&_osVer=15.0.2&_devId=82795e016e290d124bee883a0e96cb549ba8364b`

let signkeyVal= `{"pgv_info=ssid=s4204934485; pgv_pvid=9557182382; ts_last=/activity/page/exchangeRights/; ts_refer=zqact.tenpay.com/; ts_sid=8208965375; ts_uid=4272148366"}`

let taskheaderVal= `_dev=iPhone10,1&_devId=82795e016e290d124bee883a0e96cb549ba8364b&_appver=9.5.0&_ifChId=&_isChId=1&_osVer=15.0.2&openid=oA0GbjlR_YMYMMtVeeF_vqNV9EkE&fskey=v0aaf8a8222617268a418c7e05e95e1e&appid=wxcbc3ab3807acb685&access_token=50_L5vnaRz2rIA_6Yjp0YMTW6Onl2xk9gehHwpWUwkS-IaMyjTiWRZ1KL3dApG5C7DdWJMwezwxxYafz4BGK5GQvXL9ZK1dDai2tTjVHpFsWKE&buildType=store&check=11&_idfa=&lang=zh_CN`

let taskkeyVal= `pgv_info=ssid=s9420341350; pgv_pvid=4794106708; qlappid=wx9cf8c670ebd68ce4; qlskey=v6474a41e1061726a74e019750a6c347; qluin=085e9858e3d59ed1c660c8ee3@wx.tenpay.com; qq_logtype=16; wx_session_time=1634888308000; wzq_qlappid=wx9cf8c670ebd68ce4; wzq_qlskey=v6474a41e1061726a74e019750a6c347; wzq_qluin=os-ppuPBjm_nwHZbv7lcl4k5Y-58; zxg_openid=oA0GbjlR_YMYMMtVeeF_vqNV9EkE`

let wxtaskkeyVal= `wzq_channel=..orv53p00gf001; pgv_info=ssid=s9420341350; pgv_pvid=4794106708; ts_last=/activity/page/welwareCenter/; ts_sid=6031316316; ts_uid=9841197420; ts_refer=zqact.tenpay.com/; qlappid=wx9cf8c670ebd68ce4; qlskey=v6474a41e1061726a74e019750a6c347; qluin=085e9858e3d59ed1c660c8ee3@wx.tenpay.com; qq_logtype=16; wx_session_time=1634888308000; wzq_qlappid=wx9cf8c670ebd68ce4; wzq_qlskey=v6474a41e1061726a74e019750a6c347; wzq_qluin=os-ppuPBjm_nwHZbv7lcl4k5Y-58; zxg_openid=oA0GbjlR_YMYMMtVeeF_vqNV9EkE`


let cookieArr = {
  userheaderVal: userheaderVal,
  userkeyVal: userkeyVal,
  cashheaderVal: cashheaderVal,
  signheaderVal: signheaderVal,
  signkeyVal: signkeyVal,
  taskheaderVal: taskheaderVal, 
  taskkeyVal: taskkeyVal,
  wxtaskkeyVal: wxtaskkeyVal, 
}

module.exports =  cookieArr
