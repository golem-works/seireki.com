import style from '../../styles/tukaikata.module.css';
import Link from 'next/link';



export default function Tukaikata() {

    return (
 <>
        <div className={style.subtitle}>
            <h2>使い方</h2>
            <p>※この機能では生年月日から年号や学歴が算出できます。
            </p>
        </div>

        <div className={style.tukaikataContainer1}>
        <img src='/ts1.png' style={{width: '500px'}}/>
        <p>選択ボックスから調べたい生まれ年を選択します。</p>
        </div>
        <div className={style.tukaikataContainer2}>
        <img src='/ts2.png' style={{width: '500px'}}/>
        <p>計算を押すと西暦から昭和、平成、令和と年号に変換されます。</p>
        </div>
        <div className={style.tukaikataContainer3}>
        <img src='/ts3.png' style={{width: '500px'}}/>
        <p>下のボックス内のイベントは中学、高校、大学の
            <br></br>ストレートだった場合の学歴が算出されます。</p>
        </div>

        <div className={style.linkContainer}>
         <Link href ="/">Back</Link>
        </div>

        <footer className={style.footer}>
         <p>© 2024 GOLEM WORKS. All rights reserved.</p>
        </footer>

</>
    )
}