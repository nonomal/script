/*

微小程序信羊了个羊最大次数

*/


[MITM] 
hostname = *.easygame2021.com

[rewrite_local]
(.*?)900(.*) url 302 $180001

https://(.+).easygame2021.com/sheep/v1/game/personal_info.+ url response-body daily_count":[\d+] response-body daily_count":179700000000000000000000000000000000000099999999999999999999999999999999900000000000000000000000000000009996666696666666666666666666666666669966666666666666666666666666666666666999999099199099999999999999900000000000098765432109876533219000000000000000000099999998888888888888888888888888888888889999999999999