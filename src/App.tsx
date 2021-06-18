import Header from './Components/Header';
import Footer from './Components/Footer';
import Place from './Components/Places';
import './App.css';
<source />
function App() {
  return (
    <>
      <Header />
      <Place
        title={"Place 1"}
        placeName={"London"}
        countryName={"United Kingdom"}
        mainImage={"https://images.unsplash.com/photo-1490642914619-7955a3fd483c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1970&q=80"}
        googleMaps={"https://www.google.com/maps/place/London/@51.5285582,-0.2416812,11z/data=!3m1!4b1!4m5!3m4!1s0x47d8a00baf21de75:0x52963a5addd52a99!8m2!3d51.5073509!4d-0.1277583"}
        textExplanation={"It's the city I've grown up in!"}
      />
      <Place
        title={"Place 2"}
        placeName={"New York"}
        countryName={"United States"}
        mainImage={"https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bmV3JTIweW9ya3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}
        googleMaps={"https://www.google.com/maps/place/London/@51.5285582,-0.2416812,11z/data=!3m1!4b1!4m5!3m4!1s0x47d8a00baf21de75:0x52963a5addd52a99!8m2!3d51.5073509!4d-0.1277583"}
        textExplanation={"Also known as the Big Apple and the City that Never Sleeps, New York has an incredibly powerful draw; like moths to a flame, millions of travelers visit this iconic city every year, attracted by museums, Broadway, Fifth Avenue shopping, and so much more."}
      />
      <Place
        title={"Place 3"}
        placeName={"Mallorca"}
        countryName={"Spain"}
        mainImage={"https://images.unsplash.com/photo-1617532408070-369f42b448b0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bWFsbG9yY2F8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}
        googleMaps={"https://www.google.com/maps/place/Majorca/@39.6131614,2.6314658,10z/data=!3m1!4b1!4m5!3m4!1s0x1297b8766606c129:0xb7eb9bff02d2ecc0!8m2!3d39.6952629!4d3.0175712"}
        textExplanation={"From beautiful beaches and turquoise waters; gorgeous countryside to tasty Mediterranean cuisine; fabulous hotels to lively bars; sunny climate to fascinating culture: the truth is, with Majorca there is something for everyone."}
      />
      <Place
        title={"Place 4"}
        placeName={"Paris"}
        countryName={"France"}
        mainImage={"https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGFyaXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}
        googleMaps={"https://www.google.com/maps/place/Paris,+France/@48.8588377,2.2770202,12z/data=!3m1!4b1!4m5!3m4!1s0x47e66e1f06e2b70f:0x40b82c3688c9460!8m2!3d48.856614!4d2.3522219"}
        textExplanation={"The French capital is one of the most romantic cities in Europe and one of the world's most visited cities. There are endless reasons to visit Paris repeatedly: it is a beautiful and cultural city, very walkable, with great sights, and it has been a source of inspiration for many writers, artists, and filmmakers."}
      />
      <Footer />
    </>
  );
}
export default App;