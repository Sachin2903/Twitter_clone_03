import { Fragment } from "react";
import styles from "./login.module.css";
import { BsTwitter } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc"
import { BsApple } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import TextField from '@mui/material/TextField';
export function Login() {
    return (
        <Fragment>

            <div className={styles.loginbox}>
                <RxCross2 className={styles.crossbtn} />
                <BsTwitter className={styles.logotwitter} />
                <h2 className={styles.headtext}>Sign in to Twitter</h2>
                <button className={styles.btngoogle}><FcGoogle /> Sign in with Google</button>
                <button className={styles.btnapple}><BsApple /> Sign in with Apple</button>
                <p className={styles.ortext}> or </p>

                <TextField
                    sx={{ width: "50%" }}
                    label="Phone Number"
                    multiline

                />
                <TextField
                    sx={{ width: "50%", margin: "15px 0px 15px 0px" }}
                    label="Password"
                    multiline

                />

                <button className={styles.btnnext}>Next</button>
                <button className={styles.btnapple}>Forgot password?</button>
                <p className={styles.headtext}>Don't have an account?<span style={{ color: "rgb(27, 169, 225)", cursor: "pointer" }}>Sign up</span></p>
            </div>

        </Fragment>
    )
}