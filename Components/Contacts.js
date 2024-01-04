const contact = () => {
    return(
            <div className="container-contact">

                <h2>Contact Us</h2>
                <hr />

                <div className="form-iletisim">

                    <div className="contact-form">
                        
                        <form action="">

                            <input type="text" id="name" name="name" placeholder="Your Name" />
                            <input type="text" id="mail" name="mail" placeholder="Email" />
                            <input type="text" id="msg" name="msg" placeholder="Your Message" />
                            <input type="submit" value={"Send"} />


                        </form>

                    </div>

                    <div className="iletisim">

                        <div className="adres-tel">

                            <h4>Adres:</h4>
                            <p>Eski Silahtarağa Elektrik Santrali Kazım Karabekir Cad. No: 2/1334060 Eyüpsultan İstanbul</p>

                            <h4>Telefon:</h4>
                            <p>(0212) 311 50 00</p>

                        </div>
                        
                        <div className="sosyal-medya">

                        <img src={process.env.PUBLIC_URL + "facebook.png"} />
                        <img src={process.env.PUBLIC_URL + "instagram.png"} />
                        <img src={process.env.PUBLIC_URL + "twitter.png"} />

                        </div>
                        
                    </div>

                </div>

                

            </div>

    )
}

export default contact