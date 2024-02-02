import React from "react";
import Red from "../assets/Red.png";
import StickerMule from "../assets/sponsors/sticker-mule-logo-light.png";
import Card from "react-bootstrap/Card";
import "./MeetOurSponsors.css";

function MeetTheTeam() {
  return (
    <div className="App" id="meet-our-sponsors-section">
      <div class="container-fluid-xl"></div>
      <h2 class="text-white text-center text-8xl pt-6">Meet Our Sponsors</h2>

      <div id="sponsors">
        <div class="sponsors-container">
          <div class="community-sponsors">
            <h3 class="text-white text-center text-6xl p-4">Community Sponsors</h3>
            <div>
              <div class=" flex items-center justify-center">
                <div class="flex grid-cols-4 gap-5 place-items-center place-content-center justify-center">
                  <a href="https://mule.to/p5it" target="_blank" rel="noreferrer">
                  <Card className="custom-card justify-center">
                    <Card.Img variant="top" src={StickerMule} />
                  </Card>
                  </a>
                </div>
              </div>
              <p class="text-white text-center p-3 text-2xl">
                Community Sponsors are the backbone of our organization. They
                are the ones who keep our organization running and we are so
                grateful for their support. We couldn't do it without them!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MeetTheTeam;
