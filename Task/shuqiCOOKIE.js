/* ziye
独立COOKIE文件
github地址 https://github.com/ziye888
TG频道地址  https://t.me/ziyescript
TG交流群   https://t.me/joinchat/AAAAAE7XHm-q1-7Np-tF3g
boxjs链接  https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/ziye.boxjs.json

转载请备注个名字，谢谢

方式一
在boxjs里选择复制会话 粘贴至cookie1处


方式二
在boxjs里选择复制数据 粘贴至cookie2处



方式三
把每一个ck在分别``里面填写，多账号换行 

*/

modulees = 3 //1 选择方式一 2 选择方式二 3 选择方式三





//方式一
let cookie1 = {}



//方式二
let cookie2 = {}





//方式三
let shuqiuserurlVal = `https://ocean.shuqireader.com/api/jaccount/accountapi/v1/sapi/account/getBindinfo?userId=1199888734&sqSv=1.0&timestamp=1628868162&sign=5219d7ab8777a8d32f64019c99c34ddc&key=sq_h5_gateway`
let shuqisyurlVal = `https://render.shuqireader.com/load/resource?sdk=14.7.1&utdid=YOe7VpTz7joDABaBxY7LMW%2FX&ustatus=1&first_placeid=111111&net_env=wifi&placeid=111111&user_id=1199888734&sn=3155F09C7ACFA60AC941061DE02D1B56A1AAE496&umidtoken=YOe7VpTz7joDABaBxY7LMW%2FX&msv=8.0.0&brand=Apple&imei=3FF71A0001EFF9EEA1842F8F0DAB743071715245&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMTk5ODg4NzM0IiwidXRkaWQiOiJZT2U3VnBUejdqb0RBQmFCeFk3TE1XL1giLCJpbWVpIjoiM0ZGNzFBMDAwMUVGRjlFRUExODQyRjhGMERBQjc0MzA3MTcxNTI0NSIsInNuIjoiMzE1NUYwOUM3QUNGQTYwQUM5NDEwNjFERTAyRDFCNTZBMUFBRTQ5NiIsImV4cCI6MTYyOTQzNTUwMywidXNlcklkIjoiMTE5OTg4ODczNCIsImlhdCI6MTYyODkxNzEwMywib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.UYML6h2Nr4ZxO0LeO8HiHFqgwNlVoOw04vjv-tfajiJyWIohijQ1kaf49j5_L_TAnup7NXvnHVXO8sbS-H8c3w&skinColor=23B383&platform=iOS&ver=210301&mod=iPhone8&statusBarHeight=20.000000&skinVersion=1&wh=750x1334&soft_id=21&utype=vip&skinId=999&idfa=00000000-0000-0000-0000-000000000000`
let shuqisybodyVal = `appVer=4.3.6.0&imei=3FF71A0001EFF9EEA1842F8F0DAB743071715245&isNewUser=-1&params=%7B%22resources%22%3A%7B%22ShuqiVipEntry%22%3A%7B%7D%2C%22personalCardConfig%22%3A%7B%7D%7D%7D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=e35376af88557db9a989604f4dab1c1a&sn=3155F09C7ACFA60AC941061DE02D1B56A1AAE496&soft_id=21&timestamp=1628917103&user_id=1199888734&ver=210301`
let shuqispbodyVal = `_public=skinId%3D999%26idfa%3D00000000-0000-0000-0000-000000000000%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYOe7VpTz7joDABaBxY7LMW/X%26user_id%3D1199888734%26sn%3D3155F09C7ACFA60AC941061DE02D1B56A1AAE496%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D3FF71A0001EFF9EEA1842F8F0DAB743071715245%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMTk5ODg4NzM0IiwidXRkaWQiOiIiLCJpbWVpIjoiM0ZGNzFBMDAwMUVGRjlFRUExODQyRjhGMERBQjc0MzA3MTcxNTI0NSIsInNuIjoiMzE1NUYwOUM3QUNGQTYwQUM5NDEwNjFERTAyRDFCNTZBMUFBRTQ5NiIsImV4cCI6MTYyOTQzNTEwMywidXNlcklkIjoiMTE5OTg4ODczNCIsImlhdCI6MTYyODkxNjcwMywib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.xt78NLzHCIvI-iYVBGhZrk2CcrrWKI3JpcpkvUJP-86yRLfDMNzC30yvXVkh807iNX7hCpkuIA6MdB52fPzYJA%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone8%26statusBarHeight%3D20.000000%26skinVersion%3D1%26wh%3D750x1334%26soft_id%3D21%26utdid%3DYOe7VpTz7joDABaBxY7LMW/X%26utype%3Dvip%26sdk%3D14.7.1&deliveryId=525&key=sq_app_ad&miniWua=HHnB_IYCMzJCW5kc4UpB1DWparep3ggvhHNRi/OllkmKmP0A%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=C552FFFCBA89281F35483CE0E1A1E069&timestamp=1628916978&userId=1199888734&user_id=1199888734&wua=HIVW_03PmTEoa4h7yn%2BJTF/8WpITyb79/gshTzqKIDnx/QvI6dvHBlTMkslD8lG%2BBWf4AH7v11AMbU71/p5xh1P/AXKC/bvkvyCVYTBYW6/2WNhRduxHhizDKQ9wRKiMIammOrypvA6I6zDHDrwjSoK1GF7lay8lyseDTGLLflMnxUQsBYBWEi08NE8ORE4Q9csht`
let shuqiscbodyVal = `_public=skinId%253D999%2526idfa%253D00000000-0000-0000-0000-000000000000%2526ustatus%253D1%2526first_placeid%253D111111%2526net_env%253Dwifi%2526umidtoken%253DYOe7VpTz7joDABaBxY7LMW%252FX%2526user_id%253D1199888734%2526sn%253D3155F09C7ACFA60AC941061DE02D1B56A1AAE496%2526placeid%253D111111%2526msv%253D8.0.0%2526brand%253DApple%2526imei%253D3FF71A0001EFF9EEA1842F8F0DAB743071715245%2526skinVersionPrefix%253D1%2526appVer%253D4.3.6.0%2526skinActiveColor%253D0F9970%2526manufacturer%253DApple%2526session%253DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMTk5ODg4NzM0IiwidXRkaWQiOiIiLCJpbWVpIjoiM0ZGNzFBMDAwMUVGRjlFRUExODQyRjhGMERBQjc0MzA3MTcxNTI0NSIsInNuIjoiMzE1NUYwOUM3QUNGQTYwQUM5NDEwNjFERTAyRDFCNTZBMUFBRTQ5NiIsImV4cCI6MTYyOTQzNTUwNSwidXNlcklkIjoiMTE5OTg4ODczNCIsImlhdCI6MTYyODkxNzEwNSwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.rQkw4lygJuTL7f7b6BgyBM6hCDcdpdZex17BsgBqud0KrEcqym7HVlsXmUUeFsnlAVW9LF9nbqnFOAz88c0qsQ%2526skinColor%253D23B383%2526platform%253DiOS%2526ver%253D210301%2526mod%253DiPhone8%2526statusBarHeight%253D20.000000%2526skinVersion%253D1%2526wh%253D750x1334%2526soft_id%253D21%2526utdid%253DYOe7VpTz7joDABaBxY7LMW%252FX%2526utype%253Dvip%2526sdk%253D14.7.1&key=and_log&readingList=%5B%7B%22startTime%22%3A1628917141%2C%22readObjType%22%3A1%2C%22attr%22%3A2%2C%22readObjId%22%3A%228264284%22%2C%22readChapterId%22%3A1391412%2C%22readingLen%22%3A15%7D%5D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=ED62763B32731CF53E773BFF4B34F39E&timestamp=1628917156&user_id=1199888734`
let shuqiydbodyVal = `_public=skinId%3D999%26idfa%3D00000000-0000-0000-0000-000000000000%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYOe7VpTz7joDABaBxY7LMW/X%26user_id%3D1199888734%26sn%3D3155F09C7ACFA60AC941061DE02D1B56A1AAE496%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D3FF71A0001EFF9EEA1842F8F0DAB743071715245%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMTk5ODg4NzM0IiwidXRkaWQiOiIiLCJpbWVpIjoiM0ZGNzFBMDAwMUVGRjlFRUExODQyRjhGMERBQjc0MzA3MTcxNTI0NSIsInNuIjoiMzE1NUYwOUM3QUNGQTYwQUM5NDEwNjFERTAyRDFCNTZBMUFBRTQ5NiIsImV4cCI6MTYyOTQzNTUwNSwidXNlcklkIjoiMTE5OTg4ODczNCIsImlhdCI6MTYyODkxNzEwNSwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.rQkw4lygJuTL7f7b6BgyBM6hCDcdpdZex17BsgBqud0KrEcqym7HVlsXmUUeFsnlAVW9LF9nbqnFOAz88c0qsQ%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone8%26statusBarHeight%3D20.000000%26skinVersion%3D1%26wh%3D750x1334%26soft_id%3D21%26utdid%3DYOe7VpTz7joDABaBxY7LMW/X%26utype%3Dvip%26sdk%3D14.7.1&deliveryId=707&key=sq_app_ad&miniWua=HHnB_ZTd/czQIX/nYIm/5fum960UpV4G/trrSvYrku%2BIpvAU%3D&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=678&sign=6BFE6CC25C97986B06B0EBD4737CA958&timestamp=1628917159&userId=1199888734&wua=HIVW_qOdvAOnivgROtXpipX2xgj/J1XbqDJj3lAJbOtRzvzf5Kme92ASJr2fIaXdZ7dJZYWSj0uqwiB3UmuEHk5cmiYOToaBnhI6MOZtzCT23TZPw1NVqxCVgqs0Qoue5jPbnbAhg4kNRvvpl/P6DvbCuEPLdQDA1MjZPMM6cGv0gmHymUYm/SQZXjpzyqzinEN6U`
let shuqiqdbodyVal = `clientTimestamp=1628917116&position=501&signInType=1&wua=HIVW_PhhEMI5uPKHRbT8KQmg3h9ucyu%2Fw5E7rAQyl6%2BwxchX050AUsvf83WzvAy1CKxs1lilzu4n%2Fwjh2Nk6Km%2FgPm6C5t4qQojHul1jEvsYxU8G553ksBROiVSZJJcbYMkqWMCJlGxE2LT2dsyAnmOIYsxwoIbsDt10nmilIOgYiSvs%3D&ua=&miniWua=HHnB_Fk2QTAd%2BS3nPAHMXaBl%2FcJb5OvgNyFt99daRaF9l5EM%3D&userId=1199888734&umidtoken=YOe7VpTz7joDABaBxY7LMW%2FX&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1628917116&sqSv=1.0&sign=19274052e851ce8ce34ccce11a1566a4&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26upf%3D20559%26from%3DShuqiTab%26sdk%3D14.7.1%26utdid%3DYOe7VpTz7joDABaBxY7LMW%252FX%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D1199888734%26sn%3D3155F09C7ACFA60AC941061DE02D1B56A1AAE496%26umidtoken%3DYOe7VpTz7joDABaBxY7LMW%252FX%26msv%3D8.0.0%26brand%3DApple%26imei%3D3FF71A0001EFF9EEA1842F8F0DAB743071715245%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMTk5ODg4NzM0IiwidXRkaWQiOiIiLCJpbWVpIjoiM0ZGNzFBMDAwMUVGRjlFRUExODQyRjhGMERBQjc0MzA3MTcxNTI0NSIsInNuIjoiMzE1NUYwOUM3QUNGQTYwQUM5NDEwNjFERTAyRDFCNTZBMUFBRTQ5NiIsImV4cCI6MTYyOTQzNTUwNSwidXNlcklkIjoiMTE5OTg4ODczNCIsImlhdCI6MTYyODkxNzEwNSwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.rQkw4lygJuTL7f7b6BgyBM6hCDcdpdZex17BsgBqud0KrEcqym7HVlsXmUUeFsnlAVW9LF9nbqnFOAz88c0qsQ%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone8%26statusBarHeight%3D20.000000%26skinVersion%3D1%26wh%3D750x1334%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3D00000000-0000-0000-0000-000000000000`
let shuqirwbodyVal = `serviceWorkerOn=1&stopPullRefresh=1&upf=20559&from=ShuqiTab&sdk=14.7.1&utdid=YOe7VpTz7joDABaBxY7LMW%2FX&ustatus=1&first_placeid=111111&net_env=wifi&placeid=111111&user_id=1199888734&sn=3155F09C7ACFA60AC941061DE02D1B56A1AAE496&umidtoken=YOe7VpTz7joDABaBxY7LMW%2FX&msv=8.0.0&brand=Apple&imei=3FF71A0001EFF9EEA1842F8F0DAB743071715245&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMTk5ODg4NzM0IiwidXRkaWQiOiIiLCJpbWVpIjoiM0ZGNzFBMDAwMUVGRjlFRUExODQyRjhGMERBQjc0MzA3MTcxNTI0NSIsInNuIjoiMzE1NUYwOUM3QUNGQTYwQUM5NDEwNjFERTAyRDFCNTZBMUFBRTQ5NiIsImV4cCI6MTYyOTQzNTUwNSwidXNlcklkIjoiMTE5OTg4ODczNCIsImlhdCI6MTYyODkxNzEwNSwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.rQkw4lygJuTL7f7b6BgyBM6hCDcdpdZex17BsgBqud0KrEcqym7HVlsXmUUeFsnlAVW9LF9nbqnFOAz88c0qsQ&skinColor=23B383&platform=1&ver=210301&mod=iPhone8&statusBarHeight=20.000000&skinVersion=1&wh=750x1334&soft_id=21&utype=vip&skinId=999&idfa=00000000-0000-0000-0000-000000000000&params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=1199888734&placeId=111111&timestamp=1628917117&sqSv=1.0&sign=33bafc6f69f1e223aadd70bd102f0b47&key=sq_h5_gateway&_public=`
let shuqifxbodyVal = ``
let shuqisprwurlVal = `https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?resourceId=626&user_id=1199888734&requestSrc=h5&userId=1199888734&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1628919960&sqSv=1.0&sign=1311bd8f2f10b6feb9f2cbea9a174e6c&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26upf%3D20559%26from%3DShuqiTab%26sdk%3D14.7.1%26utdid%3DYOe7VpTz7joDABaBxY7LMW%252FX%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D1199888734%26sn%3D3155F09C7ACFA60AC941061DE02D1B56A1AAE496%26umidtoken%3DYOe7VpTz7joDABaBxY7LMW%252FX%26msv%3D8.0.0%26brand%3DApple%26imei%3D3FF71A0001EFF9EEA1842F8F0DAB743071715245%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMTk5ODg4NzM0IiwidXRkaWQiOiIiLCJpbWVpIjoiM0ZGNzFBMDAwMUVGRjlFRUExODQyRjhGMERBQjc0MzA3MTcxNTI0NSIsInNuIjoiMzE1NUYwOUM3QUNGQTYwQUM5NDEwNjFERTAyRDFCNTZBMUFBRTQ5NiIsImV4cCI6MTYyOTQzNTUwNSwidXNlcklkIjoiMTE5OTg4ODczNCIsImlhdCI6MTYyODkxNzEwNSwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.rQkw4lygJuTL7f7b6BgyBM6hCDcdpdZex17BsgBqud0KrEcqym7HVlsXmUUeFsnlAVW9LF9nbqnFOAz88c0qsQ%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone8%26statusBarHeight%3D20.000000%26skinVersion%3D1%26wh%3D750x1334%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3D00000000-0000-0000-0000-000000000000`
let shuqijlbodyVal = `requestSrc=h5&userId=1199888734&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1628917117&sqSv=1.0&sign=402d515da76bf22e76eb2cdccc2e1d2e&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26upf%3D20559%26from%3DShuqiTab%26sdk%3D14.7.1%26utdid%3DYOe7VpTz7joDABaBxY7LMW%252FX%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D1199888734%26sn%3D3155F09C7ACFA60AC941061DE02D1B56A1AAE496%26umidtoken%3DYOe7VpTz7joDABaBxY7LMW%252FX%26msv%3D8.0.0%26brand%3DApple%26imei%3D3FF71A0001EFF9EEA1842F8F0DAB743071715245%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMTk5ODg4NzM0IiwidXRkaWQiOiIiLCJpbWVpIjoiM0ZGNzFBMDAwMUVGRjlFRUExODQyRjhGMERBQjc0MzA3MTcxNTI0NSIsInNuIjoiMzE1NUYwOUM3QUNGQTYwQUM5NDEwNjFERTAyRDFCNTZBMUFBRTQ5NiIsImV4cCI6MTYyOTQzNTUwNSwidXNlcklkIjoiMTE5OTg4ODczNCIsImlhdCI6MTYyODkxNzEwNSwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.rQkw4lygJuTL7f7b6BgyBM6hCDcdpdZex17BsgBqud0KrEcqym7HVlsXmUUeFsnlAVW9LF9nbqnFOAz88c0qsQ%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone8%26statusBarHeight%3D20.000000%26skinVersion%3D1%26wh%3D750x1334%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3D00000000-0000-0000-0000-000000000000`
let shuqisqjlbodyVal = `src=219&userId=1199888734&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1628916988&sqSv=1.0&sign=bf6c03ba8aa0a8a42ae107d34818290d&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26spm%3Da2oun.page_render_sq_welfare_challenge_page.copy-banner.jump_0%26sdk%3D14.7.1%26utdid%3DYOe7VpTz7joDABaBxY7LMW%252FX%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D1199888734%26sn%3D3155F09C7ACFA60AC941061DE02D1B56A1AAE496%26umidtoken%3DYOe7VpTz7joDABaBxY7LMW%252FX%26msv%3D8.0.0%26brand%3DApple%26imei%3D3FF71A0001EFF9EEA1842F8F0DAB743071715245%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMTk5ODg4NzM0IiwidXRkaWQiOiIiLCJpbWVpIjoiM0ZGNzFBMDAwMUVGRjlFRUExODQyRjhGMERBQjc0MzA3MTcxNTI0NSIsInNuIjoiMzE1NUYwOUM3QUNGQTYwQUM5NDEwNjFERTAyRDFCNTZBMUFBRTQ5NiIsImV4cCI6MTYyOTQzNTEwMywidXNlcklkIjoiMTE5OTg4ODczNCIsImlhdCI6MTYyODkxNjcwMywib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.xt78NLzHCIvI-iYVBGhZrk2CcrrWKI3JpcpkvUJP-86yRLfDMNzC30yvXVkh807iNX7hCpkuIA6MdB52fPzYJA%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone8%26statusBarHeight%3D20.000000%26skinVersion%3D1%26wh%3D750x1334%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3D00000000-0000-0000-0000-000000000000`
let shuqicjyurlVal = `https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1628920699&userId=1199888734&activityId=311&sqSv=1.0&sign=7a4517197edfe3a193bb26229c7e5f71&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D14.7.1%26utdid%3DYOe7VpTz7joDABaBxY7LMW%252FX%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D1199888734%26sn%3D3155F09C7ACFA60AC941061DE02D1B56A1AAE496%26umidtoken%3DYOe7VpTz7joDABaBxY7LMW%252FX%26msv%3D8.0.0%26brand%3DApple%26imei%3D3FF71A0001EFF9EEA1842F8F0DAB743071715245%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMTk5ODg4NzM0IiwidXRkaWQiOiIiLCJpbWVpIjoiM0ZGNzFBMDAwMUVGRjlFRUExODQyRjhGMERBQjc0MzA3MTcxNTI0NSIsInNuIjoiMzE1NUYwOUM3QUNGQTYwQUM5NDEwNjFERTAyRDFCNTZBMUFBRTQ5NiIsImV4cCI6MTYyOTQzODUwNSwidXNlcklkIjoiMTE5OTg4ODczNCIsImlhdCI6MTYyODkyMDEwNSwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.3bs0WW4jzIKTEez0tQPyoj2o30CrUnS96HHBL9UuHY59EF1a8xbd-v-j3duCStAre-9F15jnroRZzZ5Dj5AGGw%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone8%26statusBarHeight%3D20.000000%26skinVersion%3D1%26wh%3D750x1334%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3D00000000-0000-0000-0000-000000000000`
let shuqicjcsbodyVal = `_public=skinId%3D999%26idfa%3D00000000-0000-0000-0000-000000000000%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYOe7VpTz7joDABaBxY7LMW/X%26user_id%3D1199888734%26sn%3D3155F09C7ACFA60AC941061DE02D1B56A1AAE496%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D3FF71A0001EFF9EEA1842F8F0DAB743071715245%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMTk5ODg4NzM0IiwidXRkaWQiOiIiLCJpbWVpIjoiM0ZGNzFBMDAwMUVGRjlFRUExODQyRjhGMERBQjc0MzA3MTcxNTI0NSIsInNuIjoiMzE1NUYwOUM3QUNGQTYwQUM5NDEwNjFERTAyRDFCNTZBMUFBRTQ5NiIsImV4cCI6MTYyOTQzNTEwMywidXNlcklkIjoiMTE5OTg4ODczNCIsImlhdCI6MTYyODkxNjcwMywib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.xt78NLzHCIvI-iYVBGhZrk2CcrrWKI3JpcpkvUJP-86yRLfDMNzC30yvXVkh807iNX7hCpkuIA6MdB52fPzYJA%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone8%26statusBarHeight%3D20.000000%26skinVersion%3D1%26wh%3D750x1334%26soft_id%3D21%26utdid%3DYOe7VpTz7joDABaBxY7LMW/X%26utype%3Dvip%26sdk%3D14.7.1&deliveryId=711&key=sq_app_ad&miniWua=HHnB_eYGc6u5QRcCPWvpgiCDUImgitAZkkxv//%2Bafq1ajZ04%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=BFC0D002E06820E49037FF253691AFD5&timestamp=1628917023&userId=1199888734&user_id=1199888734&wua=HIVW_NpMOZxMdwP93h6Cg0/VrsrJWoOxQuVWSKs1XG7kE2OBX%2BhgvgQKoDsYUGS19NaERGJq/MkhO6afvphUyUVbqsuNUbI8FNIUEXNmUR/5HGO9agp%2Bpe7hMNfnY6F91pYV50RnJejlTuaB6rcBFPbQjpl9AX8qYqbZwsmL%2BtnFKP6M8AyBXzecgJeeKK8/HgXf7`
let shuqicjbodyVal = `wua=HIVW_g6pEMe1skFQdMMoWXYZIf%2BPrH%2B8B3inJKSzaySUQWuzeiYMxfl0HUwGwaPGF0C5kTy2G7DHnKMyScoxRyFDtEuA9vAJWD0NPGefSRUn0TDWUues%2FaRzf7x83P5bWSoFLAW6d%2FTa%2BTW59FRPb2blPf%2FU5Xm7dFdIzALiw501Vzsc%3D&ua=&userId=1199888734&umidtoken=YOe7VpTz7joDABaBxY7LMW%2FX&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1628917035&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=5c0a16bc2c0b0b2f957fe676329d9bcb&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D14.7.1%26utdid%3DYOe7VpTz7joDABaBxY7LMW%252FX%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D1199888734%26sn%3D3155F09C7ACFA60AC941061DE02D1B56A1AAE496%26umidtoken%3DYOe7VpTz7joDABaBxY7LMW%252FX%26msv%3D8.0.0%26brand%3DApple%26imei%3D3FF71A0001EFF9EEA1842F8F0DAB743071715245%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMTk5ODg4NzM0IiwidXRkaWQiOiIiLCJpbWVpIjoiM0ZGNzFBMDAwMUVGRjlFRUExODQyRjhGMERBQjc0MzA3MTcxNTI0NSIsInNuIjoiMzE1NUYwOUM3QUNGQTYwQUM5NDEwNjFERTAyRDFCNTZBMUFBRTQ5NiIsImV4cCI6MTYyOTQzNTEwMywidXNlcklkIjoiMTE5OTg4ODczNCIsImlhdCI6MTYyODkxNjcwMywib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.xt78NLzHCIvI-iYVBGhZrk2CcrrWKI3JpcpkvUJP-86yRLfDMNzC30yvXVkh807iNX7hCpkuIA6MdB52fPzYJA%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone8%26statusBarHeight%3D20.000000%26skinVersion%3D1%26wh%3D750x1334%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3D00000000-0000-0000-0000-000000000000`

let shuqijsspbodyVal = ``
let shuqijsydurlVal = ``
let shuqijsydbodyVal = ``
let shuqijsqdbodyVal = ``
let shuqijsqdspyurlVal = ``
let shuqijsqdspbodyVal = ``
let shuqijsrwbodyVal = ``
let shuqijsfxbodyVal = ``
let shuqijsbookurlVal = ``
let shuqijsbookbodyVal = ``
let shuqijssprwurlVal = ``






let cookie3 = {
    shuqiuserurlVal: shuqiuserurlVal,
    shuqisyurlVal: shuqisyurlVal,
    shuqisybodyVal: shuqisybodyVal,
    shuqispbodyVal: shuqispbodyVal,
    shuqiscbodyVal: shuqiscbodyVal,
    shuqiydbodyVal: shuqiydbodyVal,
    shuqiqdbodyVal: shuqiqdbodyVal,
    shuqirwbodyVal: shuqirwbodyVal,
    shuqifxbodyVal: shuqifxbodyVal,
    shuqisprwurlVal: shuqisprwurlVal,
    shuqijlbodyVal: shuqijlbodyVal,
    shuqisqjlbodyVal: shuqisqjlbodyVal,
    shuqicjyurlVal: shuqicjyurlVal,
    shuqicjcsbodyVal: shuqicjcsbodyVal,
    shuqicjbodyVal: shuqicjbodyVal,

    shuqijsspbodyVal: shuqijsspbodyVal,
    shuqijsydurlVal: shuqijsydurlVal,
    shuqijsydbodyVal: shuqijsydbodyVal,
    shuqijsqdbodyVal: shuqijsqdbodyVal,
    shuqijsqdspyurlVal: shuqijsqdspyurlVal,
    shuqijsqdspbodyVal: shuqijsqdspbodyVal,
    shuqijsrwbodyVal: shuqijsrwbodyVal,
    shuqijsfxbodyVal: shuqijsfxbodyVal,
    shuqijsbookurlVal: shuqijsbookurlVal,
    shuqijsbookbodyVal: shuqijsbookbodyVal,
    shuqijssprwurlVal: shuqijssprwurlVal

}






if (modulees == 1) {
    module.exports = cookie1
}

if (modulees == 2) {
    module.exports = cookie2
}


if (modulees == 3) {
    module.exports = cookie3
}