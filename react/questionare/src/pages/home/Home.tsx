import logo from '../../assets/logo.png'
import './index.scss'
import {useNavigate} from 'react-router-dom'

export default function Home() {
    const navigate = useNavigate()
    const toQuestionPage = () => {
        navigate('/question')
    }

    return (
        <div className="home-container">
            <div className="home-box">
                <div className="home-box-hd">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="title">
                        欢迎参加问卷调查
                    </div>
                    <div className="desc">
                        请根据您的情况填写问卷。
                    </div>
                </div>
                <div className="home-box-btn" onClick={toQuestionPage}>
                   开始问卷
                </div>
            </div>
        </div>
    )
}

