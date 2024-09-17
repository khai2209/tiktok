import classNames from "classnames/bind"
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function AccountItem() {
    return <div className={cx('wrapper')}>
        <img className={cx('avatar')} src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-euttp/7310536103910440993~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=57970&refresh_token=7c2c6cca4ff76641e6294a3db8fd7b33&x-expires=1723600800&x-signature=OG%2BxeuynVQNa2RFn5d8vA18RpUs%3D&shp=a5d48078&shcp=81f88b70" alt="img" />
        <div className={cx('info')}>
            <p className={cx('name')}>
                <span>Nguyen VIP</span>
                <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
            </p>
            <p className={cx('username')}>nguyenvip</p>
        </div>
    </div>
}

export default AccountItem