import React from 'react'
import Header from './Header'
import Footer from './Footer'
export default function ExpenseTracker() {
    return (
        <div>
            <Header />

            <div className='flex-row flex justify-end'>
                <div className='flex-col flex justify-end'>
                    <br /><br /><br /><br />
                    <img src="https://res.cloudinary.com/parul-0103/image/upload/v1666035497/udemy-project/doughnutpng_p71lf3.png" />
                    <br />
                    <img src="https://res.cloudinary.com/parul-0103/image/upload/v1666035497/udemy-project/LINE_rvquux.png" />
                    <br /><br />
                </div>

                <div class="login-page">
                    <div class="form">
                        <div class="login">
                            <div class="login-header">
                                <br/>
                                <hr/>
                                <h3>EXPENSE TRACKER</h3>
                                <b><p>MONTHLY EXPENSE</p></b>
                                <hr/>
                                <br/>
                            </div>
                        </div>
                        <form class="login-form" >
                            <input type="text" placeholder="TOTAL EXPENSE" />
                            <input type="text" placeholder="ADD GROCERY" />
                            <input type="password" placeholder="DELETE GROCERY" />
                            <input type="password" placeholder="LESSEN BY PERCENTAGE" />
                            <br/><br/>
                            <input type="submit" className='subbtn' value="SUBMIT" />
                            {/* <p class="message">Already registered? <a href="/login">Login Here</a></p> */}
                        </form>
                    </div>
                </div>
                <div class="login-page">
                    <div class="form">
                        <div class="login">
                            <div class="login-header">
                                <br/>
                                <hr/>
                                <h3>EXPENSE TRACKER</h3>
                                <b><p>YEARLY EXPENSE</p></b>
                                <hr/>
                                <br/>
                            </div>
                        </div>
                        <form class="login-form" >
                            <input type="text" placeholder="TOTAL EXPENSE" />
                            <input type="text" placeholder="ADD GROCERY" />
                            <input type="password" placeholder="DELETE GROCERY" />
                            <input type="password" placeholder="LESSEN BY PERCENTAGE" />
                            <button type="buton" class="btn btn-outline-dark"> + </button>10%
                            <button type="buton" class="btn btn-outline-dark"> - </button>
                            <br/><br/>
                            <input type="submit" className='subbtn' value="SUBMIT" />
                            <input type="BUTTON" className='subbtn' value="GRAPH" />
                            {/* <p class="message">Already registered? <a href="/login">Login Here</a></p> */}
                        </form>
                    </div>
                </div>
                <div class="login-page">
                    <div class="form">
                        <div class="login">
                            <div class="login-header">
                            <br/>
                                <hr/><h3>EXPENSE TRACKER</h3>
                               <b><p>CATEGORY-WISE EXPENSE</p><hr/><br/></b>
                            </div>
                        </div>
                        <form class="login-form" >
                            <input type="text" placeholder="CATEGORY 1" />
                            <input type="text" placeholder="CATEGORY 1 EXPENSE" />
                            <input type="text" placeholder="CATEGORY 2" />
                            <input type="text" placeholder="CATEGORY 2 EXPENSE" />
                            <br/><br/>
                         
                            <input type="submit" className='subbtn' value="OK" />
                            {/* <p class="message">Already registered? <a href="/login">Login Here</a></p> */}
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    )
}
