import ClubLogo from './ClubLogo'
import ClubCoursePhoto from '../pictures/clubcourse.png'
import './ClubCourse.css'
import gif from '../videos/arrow.gif'
import PlayerPhoto from '../pictures/player.jpg'
import NotionPhoto from '../pictures/notion_course.jpg'
import ClockPhoto from '../pictures/clock.jpg'

const ClubCourse = () => {
    return (
        <div className='club_course_whole_page'>
            <ClubLogo />

            <div className='cover'>
                <div className='cover_text'>
                    <h2 className='cover_title'>社團課程</h2>
                    <p className='cover_subtitle'>成員共同研討，交流頂尖技術</p>
                </div>
                <img className='cover_photo' src={ClubCoursePhoto} alt='cover' />
            </div>


            <div className='under_cover'>
                <h2 className='description'>學期間舉行，鼓勵成員互相交流技術。</h2>
                <img src={gif} alt='scroll down' className='scroll_down_gif' />
            </div>

            <div className='course_block course_player'>
                <div className='course_text'>
                    <h3>遊戲機</h3>
                    <p>
                        有玩過打磚塊、貪吃蛇等等童年記憶中的遊戲嗎？這堂社課從<br />
                        焊接開始親手做一個遊戲機，也會用程式寫出各種經典遊戲！
                    </p>
                    <a target="_blank" rel="noreferrer" href='https://drive.google.com/drive/folders/1ItBZIH88oA2LFxDvveyvrip_FPCoLU1Y'>
                    </a>
                </div>
                <div className='course_photo_container'>
                    <img src={PlayerPhoto} alt='player' className='course_photo' />
                </div>
            </div>

            <div className='course_block course_notion'>
                <div className='course_text'>
                    <h3>Notion&nbsp;基礎入門</h3>
                    <p>
                        從零開始教大家如何使用 Notion 這款超實用的免費排程工具，<br />
                        全程免費，還有免費模板可以拿！
                    </p>
                    <a target="_blank" rel="noreferrer" href='https://drive.google.com/drive/folders/10Aglw4knRVnDi_k2LY3MTiP3SF22Ax_H'>
                    </a>
                </div>
                <div className='course_photo_container'>
                    <img src={NotionPhoto} alt='notion' className='course_photo' />
                </div>
            </div>

            <div className='course_block course_clock'>
                <div className='course_text'>
                    <h3>費波那契時鐘</h3>
                    <p>
                        看膩了普通的時鐘嗎？這堂社課教大家怎麼做費波那契時鐘，<br />
                        除了藍紅綠的組合之外，也有其他顏色可以切換！
                    </p>
                    <a target="_blank" rel="noreferrer" href='https://drive.google.com/drive/folders/1l9tXy4plcEwarhGcmdi57y1ddOBQCGE6'>
                    </a>
                </div>
                <div className='course_photo_container'>
                    <img src={ClockPhoto} alt='clock' className='course_photo' />
                </div>
            </div>
        </div>
    );
}

export default ClubCourse;
