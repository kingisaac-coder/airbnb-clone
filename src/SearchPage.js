import { Button } from "@mui/material";
import React from "react";
import "./SearchPage.css";
import SearchResult from "./SearchResult";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>62 stays · 26 august to 30 august · 2 guest</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>
      <SearchResult
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
        location="Private room in center of London"
        title="Stay at this spacious Edwardian House"
        description="1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
        star={4.73}
        price="£30 / night"
        total="£117 total"
      />

      <SearchResult
        img="https://www.expatkings.com/wp-content/uploads/2018/10/Airbnb-rental-tips.-Hostmaker-1-620x349.jpg"
        location="Private room in center of London"
        title="Independant luxury studio apartment"
        description="2 guest · 3 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen"
        star={4.3}
        price="£40 / night"
        total="£157 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/miso/Hosting-586105995921861586/original/c9078c29-febe-479d-b421-931f92d87267.jpeg?im_w=720"
        location="Private room in center of London"
        title="London Studio Apartments"
        description="4 guest · 4 bedroom · 4 bed · 2 bathrooms · Free parking · Washing Machine"
        star={3.8}
        price="£65 / night"
        total="£207 total"
      />
      <SearchResult
        img="https://cdn.bisnow.net/fit?height=489&type=jpeg&url=https%3A%2F%2Fs3.amazonaws.com%2Fcdn.bisnow.net%2Fcontent%2Fimages%2F2017%2F05%2F59151d0978bbf_https_press_atairbnb_com_app_uploads_2016_12_midtown_4.jpeg&width=717&sign=FeltIPi9cOWA36nVIeDvZxwgtiCZrpUyMRdvyZviTUI"
        location="Private room in center of London"
        title="30 mins to Oxford Street, Excel London"
        description="1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
        star={4.1}
        price="£55 / night"
        total="£320 total"
      />
      <SearchResult
        img="https://media.cntraveler.com/photos/5a8f258bd363c34048b35aac/master/w_2250,h_1500,c_limit/airbnb-plus-london.jpg"
        location="Private room in center of London"
        title="Spacious Peaceful Modern Bedroom"
        description="3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Free parking · Dry Cleaning"
        star={5.0}
        price="£60 / night"
        total="£450 total"
      />
      <SearchResult
        img="https://static.trip101.com/paragraph_media/pictures/001/676/061/large/969ae4bb-efd1-4fb9-a4e3-5cb3316dd3c9.jpg?1562227937"
        location="Private room in center of London"
        title="The Blue Room In London"
        description="2 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Washing Machine"
        star={4.23}
        price="£65 / night"
        total="£480 total"
      />
      <SearchResult
        img="https://image.insider.com/585029a0dd0895bc548b4b8b?width=750&format=jpeg&auto=webp"
        location="Private room in center of London"
        title="5 Star Luxury Apartment"
        description="3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
        star={3.85}
        price="£90 / night"
        total="£650 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/4065e97e-a27e-4928-a75a-7dc652748d4f.jpg?im_w=720"
        location="Private room in center of London"
        title="5 Star Luxury Apartment"
        description="3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
        star={3.85}
        price="£120 / night"
        total="£1,650 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/1285bf9b-01b8-4cca-ad72-489f400cadd2.jpg?im_w=720"
        location="Private room in center of London"
        title="5 Star Luxury Apartment"
        description="3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
        star={3.85}
        price="£100 / night"
        total="£1,150 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/b0e551a4-fd58-44ec-9be7-10f53da910ea.jpg?im_w=720"
        location="Private room in center of London"
        title="5 Star Luxury Apartment"
        description="3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
        star={3.85}
        price="£220 / night"
        total="£2,150 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/c25912a4-e7ec-4227-9222-37e26ba95100.jpg?im_w=720"
        location="Private room in center of London"
        title="5 Star Luxury Apartment"
        description="3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
        star={3.85}
        price="£300 / night"
        total="£3,150 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/miso/Hosting-628793615255170209/original/a4b9fea7-d417-46d7-96ac-c6ab6b08caa6.png?im_w=720"
        location="Private room in center of London"
        title="5 Star Luxury Apartment"
        description="3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
        star={3.85}
        price="£70 / night"
        total="£950 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/prohost-api/Hosting-563512585497983645/original/f6dc3af9-435e-4fd0-b50b-85a012b1a296.jpeg?im_w=720"
        location="Private room in center of London"
        title="5 Star Luxury Apartment"
        description="3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
        star={4.85}
        price="£100 / night"
        total="£1,150 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/prohost-api/Hosting-27692790/original/31eee0ca-e08b-497c-9a8b-50f8978d0a6b.jpeg?im_w=720"
        location="Private room in center of London"
        title="5 Star Luxury Apartment"
        description="3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
        star={4.85}
        price="£140 / night"
        total="£2,150 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/miso/Hosting-51327545/original/286568cd-c8aa-4665-a73d-ec6cd6884da6.jpeg?im_w=720"
        location="Private room in center of London"
        title="5 Star Luxury Apartment"
        description="3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
        star={4.85}
        price="$385 / night"
        total="$1,350 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/c25912a4-e7ec-4227-9222-37e26ba95100.jpg?im_w=720"
        location="Private room in center of London"
        title="5 Star Luxury Apartment"
        description="3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
        star={4.85}
        price="£140 / night"
        total="£2,150 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/miso/Hosting-2834903/original/73b4c8df-9391-4062-b7d2-15fd9925ee2a.jpeg?im_w=720"
        location="Private room in center of London"
        title="5 Star Luxury Apartment"
        description="3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
        star={4.85}
        price="$118 / night"
        total="$1,150 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/c3328b50-749e-42e1-9777-881f7e449dc2.jpg?im_w=720"
        location="Private room in center of London"
        title="5 Star Luxury Apartment"
        description="3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
        star={4.85}
        price="$284 / night"
        total="$2,790 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/ff896591-3017-4511-8171-39d4b55fd69e.jpg?im_w=720"
        location="Private room in center of London"
        title="5 Star Luxury Apartment"
        description="3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
        star={4.85}
        price="$399 / night"
        total="$2,999.99 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/b0e551a4-fd58-44ec-9be7-10f53da910ea.jpg?im_w=720"
        location="Private room in center of London"
        title="5 Star Luxury Apartment"
        description="3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
        star={4.85}
        price="$288.99 / night"
        total="$2,509.99 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/miso/Hosting-53508063/original/c7f14597-aebd-4db8-b5b5-b9b3c50298db.jpeg?im_w=720"
        location="Private room in center of London"
        title="5 Star Luxury Apartment"
        description="3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
        star={4.55}
        price="$127 / night"
        total="$1,699.99 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/prohost-api/Hosting-27692790/original/e736301b-e2b5-42be-aa63-fefc710119de.jpeg?im_w=720"
        location="Private room in center of London"
        title="5 Star Luxury Apartment"
        description="3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
        star={3.85}
        price="$941 / night"
        total="$3,089.99 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/miso/Hosting-51327545/original/1975c982-9712-4fcd-8380-ff1ca1207f8c.jpeg?im_w=720"
        location="Private room in center of London"
        title="5 Star Luxury Apartment"
        description="3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
        star={4.85}
        price="$342 / night"
        total="$1,059.60 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/7486123c-780a-4c4d-9a2c-b107160651c4.jpg?im_w=720"
        location="Private room in center of London"
        title="5 Star Luxury Apartment"
        description="3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
        star={4.85}
        price="$342 / night"
        total="$1,059.60 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/1240c54d-f41e-4527-a5a1-0600b50474c2.jpg?im_w=720"
        location="Private room in center of London"
        title="5 Star Luxury Apartment"
        description="3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
        star={4.85}
        price="$159 / night"
        total="$985.60 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/9395145a-5713-4d14-a984-19b11fcde5d4.jpg?im_w=720"
        location="Private room in center of London"
        title="5 Star Luxury Apartment"
        description="3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
        star={4.85}
        price="$195 / night"
        total="$1,009.90 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/3bbf1b93-595a-495d-bcd7-19aeca5a6787.jpg?im_w=720"
        location="Private room in center of London"
        title="5 Star Luxury Apartment"
        description="3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
        star={4.85}
        price="$95 / night"
        total="$1,109.90 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/prohost-api/Hosting-3524454/original/9af2f835-5d17-4932-8fdf-2f88cfb14a59.jpeg?im_w=720"
        location="Private room in center of London"
        title="5 Star Luxury Apartment"
        description="3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
        star={4.85}
        price="$239 / night"
        total="$1,228.90 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/prohost-api/Hosting-635234185144495643/original/578e60d6-c8fb-487c-8a89-6907fac2244a.jpeg?im_w=720"
        location="Private room in center of London"
        title="5 Star Luxury Apartment"
        description="3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
        star={4.85}
        price="$198 / night"
        total="$1,519.90 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/9e24ab75-5a4a-4bd7-b4b9-98809f755ab6.jpg?im_w=720"
        location="Private room in center of London"
        title="5 Star Luxury Apartment"
        description="3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
        star={4.85}
        price="$118 / night"
        total="$1,119.90 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/miso/Hosting-49765153/original/23511860-d9ed-4ccc-9cfb-1a74f9030cd4.jpeg?im_w=720"
        location="Private room in center of London"
        title="5 Star Luxury Apartment"
        description="3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
        star={4.85}
        price="$941 / night"
        total="$2,969.90 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/prohost-api/Hosting-664293518748785754/original/4a7de180-8740-4366-884f-bc32f3fe5f5e.jpeg?im_w=720"
        location="Private room in center of London"
        title="5 Star Luxury Apartment"
        description="3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
        star={4.85}
        price="$365 / night"
        total="$1,969.90 total"
      />
    </div>
  );
}

export default SearchPage;
