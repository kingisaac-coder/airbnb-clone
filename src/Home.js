import React from "react";
import "./Home.css";
import Bannerpage from "./Bannerpage";
import Card from "./Card";

function Home() {
  return (
    <div className="Home">
      <Bannerpage />

      <div className="home__section">
        <Card
          src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-25477982/original/15476a26-c048-4f7b-9449-b52afb1249f4.jpeg?im_w=720"
          title="Online Experiences"
          description="Unique activities we can do together, led by a world of hosts."
          price="$372/ night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
          title="Unique stays"
          description="Spaces that are more than just a place to sleep."
          price="$219/ night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/fe1ded9b-596a-4a80-a571-7d36d006c5e5.jpg?im_w=720"
          title="Entire homes"
          description="Comfortable private places, with room for friends or family."
          price="$2079/ night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/47ec6dbe-2bdb-4022-a33e-f8e72bf31c3b.jpg?im_w=720"
          title="Marrakesh,Morocco"
          description="A good place to chill and relax."
          price="$179/ night"
        />
      </div>
      <div className="home__section">
        <Card
          src="https://a0.muscache.com/im/pictures/1b060a62-0b2b-4661-b3ef-95497c4ca3a9.jpg?im_w=720"
          title="El Pajar, Spain"
          description="3,108 Kilometers Sep 26 -Oct 1"
          price="$400/ night"
        />
        <Card
          src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
          title="3 Bedroom Flat in Bournemouth"
          description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
          price="£130/night"
        />
        <Card
          src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
          title="Penthouse in London"
          description="Enjoy the amazing sights of London with this stunning penthouse"
          price="£350/night"
        />
        <Card
          src="https://media.nomadicmatt.com/2018/apartment.jpg"
          title="1 Bedroom apartment"
          description="Superhost with great amenities and a fabolous shopping complex nearby"
          price="£70/night"
        />
      </div>

      <div className="home__section">
        <Card
          src="https://a0.muscache.com/im/pictures/monet/Select-4160599/original/739e4ba5-5fb0-4482-a8b6-5ba3bb0a9448?im_w=720"
          title="Marrakesh, Morocco"
          description="3,036 Kilometers Sep 18 - 23"
          price="$557/ night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/9ddf62c8-7f20-49ef-8e39-3c00b194d57e.jpg?im_w=720"
          title="Lalle Takerkoust,Morocco"
          description="3,018 Kilometers Sep 4 - 9"
          price="$540/ night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/miso/Hosting-48309347/original/7673d12c-01b4-4e01-b991-f7e19f16e070.jpeg?im_w=720"
          title="El Pajar,Spain"
          description="3,036 Kilometers Sep 18 - 23"
          price="$327/ night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/6a62b2a6-f137-4ba2-b4b2-d0ac579e9c6e.jpg?im_w=720"
          title="Marrakesh, Morocco"
          description="3,036 Kilometers Sep 18 - 23"
          price="$357/ night"
        />
      </div>

      <div className="home__section">
        <Card
          src="https://a0.muscache.com/im/pictures/miso/Hosting-33489758/original/506a7d3c-f571-4793-8c3f-315124de6aa1.jpeg?im_w=720"
          title="Tamesluht, Morocco"
          description="3,033 Kilometers Oct 18 - 16"
          price="$467/ night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-46114629/original/2df39674-e9b4-423e-bc21-b9d0af769f18.jpeg?im_w=720"
          title="Tias, Spain"
          description="3,072 Kilometers Oct 6 - 11"
          price="$68/ night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/92e4dbd9-cec7-4e42-bf30-9457977d06e7.jpg?im_w=720"
          title="El Monte O Guargacho,Spain"
          description="3,196 Kilometers Sep 11 - 16"
          price="$327/ night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/a58ecb8d-8029-44d8-9fb0-bdfdff2029de.jpg?im_w=720"
          title="Lajares, Spain"
          description="3,072 Kilometers Oct 1 - 6"
          price="$220/ night"
        />
      </div>

      <div className="home__section">
        <Card
          src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-562972884612274411/original/62c658e3-7a5a-4762-8087-fe70aec56b8e.jpeg?im_w=720"
          title="Diabat, Morocco"
          description="3,100 Kilometers Sep 6 - 11"
          price="$468/ night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/f54d6876-3222-4908-9270-be2198a0c17d.jpg?im_w=720"
          title="Santa Brigida, Spain"
          description="3,117 Kilometers Oct 19 - 24"
          price="$234/ night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/0ef08e4b-93f6-4af9-86de-39b4a4a74544.jpg?im_w=720"
          title="San Bartolome de Tirajana, Spain"
          description="3,196 Kilometers Sep 15 - 20"
          price="$70/ night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-563574637183919555/original/56679451-248b-4967-a738-1cfc5381b906.jpeg?im_w=720"
          title="Maspalomas, Canarias, Spain"
          description="3,072 Kilometers Oct 1 - 6"
          price="$279/ night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-48782658/original/2b089e8c-630e-4f81-9b50-13ae0e35c8b9.jpeg?im_w=960"
          title="Maspalomas, Canarias, Spain"
          description="3,072 Kilometers Oct 1 - 6"
          price="$279/ night"
        />
      </div>

      <div className="home__section">
        <Card
          src="https://a0.muscache.com/im/pictures/05e152ff-52cc-4852-8946-32c34e25d61f.jpg?im_w=720"
          title="Antigua, Spain"
          description="3,041 Kilometers Nov 7 - 12"
          price="$468/ night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/f54d6876-3222-4908-9270-be2198a0c17d.jpg?im_w=720"
          title="Playa Blanca, Spain"
          description="3,081 Kilometers Oct 8 - 15"
          price="$235/ night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/f594d56c-bbaa-4fb2-94f1-d0270f98f381.jpg?im_w=720"
          title="Saly, Senegal"
          description="2,398 Kilometers Oct 2 - 7"
          price="$28/ night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/miso/Hosting-624416114200178264/original/6bc51dda-0a43-469f-b51c-fc465e0914e8.jpeg?im_w=720"
          title="Marrakech, Morocco"
          description="3,024 Kilometers Sep 1 - 6"
          price="$649/ night"
        />
      </div>

      <div className="home__section">
        <Card
          src="https://a0.muscache.com/im/pictures/miso/Hosting-530992149798206035/original/5f3c8887-00b6-427c-8ce2-0041804de44f.jpeg?im_w=720"
          title="Costa del Silencio, Spain"
          description="3,195 Kilometers Oct 28-Nov 3"
          price="$57/ night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/36752721/7bcef9e0_original.jpg?im_w=720"
          title="Santa U`rsula, Spain"
          description="3,218 Kilometers Oct 20 - 25"
          price="$118/ night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/miso/Hosting-597239305955884440/original/bc70ffdf-1495-42df-825a-d0ade21cc606.jpeg?im_w=720"
          title="Tamesluht, Morocco"
          description="3,031 Kilometers Sep 2 - 9"
          price="$916/ night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/miso/Hosting-624416114200178264/original/6bc51dda-0a43-469f-b51c-fc465e0914e8.jpeg?im_w=720"
          title="Route de IOurica, Morocco"
          description="3,029 Kilometers Oct 4 - 9"
          price="$1,294/ night"
        />
      </div>

      <div className="home__section">
        <Card
          src="https://a0.muscache.com/im/pictures/aacbff80-d645-4746-9f4b-e7c829ac3a9c.jpg?im_w=720"
          title="Skoura, Morocco"
          description="3,195 Kilometers Oct 28-Nov 3"
          price="$51/ night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/b43f3388-f998-4c7b-a576-3a9025aca9cb.jpg?im_w=720"
          title="Playa Blanca, Spain"
          description="3,218 Kilometers Oct 20 - 25"
          price="$198/ night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/92181c55-af1f-4e5c-8dbf-af68045d06c7.jpg?im_w=720"
          title="El Lomo, Spain"
          description="3,031 Kilometers Sep 2 - 9"
          price="$58/ night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/ff896591-3017-4511-8171-39d4b55fd69e.jpg?im_w=720"
          title=" Callao Salvaje,Spain"
          description="3,029 Kilometers Oct 4 - 9"
          price="$399/ night"
        />
      </div>

      <div className="home__section">
        <Card
          src="https://a0.muscache.com/im/pictures/3a88556a-f54b-4c04-a75b-e475bbc7537c.jpg?im_w=720"
          title="Skoura, Morocco"
          description="3,195 Kilometers Oct 28-Nov 3"
          price="$1,026/ night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-27485987/original/38b5f4cb-897e-4eb6-ad9a-4f1b0c113389.jpeg?im_w=720"
          title="Playa Blanca, Spain"
          description="3,218 Kilometers Oct 20 - 25"
          price="$200/ night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/pro_photo_tool/Hosting-26359675-unapproved/original/baaa7799-2e6b-4dce-ac28-d98ab7d4c8b1.JPEG?im_w=720"
          title="El Lomo, Spain"
          description="3,031 Kilometers Sep 2 - 9"
          price="$79/ night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/miso/Hosting-597747922640766921/original/2f1ebd69-fde5-473e-9259-d48ee252d488.jpeg?im_w=720"
          title=" Callao Salvaje,Spain"
          description="3,029 Kilometers Oct 4 - 9"
          price="$207/ night"
        />
      </div>
    </div>
  );
}

export default Home;
