import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import test from '../assets/logo.png';
import "./MeetTheTeam.css"

//Headshot Images
import img1Chair from '../assets/meettheteam/headshots/Visali_Thirukeswaran.png';
import img2Chair from '../assets/meettheteam/headshots/Danielle_Grajnar.jpg';
//Logistic
import img1Logistic from '../assets/meettheteam/headshots/Aditi_headshot.jpeg';
import img2Logistic from '../assets/meettheteam/headshots/Bohina_Manochehrzadeh.jpg';
import img3Logistic from '../assets/meettheteam/headshots/Faiza_headshot.jpg';
import img4Logistic from '../assets/meettheteam/headshots/Huiling_tang_headshot.jpg';
import img5Logistic from '../assets/meettheteam/headshots/ilwad_headshot.jpg';
import img6Logistic from '../assets/meettheteam/headshots/Lavanaya Headshot.jpg';
import img7Logistic from '../assets/meettheteam/headshots/Najwa_Waqar_Headshot.jpg';
import img8Logistic from '../assets/meettheteam/headshots/Rodiat Adeoye.jpg';
import img9Logistic from '../assets/meettheteam/headshots/Sabriha_Amin.JPG';
import img10Logistic from '../assets/meettheteam/headshots/Sidney_Liu.jpg';
import img11Logistic from '../assets/meettheteam/headshots/Triya Augustine.jpg';
//IT
import img1IT from '../assets/meettheteam/headshots/Dimitra_Headshot.jpg';
import img2IT from '../assets/meettheteam/headshots/Hejitha_Weera_Headshot.jpeg';
import img3IT from '../assets/meettheteam/headshots/Hulya_Yasar_Headshot.jpg';
import img4IT from '../assets/meettheteam/headshots/Julia_Da_Silva_Headshot.jpg';
import img5IT from '../assets/meettheteam/headshots/maher kazi.jpg';
import img6IT from '../assets/meettheteam/headshots/Steeve-Johan Otoka-Eyota.jpg';
import img7IT from '../assets/meettheteam/headshots/Zaina Awad.png';
import img8IT from '../assets/meettheteam/headshots/Zijing_Wang.jpeg';
//Sponsorship
import img1Sponsorship from '../assets/meettheteam/headshots/Batul_Ismail.jpg';
import img2Sponsorship from '../assets/meettheteam/headshots/sayed_mohammed.jpg';
import img3Sponsorship from '../assets/meettheteam/headshots/Wan_Ning_Ma.jpg';

function MeetTheTeam() {

  return (
    <div className="App">
      <header className="App-header">
        <div class="container-fluid-xl" id="about-us-section">
        </div><div class="team" />

        <h2 class="team-heading">
          Meet Our Team 
        </h2>

        <div class="grid co-chairs">
          <div class="team-member">
              <div class="image">
                <a href="https://www.linkedin.com/in/visalithiru" target="_blank" rel="noreferrer">
                  <img class="team-img" src={img1Chair} alt="test" />
                  <img class="team-img-fun" src={img1Chair} alt="test"/>
                </a></div>
              <h4 class="team-name">Visali Thirukeswaran</h4>
              <p class="team-title">ElleHacks Co-Chair</p>
          </div>
          <div class="team-member">
            <div class="image">
              <a href="https://www.linkedin.com/in/danielle-grajnar/"  target="_blank" rel="noreferrer">
                  <img class="team-img" src={img2Chair} alt="test" />
                  <img class="team-img-fun" src={img2Chair} alt="test"/>
              </a></div>
            <h4 class="team-name">Danielle Grajnar</h4>
            <p class="team-title">ElleHacks Co-Chair</p>
          </div>
          <div class="team-member">
            <div class="image">
              <a href="google.com"  target="_blank" rel="noreferrer">
                  <img class="team-img" src={test} alt="test" />
                  <img class="team-img-fun" src={test} alt="test"/>
              </a></div>
            <h4 class="team-name">Blank</h4>
            <p class="team-title">Co-Chair</p>
          </div>

          <div class="executives">
            <div class="grid lms-exe" />
            <div class="team-member">
              <div class="image">
                <a href="https://www.linkedin.com/in/triya-augustine/"  target="_blank" rel="noreferrer">
                  <img class="team-img" src={img11Logistic} alt="test" />
                  <img class="team-img-fun" src={img11Logistic} alt="test"/>
                </a></div>
              <h4 class="team-name">Triya Augustine</h4>
              <p class="team-title">Logistics Director</p>
            </div>
            <div class="team-member">
              <div class="image">
                <a href="https://www.linkedin.com/in/aditi-patel-43452927a"  target="_blank" rel="noreferrer">
                  <img class="team-img" src={img1Logistic} alt="test" />
                  <img class="team-img-fun" src={img1Logistic} alt="test"/>
                </a></div>
              <h4 class="team-name">Aditi Patel</h4>
              <p class="team-title">Logistics Executive</p>
            </div>
            <div class="team-member">
              <div class="image">
                <a href="https://www.linkedin.com/in/bohina-m/"  target="_blank" rel="noreferrer">
                  <img class="team-img" src={img2Logistic} alt="test" />
                  <img class="team-img-fun" src={img2Logistic} alt="test"/>
                </a></div>
              <h4 class="team-name">Bohina Manochehrzadeh</h4>
              <p class="team-title">Logistics Executive</p>
            </div>
            <div class="team-member">
              <div class="image">
                <a href=""  target="_blank" rel="noreferrer">
                  <img class="team-img" src={img3Logistic} alt="test" />
                  <img class="team-img-fun" src={img3Logistic} alt="test"/>
                </a></div>
              <h4 class="team-name">Faiza Sidin</h4>
              <p class="team-title">Logistics Executive</p>
            </div>
            <div class="team-member">
              <div class="image">
                <a href="https://www.linkedin.com/in/huiling-tang/"  target="_blank" rel="noreferrer">
                  <img class="team-img" src={img4Logistic} alt="test" />
                  <img class="team-img-fun" src={img4Logistic} alt="test"/>
                </a></div>
              <h4 class="team-name">Huiling Tang</h4>
              <p class="team-title">Logistics Executive</p>
            </div>
            <div class="team-member">
              <div class="image">
                <a href="https://www.linkedin.com/in/ilwad-abdulle-1a0920223/"  target="_blank" rel="noreferrer">
                  <img class="team-img" src={img5Logistic} alt="test" />
                  <img class="team-img-fun" src={img5Logistic} alt="test"/>
                </a></div>
              <h4 class="team-name">Ilwad Abdulle</h4>
              <p class="team-title">Logistics Executive</p>
            </div>
            <div class="team-member">
              <div class="image">
                <a href="https://www.linkedin.com/in/lavanaya-bajaj111/"  target="_blank" rel="noreferrer">
                  <img class="team-img" src={img6Logistic} alt="test" />
                  <img class="team-img-fun" src={img6Logistic} alt="test"/>
                </a></div>
              <h4 class="team-name">Lavanaya Bajaj</h4>
              <p class="team-title">Logistics Executive</p>
            </div>
            <div class="team-member">
              <div class="image">
                <a href="https://www.linkedin.com/in/najwa-waqar-b17010284"  target="_blank" rel="noreferrer">
                  <img class="team-img" src={img7Logistic} alt="test" />
                  <img class="team-img-fun" src={img7Logistic} alt="test"/>
                </a></div>
              <h4 class="team-name">Najwa Waqar</h4>
              <p class="team-title">Logistics Executive</p>
            </div>
            <div class="team-member">
              <div class="image">
                <a href="https://www.linkedin.com/in/rodiat-adeoye-0a7b31257/"  target="_blank" rel="noreferrer">
                  <img class="team-img" src={img8Logistic} alt="test" />
                  <img class="team-img-fun" src={img8Logistic} alt="test"/>
                </a></div>
              <h4 class="team-name">Rodiat Adeoye</h4>
              <p class="team-title">Logistics Executive</p>
            </div>
            <div class="team-member">
              <div class="image">
                <a href="https://www.linkedin.com/in/sabriha-amin-b695b8216"  target="_blank" rel="noreferrer">
                  <img class="team-img" src={img9Logistic} alt="test" />
                  <img class="team-img-fun" src={img9Logistic} alt="test"/>
                </a></div>
              <h4 class="team-name">Sabriha Amin</h4>
              <p class="team-title">Logistics Executive</p>
            </div>
            <div class="team-member">
              <div class="image">
                <a href="https://www.linkedin.com/in/sidney-liu-8b41a9265"  target="_blank" rel="noreferrer">
                  <img class="team-img" src={img10Logistic} alt="test" />
                  <img class="team-img-fun" src={img10Logistic} alt="test"/>
                </a></div>
              <h4 class="team-name">Sidney Liu</h4>
              <p class="team-title">Logistics Executive</p>
            </div>
          </div>

          <div class="executives">
            <div class="team-member">
              <div class="image">
                <a href="https://www.linkedin.com/in/luanamadeira/"  target="_blank" rel="noreferrer">
                  <img class="team-img" src={test} alt="test" />
                  <img class="team-img-fun" src={test} alt="test"/>
                </a></div>
              <h4 class="team-name">Luana Madeira</h4>
              <p class="team-title">IT Director</p>
            </div>
            <div class="team-member">
              <div class="image">
                <a href="https://www.linkedin.com/in/dimitra-balasingam-116684239"  target="_blank" rel="noreferrer">
                  <img class="team-img" src={img1IT} alt="test" />
                  <img class="team-img-fun" src={img1IT} alt="test"/>
                </a></div>
              <h4 class="team-name">Dimitra Balasingam</h4>
              <p class="team-title">IT Executive</p>
            </div>
            <div class="team-member">
              <div class="image">
                <a href="https://www.linkedin.com/in/hejithaw/"  target="_blank" rel="noreferrer">
                  <img class="team-img" src={img2IT} alt="test" />
                  <img class="team-img-fun" src={img2IT} alt="test"/>
                </a></div>
              <h4 class="team-name">Thanuj Hejitha Karunadhipathi Weera</h4>
              <p class="team-title">IT Executive</p>
            </div>
            <div class="team-member">
              <div class="image">
                <a href="https://www.linkedin.com/in/hulyayasar/"  target="_blank" rel="noreferrer">
                  <img class="team-img" src={img3IT} alt="test" />
                  <img class="team-img-fun" src={img3IT} alt="test"/>
                </a></div>
              <h4 class="team-name">Hulya Yasar</h4>
              <p class="team-title">IT Executive</p>
            </div>
            <div class="team-member">
              <div class="image">
                <a href="https://www.linkedin.com/in/julia-da-silva-9a2b25242/"  target="_blank" rel="noreferrer">
                  <img class="team-img" src={img4IT} alt="test" />
                  <img class="team-img-fun" src={img4IT} alt="test"/>
                </a></div>
              <h4 class="team-name">Julia Da Silva</h4>
              <p class="team-title">IT Executive</p>
            </div>
            <div class="team-member">
              <div class="image">
                <a href="https://www.linkedin.com/in/maher-kazi/"  target="_blank" rel="noreferrer">
                  <img class="team-img" src={img5IT} alt="test" />
                  <img class="team-img-fun" src={img5IT} alt="test"/>
                </a></div>
              <h4 class="team-name">Maher Kazi</h4>
              <p class="team-title">IT Executive</p>
            </div>
            <div class="team-member">
              <div class="image">
                <a href="https://www.linkedin.com/in/johanotoka/"  target="_blank" rel="noreferrer">
                  <img class="team-img" src={img6IT} alt="test" />
                  <img class="team-img-fun" src={img6IT} alt="test"/>
                </a></div>
              <h4 class="team-name">Steeve-Johan Otoka-Eyota</h4>
              <p class="team-title">IT Executive</p>
            </div>
            <div class="team-member">
              <div class="image">
                <a href="https://www.linkedin.com/in/zaina-awad/"  target="_blank" rel="noreferrer">
                  <img class="team-img" src={img7IT} alt="test" />
                  <img class="team-img-fun" src={img7IT} alt="test"/>
                </a></div>
              <h4 class="team-name">Zaina Awad</h4>
              <p class="team-title">IT Executive</p>
            </div>
            <div class="team-member">
              <div class="image">
                <a href="https://www.linkedin.com/in/zijing-wang-78812a253/"  target="_blank" rel="noreferrer">
                  <img class="team-img" src={img8IT} alt="test" />
                  <img class="team-img-fun" src={img8IT} alt="test"/>
                </a></div>
              <h4 class="team-name">Zijing Wang</h4>
              <p class="team-title">IT Executive</p>
            </div>
          </div>
          <div class="executives">
            <div class="team-member">
              <div class="image">
              <a href="https://www.linkedin.com/in/batul-ismail-24b4a6226"  target="_blank" rel="noreferrer">
                  <img class="team-img" src={img1Sponsorship} alt="test" />
                  <img class="team-img-fun" src={img1Sponsorship} alt="test"/>
              </a></div>
              <h4 class="team-name">Batul Ismail</h4>
              <p class="team-title">Sponsorship Executive</p>
            </div>
            <div class="team-member">
              <div class="image">
              <a href="https://www.linkedin.com/in/sayed-mohammed/"  target="_blank" rel="noreferrer">
                  <img class="team-img" src={img2Sponsorship} alt="test" />
                  <img class="team-img-fun" src={img2Sponsorship} alt="test"/>
              </a></div>
              <h4 class="team-name">Sayed Mohammed</h4>
              <p class="team-title">Sponsorship Executive</p>
            </div>
            <div class="team-member">
              <div class="image">
              <a href="https://www.linkedin.com/in/wnmwnm"  target="_blank" rel="noreferrer">
                  <img class="team-img" src={img3Sponsorship} alt="test" />
                  <img class="team-img-fun" src={img3Sponsorship} alt="test"/>
              </a></div>
              <h4 class="team-name">Wan Ning Ma</h4>
              <p class="team-title">Sponsorship Executive</p>
            </div>
            <div class="team-member">
              <div class="image">
                  <img class="team-img" src={test} alt="test" />
                  <img class="team-img-fun" src={test} alt="test"/>
              </div>
              <h4 class="team-name">ELLE '23</h4>
              <p class="team-title">Hacker #1</p>
            </div>
            <div class="team-member">
              <div class="image">
                  <img class="team-img" src={test} alt="test" />
                  <img class="team-img-fun" src={test} alt="test"/>
              </div>
              <h4 class="team-name">ELLE '23</h4>
              <p class="team-title">Hacker #2</p>
            </div>
            <div class="team-member">
              <div class="image">
                  <img class="team-img" src={test} alt="test" />
                  <img class="team-img-fun" src={test} alt="test"/>
              </div>
              <h4 class="team-name">ELLE '23</h4>
              <p class="team-title">Hacker #3</p>
            </div>            
          </div>
        </div>
      </header>
    </div>
  );
}

export default MeetTheTeam;
