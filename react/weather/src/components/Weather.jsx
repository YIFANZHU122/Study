import { useEffect, useState } from 'react';
import './weather.css'
import AMapLoader from '@amap/amap-jsapi-loader';

function Weather() {
    const [city, setCity] = useState('北京市')
    const [weather, setWeather] = useState({})

    useEffect(() => {
        const getLocalCity = (AMap) => {
            AMap.plugin('AMap.CitySearch', function () {
                var citySearch = new AMap.CitySearch()
                citySearch.getLocalCity(function (status, result) {
                    console.log(status);

                    if (status === 'complete' && result.info === 'OK') {
                        // 查询成功，result即为当前所在城市信息
                        console.log(result);
                        setCity(result.city)
                        getWeather(AMap,result.city)
                    }
                })
            })
        }

        const getWeather = (AMap,mycity) => {
            //加载天气查询插件
            AMap.plugin("AMap.Weather", function () {
                //创建天气查询实例
                var weather = new AMap.Weather();
                //执行实时天气信息查询
                weather.getLive(mycity, function (err, data) {
                    console.log(err, data);
                    //err 正确时返回 null
                    //data 返回实时天气数据，返回数据见下表
                    setWeather(data)
                });
            });
        }

        window._AMapSecurityConfig = {
            securityJsCode: "afc9462ef27f884941b33c3dd93152ae"
        };
        AMapLoader.load({
            key: "f736e67f5acff83038eed31de1c6ad34", // 申请好的Web端开发者Key，首次调用 load 时必填
            version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
            plugins: ["AMap.Scale"], //需要使用的的插件列表，如比例尺'AMap.Scale'，支持添加多个如：['...','...']
        })
            .then((AMap) => {
                // 高的地图已经生效
                // 获取城市定位
                getLocalCity(AMap)
            })
            .catch(error => {
                console.error('AMap加载失败:', error);
            });
    }, [])

    return (
        <div className="weather">
            <div className="weather_head">
                <div className="city">
                    <i className="iconfont icon-dingwei"></i>
                    {city}
                </div>
                <div className="change_city">
                    <div className="change_city_button">
                        <i className="iconfont icon-chengshi"></i>
                        切换城市
                    </div>
                </div>
            </div>
            <div className="weather_body">
                <div className="today">
                    <div className="temperature">
                        <div className="tem_info">{weather.temperature}</div>
                        <div className="weather_info">{weather.weather}</div>
                    </div>
                    <div className="wind">
                        <ul className="_wind">
                            <li className="_wind_item">
                                <i className="iconfont icon-shidu1"></i>
                                <p className="_wind_item_info">湿度</p>
                                <p>{weather.humidity}</p>
                            </li>
                            <li className="_wind_item">
                                <i className="iconfont icon-fengxiang"></i>
                                <p className="_wind_item_info">风向</p>
                                <p>{weather.windDirection}</p>
                            </li>
                            <li className="_wind_item">
                                <i className="iconfont icon-wind-power"></i>
                                <p className="_wind_item_info">风力</p>
                                <p>{weather.windPower}</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="funture">
                    <div className="funture_title">
                        未来天气
                    </div>
                    <ul className="funture_list">
                        <li className="funture_item">
                            <p className='funture_item_date'>周六</p>
                            <i className="iconfont icon-qingtian"></i>
                            <p className='funture_item_temperture'>26℃/12℃</p>
                        </li>
                        <li className="funture_item">
                            <p className='funture_item_date'>周六</p>
                            <i className="iconfont icon-qingtian"></i>
                            <p className='funture_item_temperture'>26℃/12℃</p>
                        </li>
                        <li className="funture_item">
                            <p className='funture_item_date'>周六</p>
                            <i className="iconfont icon-qingtian"></i>
                            <div className='funture_item_temperture'>26℃/12℃</div>
                        </li>
                    </ul>
                </div>
                <div className="tendency"></div>
            </div>
            <div className="container"></div>
        </div>
    )
}

export default Weather;
