import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";
import 'tippy.js/dist/tippy.css';
import Tippy from '@tippyjs/react/headless';

const cx = classNames.bind(styles)

function Sidebar() {
    return <aside className={cx('wrapper')}>
            <Tippy content="Hello">
                <h2>Sidebar</h2>
            </Tippy>
        </aside>
}

export default Sidebar;