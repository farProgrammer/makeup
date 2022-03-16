import React, { Component } from "react";
import MakeupItem from "./MakeupItem";

export class Makeup extends Component {
  articles = [
    {
      source: {
        id: null,
        name: "Blotted Lip",
      },
      brand: "colourpop",
      title: "lipstick",
      description:
        "Blotted Lip Sheer matte lipstick that creates the perfect popsicle pout! Formula is lightweight, matte and buildable for light to medium coverage.",
      url: "https://colourpop.com/collections/lippie-stix?filter=blotted-lip",
      urlToImage:
        "https://cdn.shopify.com/s/files/1/1338/0845/collections/blottedlip-lippie-stix_grande.jpg?v=1512588803",
      updated_at: "2021-12-29T19:45:00Z",
      content:
        "beautiful collection of lipstick with glowing and hydrating lips",
    },
    {
      source: {
        id: null,
        name: "Coverage Foundation",
      },
      brand: "The Ordinary",
      title: "cruelty free,vegan,oil-free,water-free,alcohol-free,",
      description:
        "Coverage Foundations are full-coverage formulations available in a comprehensive shade range across 36 shades. These foundations contain higher pigment levels than our Serum Foundations but still offer a smooth finish that avoids the heavy makeup look that can make skin appear more aged. The texture is that of a lightweight, non-oily cream. They are very low in viscosity and are dispensed with the supplied pump or with the optional glass dropper available for purchase separately if preferred..",
      url: "https://deciem.com/product/rdn-coverage-foundation-33-n-30ml",
      urlToImage:
        "https://media.glamour.com/photos/593581ef75eb7a0289a89c99/16:9/w_1280,c_limit/ProductShot_color.jpg",
      updated_at: "2021-12-29T16:16:00Z",
      content:
        "Three of the shades have an additional letter at the end: S indicates Silver highlights and G indicates Gold highlights; these shades use natural-looking and exceptionally fine dispersions of metallic effect pigments for added highlight. As with most liquid forms of foundation, it's ideal to shake the container lightly before use.",
    },
    {
      source: {
        id: null,
        name: "Eye Go Wild",
      },
      brand: "L'oreal",
      title: "Eyeshadow Mega Palette",
      description:
        "The L’Oreal Eyeshadow Mega Palettes are sixteen pan palettes, and the L’Oreal Eye Go Wild Mega Palette is the newest palette to launch..",
      url: "https://www.makeupmuddle.com/loreal-eye-go-wild-mega-palette/",
      urlToImage:
        "https://www.makeupmuddle.com/wp-content/uploads/2020/03/LOreal-Eye-Go-Wild-Mega-Palette-1.jpg",
      updated_at: "2021-12-29T15:18:38Z",
      content:
        "The L’Oreal Eye Go Wild Mega Palette launched in mainland Europe months ago, but it’s finally made its way to the UK via Boots, but I don’t believe it’s available in the US yet.",
    },
    {
      source: {
        id: null,
        name: " HD Finishing Powder",
      },
      brand: "NYX",
      title: "My Go-To Finishing Powder",
      description:
        "A lightweight, translucent finishing powder that helps soften the appearance of fine lines and pores. This silky pressed powder has a fresh matte finish.",
      url: "https://www.nyxcosmetics.com/face/powder/high-definition-finishing-powder/NYX_186.html",
      urlToImage:
        "https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dw56ac5f58/ProductImages/Face/High_Definition_Finishing_Power/800897834685_highdefinitionfinishingpowder_mintgreen_main.jpg?sw=250&sfrm=jpg&q=70",
      updated_at: "2021-12-29T13:38:00Z",
      content:
        " Apply High Definition Finishing Powder as the very last step in your makeup application process.High Definition Finishing Powder sets your make up with a very complete, natural look. Your skin won't feel wet when you apply this powder",
    },
    {
      source: {
        id: null,
        name: "Makeup Brushes",
      },
      brand: "Spectrum",
      title: "EYES: Best Brush for Winged Liner",
      description:
        "While this particular brush (third from the left) is only available in an 11-piece brush set, it's absolutely worthy of your coins. Florida-based makeup artist Lennie Billy counts Spectrum x KJH #22 among her favorites for graphic liner looks or a classic cat-eye. I love a fine and soft brush that allows [for easy movement] when drawing lines, both on the finer and thicker ends of the spectrum, she tells Allure. ",
      url: "https://www.spectrumcollections.com/products/kjh-11-piece-brush-set?ranMID=44822&ranEAID",
      urlToImage:
        "https://cdn.shopify.com/s/files/1/0373/4889/products/KJH11PIECEBOX_800x.jpg?v=1631710387",
      updated_at: "2021-12-29T11:05:10Z",
      content:
        "Katie has hand-picked brushes from the full 25 piece set, and scaled down the selection to bring you an edit, designed for those who want a condensed collection of artist inspired tools.",
    },
    {
      source: {
        id: null,
        name: "PRIMER",
      },
      brand: "NYX",
      title: "PRIMER DISCOVERY BUNDLE",
      description:
        "Our NEW Marshmellow 10-in-1 primer is a multitasking primer that smoothes, softens, extends makeup wear for 16h, hydrates, soothes, evens tone, minimizes texture, blurs lines, adds a soft focus finish AND keeps makeup fresh.NEW Bright Maker primer is a brightening primer that delivers instant and all-day brighter looking skin while improving and extending makeup wear for up to 17 hours.new & improved Pore Filler is a non-drying blurring primer that instantly blurs imperfections and smoothes skin texture while keeping makeup look fresh and last for up to 12 hours. new & improved Shine Killer is a mattifying primer that controls shine and preps the skin for makeup application with a matte finish. ",
      url: "https://www.nyxcosmetics.com/value-sets/primer-discovery-bundle/BUN_010.html?GeoRedirectOff",
      urlToImage:
        "https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dwe70c2ad4/ProductImages/2021/BUNDLES/Primer-Minis/Primer-Minis/Bundle-2-1000x1000.jpg?sw=250&sfrm=jpg&q=70",
      updated_at: "2021-12-29T11:05:10Z",
      content:
        "Find the perfect vegan primer for your skin with our new Primer Discovery Bundle! This set features 4 of our iconic primers in trial size - all vegan formulas and cruelty-free",
    },
  ];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  render() {
    return (
      <div className="container my-3">
        <h2
          className="bg-success text-warning"
          style={{
            fontFamily: "Tangerine, serif",
            fontSize: "40px",
            textShadow: "4px 4px 4px purple",
          }}
        >
          <b>COSMETICS BEST MAKEUP BRANDS_____________💄💅🛍</b>
        </h2>

        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <MakeupItem
                  title={element.title.slice(0, 40)}
                  description={element.description.slice(0, 80)}
                  imageUrl={element.urlToImage}
                  MakeupUrl={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Makeup;
