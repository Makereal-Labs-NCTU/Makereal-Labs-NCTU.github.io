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
                        <h4>成為社員資格＆社員權利</h4>
                        <ol>
                            <li>繳交 $500 社費，即有終身社員資格。</li>
                        </ol>
                        <p><strong>社員可使用之資源：</strong></p>
                        <ol>
                            <li>往後每堂社課費用均可獲得減免，約 $200~$300 元。</li>
                            <li>可申請借用社辦工具（手工具、電子元件開發板、工具書）。</li>
                            <li>可申請使用社辦機器（3D 列印機、雷切機）。</li>
                        </ol>

                        <h4>社辦工具借用規則</h4>
                        <p><em>*借用是指將工具帶離社辦，若在社辦使用僅需幹部陪同，不需申請。</em></p>
                        <ol>
                            <li><strong>幹部（含歷屆）</strong>且<strong>無營利</strong> → 填表即可借用。</li>
                            <li>不符合上述條件 → 須經申請並於約定時間內使用。</li>
                        </ol>
                        <p><strong>申請方式：</strong></p>
                        <ol>
                            <li>透過社團 FB/IG/Email 聯繫幹部，並填表或白板登記：<a href="https://forms.gle/oUtmMCfLUCEqfiAGA" target="_blank" rel="noopener noreferrer">社團工具借用表</a></li>
                            <li>經副社長審核後，表單狀態會更新為「已審核」。</li>
                            <li>須依約定時間歸還，毀損須照市價賠償。</li>
                        </ol>

                        <h4>取用耗材規則</h4>
                        <ol>
                            <li>以下耗材可免費取用，無須歸還（需幹部同意）：橡皮筋、夾鏈袋、雙面膠、熱熔膠、銲錫、電池、電阻、電容、LED、按鈕、蜂鳴器。</li>
                            <li>其他材料視同工具借用，用畢須歸還。</li>
                        </ol>

                        <h4>社辦機器使用規則</h4>
                        <ol>
                            <li>幹部（含歷屆）且非營利 → 可直接使用。</li>
                            <li>其他情況 → 須經預約申請後使用。</li>
                        </ol>
                        <p><strong>申請方式：</strong></p>
                        <ol>
                            <li>透過 FB/IG/Email 聯繫幹部，並填表：
                                <ul>
                                    <li><a href="https://docs.google.com/forms/d/1idSizApussDwVE_THCsWz694Few9v4txDCES3DdI014/edit" target="_blank" rel="noopener noreferrer">3D 列印機借用表</a></li>
                                    <li><a href="https://forms.gle/vGmELMThc1xQZbdc6" target="_blank" rel="noopener noreferrer">雷射切割機借用表</a></li>
                                </ul>
                            </li>
                            <li>經社長審核後，表單狀態會更新為「已審核」。</li>
                            <li>3D 列印機以材料公克數計價，詳細規範參考  
                                <a href="#the_3d_printer"
                                onClick={(e) => {
                                e.preventDefault();
                                scrollTo3DPrinter();
                                }}>
                                    3D 列印機使用規範
                                </a>。
                            </li>
                            <li>雷切機無額外收費，但嚴禁長時間大量使用以免損壞。</li>
                            <li>使用後須復原場地，若毀損需照價賠償。</li>
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