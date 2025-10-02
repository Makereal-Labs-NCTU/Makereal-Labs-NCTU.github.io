import { useRef } from 'react';
import './Equipment.css'
import ClubLogo from './ClubLogo';
import EquipmentCover from '../pictures/equipment.png'
import gif from '../videos/arrow.gif'

const Equipment = () => {
    const printerRef = useRef(null);

    const scrollTo3DPrinter = () => {
        printerRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className='equipment'>
            <ClubLogo />
            <div className='cover'>
                <div className='cover_text'>
                    <h2 className='cover_title'>
                        社團器材
                    </h2>
                    <p className='cover_subtitle'>
                        設備完善精良，資源豐富齊全
                    </p>
                </div>
                <img className='cover_photo' src={EquipmentCover} alt='equipment' />
            </div>

            <div className='under_cover'>
                <h3 className='description'>
                    3D 列印機、雷射切割機...... 優良器材應有盡有。
                </h3>
                <img src={gif} alt='scroll down' className='equipment_scroll_down_gif' />
            </div>

            <div class="club_equipment_rules">
                <h3 class="club_equipment_rules_title">社員權利：社團工具 & 機器借用相關制度</h3>

                <div class="club_equipment_rules_border">
                    <div class="club_equipment_rules_text">
                        <h5>一、成為社員資格＆社員權利</h5>
                        <ol>
                            <li>繳交 NT$500 社費，即有終身社員資格。</li>
                            <li>
                                社員可使用之資源：
                                <ol type="a">
                                    <li>往後每堂社課費用均可獲得減免，約 NT$200~$300 元。</li>
                                    <li>可申請借用社辦工具（手工具、電子元件開發板、工具書）做創客活動。</li>
                                    <li>可申請使用社辦機器（3D 列印機、雷切機）做創客活動。</li>
                                </ol>
                            </li>
                        </ol>

                        <h5>二、社辦工具借用規則</h5>
                        <p><em>*「借用」是指將工具帶離社辦，若在社辦使用工具不需申請，但須「幹部陪同」。</em></p>
                        <ol>
                            <li>若為<strong><u>幹部（含歷屆）</u></strong>且<strong><u>無營利</u></strong> → 填表後即可自行借用。</li>
                            <li>若不符合上述任意條件 → 須經申請並於約定時間內使用。</li>
                        </ol>
                        <p><strong>工具（手工具、電子元件開發板、工具書）申請方式：</strong></p>
                        <ol>
                            <li>透過社團 FB/IG/Email 聯繫當屆幹部，並填寫借用表單或白板登記：<a href="https://forms.gle/oUtmMCfLUCEqfiAGA" target="_blank" rel="noopener noreferrer">社團工具借用表</a></li>
                            <li>經副社長審核後，會另行通知申請者，且表格之借用狀態亦會變成「已審核」，接著就可以在約定時間進行借用。</li>
                            <li>使用後須依約定時間歸還，若因個人疏失導致毀損須照市價賠償。（為確保使用權益，建議在借用當下確認工具運作正常。）</li>
                        </ol>

                        <h5>三、取用耗材規則</h5>
                        <ol>
                            <li>下列耗材於徵得幹部同意後，可以免費取用，無須歸還：橡皮筋、夾鏈袋、雙面膠、泡棉膠、熱熔膠、銲錫、電池、電阻、電解電容、LED、按鈕鍵帽、小按鈕、蜂鳴器。</li>
                            <li>其他材料視同工具借用，用畢須歸還。</li>
                        </ol>

                        <h5>四、社辦機器使用規則</h5>
                        <ol>
                            <li>若為<strong><u>幹部（含歷屆）</u></strong>且<strong><u>非營利</u></strong> → 可直接使用。</li>
                            <li>若不滿足上述任意條件 → 須經預約申請後使用。</li>
                        </ol>
                        <p><strong>機器 (3D列印機、雷切機) 申請方式：</strong></p>
                        <ol>
                            <li>透過 FB/IG/Email 聯繫當屆幹部，並填寫借用表單：
                                <ul>
                                    <li><a href="https://docs.google.com/forms/d/1idSizApussDwVE_THCsWz694Few9v4txDCES3DdI014/edit" target="_blank" rel="noopener noreferrer">3D 列印機借用表</a></li>
                                    <li><a href="https://forms.gle/vGmELMThc1xQZbdc6" target="_blank" rel="noopener noreferrer">雷射切割機借用表</a></li>
                                </ul>
                            </li>
                            <li>經社長審核後，會另行通知申請者，且表格之借用狀態亦會變成「已審核」。此後便可以在約定時間進行使用。</li>
                            <li>3D 列印機以軟體所報材料公克數計價，詳細規範參考  
                                <a href="#the_3d_printer"
                                onClick={(e) => {
                                e.preventDefault();
                                scrollTo3DPrinter();
                                }}>
                                    3D 列印機使用規範
                                </a>。
                            </li>
                            <li>使用雷射雕刻機並不會收取額外費用，唯請好好愛惜機器、<strong>嚴禁長時間大量使用</strong>，以免造成機器過熱損壞。</li>
                            <li>使用後須復原場地，若因個人疏失導致機器毀損，需照價賠償。</li>
                        </ol>
                    </div>
                </div>
            </div>

            <div class="the_3d_printer" ref={printerRef}>
                <h3 class="the_3d_printer_title">創客俱樂部 3D Printer 使用規範</h3>

                <div class="the_3d_printer_rule_border">
                    <div class="the_3d_printer_text">
                        <h5>一、基本規範</h5>
                        <ol>
                            <li>本社所提供之 3D 列印機型號為 Bambu P1S，所提供之材料為 PLA，支援檔案格式為 STL。</li>
                            <li>如需使用 3D 列印機，請至少於使用前一日提出申請，逾期不予通過。</li>
                            <li>
                                社員應透過線上表單填寫申請相關資料，包括：
                                <ol type="a">
                                    <li>申請借用人姓名及聯絡方式</li>
                                    <li>預計起訖時間</li>
                                    <li>用途簡述（私人用途 / 本社活動用 etc.）</li>
                                </ol>
                            </li>
                            <li>借用表單連結：<a href="https://forms.gle/BqgEVCjsY1XuW8Kb9" target="_blank" rel="noopener noreferrer" class="the-3dp-form">創客俱樂部 3D列印機借用申請表</a></li>
                        </ol>

                        <h5>二、收費方式</h5>
                        <ol>
                            <li>為歡迎社員多加利用本社 3D 列印機進行創作與學習，本社開放所有社員登記借用。唯考量資源之合理使用及公平性，我們會酌收費用，用於購買耗材與設備維護。</li>
                            <li>收費以現金為主，本社將於審核後寄信回覆所需支付金額，並於該次列印終止後收取。</li>
                            <li>
                                費用計算以軟體預估使用材料公克數為基準，規範如下：
                                <table class="material-table">
                                    <thead>
                                        <tr>
                                            <th class="material-col">材料</th>
                                            <th class="cost-col">費用</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>PLA</td>
                                            <td>0.5 元/公克</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </li>
                            <li>如需使用自備之列印材料，請先於申請時於表單附註提出，本社將於評估後另行回復是否採用，若經同意，則不額外收取材料費。</li>
                        </ol>

                        <h5>三、取件說明</h5>
                        <ol>
                            <li>使用者應於軟體預估之完成時間，攜帶列印所需金額，前往社辦取件。</li>
                            <li>如在預定時間內，遇機器發生錯誤之情形，本社將另行通知申請人，並盡速安排補印製。</li>
                        </ol>

                        <h5>四、結語</h5>
                        <ol>
                            <li>本社不會限制各位的列印內容，然若有任何侵犯智慧財產權的情形，由申請列印者自行承擔。</li>
                            <li>請好好愛護環境與設備，保障大家使用的權益；蓄意損壞機器者，須進行賠償並不得借用。</li>
                            <li>申請列印前請詳閱本說明並遵守規範，完成申請視為同意上述內容。</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Equipment;