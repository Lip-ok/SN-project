import React from 'react';
import s from './Dialogs.module.css';


const Dialogs = () => {
    return (

        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <div className={s.dialog}>
                   <span>Siniy</span>
                </div>
                <div className={s.dialog}>
                    Master
                </div>
                <div className={s.dialog}>
                    Maks
                </div>
                <div className={s.dialog}>
                    Kotova
                </div>
            </div>

            <div className={s.messages}>
                <div className={s.dialog}>
                    Hi!
                </div>
                <div className={s.dialog}>
                    Hello!
                </div>
                <div className={s.dialog}>
                    Yo!
                </div>
            </div>
        </div>
    )
};
export default Dialogs;