import React from 'react';


const Footer = () => {
    return (
        <section className="contact">
        <div className="contact__wrap">
           <div className="part">
               <h2>About</h2>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum voluptates debitis provident molestiae esse, quia temporibus veritatis accusamus architecto sint natus consequuntur?</p>
               <img src="" alt="footer-logo"/>
           </div>
           <div className="part"><h2>Contact</h2>
           <ul>
               <li>
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quaerat dolor harum?
               </li>
               <li>Phone: 78254625</li>
               <li>Email: email@email.com</li>
           </ul>
           </div>
           <div className="part"><h2>Lorem ipsum dolor sit amet.</h2>
             <ul>
                 <li><a href="http://www.google.pl">Lorem, ipsum dolor.</a></li>
                 <li><a href="http://www.google.pl">Lorem, ipsum dolor.</a></li>
                 <li><a href="http://www.google.pl">Lorem, ipsum.</a></li>
                 <li><a href="http://www.google.pl"> Lorem isreta</a></li>
             </ul>
           </div>
           <div className="part"><h2>News</h2>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sint, tempora, quibusdam consequatur eos distinctio mollitia illum adipisci veniam ex aliquam dolorem!j</p>
             <input type="email" className="email" placeholder="Email Adress" />
           </div>
        </div>
        <hr className="divider"/>
        <div className="copy-right">
          <p>Copyright ©2020 All rights reserved</p> 
          <ul>
              <li>
             <a href="https://www.google.pl"> facebook
</a>                    </li>
              <li>
             <a href="https://www.google.pl"> instagram
</a>                     </li>
              <li>
                 <a href="https://www.google.pl">  pinterest</a>
              </li>
          </ul>
        </div>
     </section>
    );
}

export default Footer;
