import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'

function signin() {

    const [email_or_phone, setemail_or_phone] = useState('')
    const [password, setpassword] = useState('')

    const formSubmit = (e) => async (dispatch) => {
        console.log(email_or_phone)
        console.log(password)
        // e.preventDefault()
        var formData = new FormData()
        formData.append('email_or_phone', email_or_phone)
        formData.append('password', password)
        let response = await fetch(`http://localhost:8000/accounts/signin/`, {
            method: 'POST',
            body: formData,
        }).catch(console.log('something went wrong')).then(window.location.href = "http://127.0.0.1:3000/product/");
    }

    return (
        <div className="bannerSec">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="bannercntSec signcntsec">
                            <div className="bannerImg d-none d-xl-flex">
                                {/* <Image className="img-fluid d-sm-block d-md-none" height={309} width={252} layout='fixed' src="img/patterbannerimg.png" alt="img"/> */}
                                <div className="bannerimg01 d-none d-md-block">
                                    <Image className="img-fluid" height={309} width={252} layout='fixed' src="/img/bannerimg01.png" alt="img" />
                                </div>

                                <div className="bannerimg02 d-none d-md-block">
                                    <Image className="img-fluid" height={309} width={252} layout='fixed' src="/img/bannerimg02.png" alt="img" />
                                </div>

                                <div className="bannerimg03 d-none d-md-block">
                                    <Image className="img-fluid" height={309} width={252} layout='fixed' src="/img/bannerimg03.png" alt="img" />
                                </div>

                                <div className="bannerbtn 1d-block d-none d-sm-none d-md-block d-xl-none">
                                    <button className="btn btnlightblue me-3">Discover</button>
                                    <button className="btn btndarkblue">Create</button>
                                </div>
                            </div>

                            <div className="signctn">
                                <h2 className="textwhitecolor signheading">Sign In{/* for <span className="textbluecolor">Crypto</span>*/}</h2>
                                <div className="sign-from">
                                    <form>
                                        <div className="input-box">
                                            <input onChange={(e) => setemail_or_phone(e.target.value)} type="text" name="email_or_phone" placeholder="Enter Email Or Phone" className="form-input" />
                                        </div>
                                        <div className="input-box">
                                            <input onChange={(e) => setpassword(e.target.value)} type="password" name="password" placeholder="Enter Password" className="form-input" />
                                        </div>
                                        <div className="form-check d-none d-md-flex">
                                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                            <label className="form-check-label" for="defaultCheck1">
                                                I agree with Privacy Policy
                                            </label>
                                        </div>
                                    </form>
                                </div>
                                <div className="sign-btn">
                                    <button onClick={formSubmit()} type="submit" className="btn btnlightblue me-3">Sign In</button>
                                    <button className="btn btndarkblue">Forgot password</button>
                                </div>
                                <div className="divider">or</div>
                                <div className="social-wrap">

                                    <a href="#" className="twiter">
                                        <Image height={17} width={17} layout='fixed' src="/img/twittericon.svg" alt="icon" />
                                    </a>
                                    <a href="#" className="google">
                                        <Image height={17} width={17} layout='fixed' src="/img/googleicon.svg" alt="icon" />
                                    </a>
                                    <a href="#" className="facebook">
                                        <Image height={17} width={17} layout='fixed' src="/img/facebookicon.svg" alt="icon" />
                                    </a>
                                </div>
                                <div className="signup-link">
                                    Do not have an account? <Link href={"/signup"}><a href="#">Sign Up</a></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default signin