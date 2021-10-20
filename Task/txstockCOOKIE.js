//独立COOKIE文件     ck在``里面填写，多账号换行
let userheaderVal= `oA0GbjvVrktMICKze0EFnSPvwo34&_appName=ios&_dev=iPhone10,1&_devId=82795e016e290d124bee883a0e96cb549ba8364b&_appver=9.4.1&_ifChId=&_isChId=1&_osVer=15.0.2&openid=oA0GbjvVrktMICKze0EFnSPvwo34&fskey=v0aaf63c2216159bd2ca9d03e95e1cf7&appid=wxcbc3ab3807acb685&access_token=50_jnwuSVvCld542AooqE0k-UPLiSBNUK-jDvtkKbTarXlNxh7-vTkxZwWufeIPOBRlx96o9Vhwy3GaO062WBTkUX32CgBKa8ha42W-g2GFIZo&buildType=store&check=11&_idfa=&lang=zh_CN`

let userkeyVal= `pgv_pvid=1400747250`

let cashheaderVal= `5`

let signheaderVal= `v0aaf63c2216159bd2ca9d03e95e1cf7&channel=1&access_token=50_jnwuSVvCld542AooqE0k-Th3BBG3gUZU6Z71vthZlieE-sCQvkdEQXEp-rxM9Y5NrpWEML2o7w9J5ROBHHo4NkUbGoW44ZKGMKZhHNNhH1c&_appName=ios&_appver=9.4.1&_osVer=15.0.2&_devId=82795e016e290d124bee883a0e96cb549ba8364b`

let signkeyVal= `{""}`

let taskheaderVal= `&_dev=iPhone10,1&_devId=82795e016e290d124bee883a0e96cb549ba8364b&_appver=9.4.1&_ifChId=&_isChId=1&_osVer=15.0.2&openid=oA0GbjvVrktMICKze0EFnSPvwo34&fskey=v0aaf63c2216159bd2ca9d03e95e1cf7&appid=wxcbc3ab3807acb685&access_token=50_jnwuSVvCld542AooqE0k-Th3BBG3gUZU6Z71vthZlieE-sCQvkdEQXEp-rxM9Y5NrpWEML2o7w9J5ROBHHo4NkUbGoW44ZKGMKZhHNNhH1c&buildType=store&check=11&_idfa=&lang=zh_CN`

let taskkeyVal= `pgv_info=ssid=s7539094912; pgv_pvid=1400747250; wzq_channel=fm_wzq_wx_v1_unknow_01..`

let wxtaskkeyVal= `wzq_channel=..orv53p00gf001; pgv_info=ssid=s7262888075; pgv_pvid=7305407064; ts_last=/activity/page/welwareCenter/; ts_refer=zqact.tenpay.com/; ts_sid=8780144000; ts_uid=7285626264; qlappid=wx9cf8c670ebd68ce4; qlskey=v0aaf63c220616e7757d4ed71c06e8e2; qluin=085e9858ed4669ae5243331ea@wx.tenpay.com; qq_logtype=16; wx_session_time=1634629463000; wzq_qlappid=wx9cf8c670ebd68ce4; wzq_qlskey=v0aaf63c220616e7757d4ed71c06e8e2; wzq_qluin=os-ppuEXC68FXO3qYuS9mpy7Sank; zxg_openid=oA0GbjvVrktMICKze0EFnSPvwo34`


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
