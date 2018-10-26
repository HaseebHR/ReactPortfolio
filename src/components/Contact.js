import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <section id="contact">
                <header>
                    <h1>Contact Me:</h1>
                    <p><b>How Are you Today !</b></p>
                </header>
                <form action="5614549295" method="post">
                    <div className="form-field">
                        <label>Name:</label>
                        <br></br>
                        <input type="text" name="user_name"></input>
                    </div>
                    <div className="form-field">
                        <label>Email:</label>
                        <br></br>

                        <input type="email" name="user_email"></input>
                    </div>
                    <br></br>
                    <div className="form-field">
                        <label>FeedBack:</label>
                        <textarea name="message"></textarea>
                    </div>
                    <br></br>
                    <div>
                        <input type="submit" value="Contact Me!" />
                    </div>
                </form>
            </section>
        )
    }
}
export default Contact
