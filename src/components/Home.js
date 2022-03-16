import React from "react";

function Home() {
  return (
    <>
      <>
        <div
          className="max-width-1 m-auto"
          style={{ backgroundColor: "green" }}
        >
          <hr />
        </div>
        <div
          className="content max-width-1 m-auto my-2"
          style={{
            backgroundColor: "purple",
            color: "white",
          }}
        >
          <div className="content-left">
            <a href="http://www.maccosmetics.co.uk/">
              {" "}
              <img
                src="https://pyxis.nymag.com/v1/imgs/7d7/c6a/4a56c2f9bafc509e67e0eaad735c6565d7-mac-lucky-red-lede.rvertical.w600.jpg"
                alt="Mac"
                style={{
                  borderRadius: "50%",
                  width: "20rem",
                  backgroundColor: "green",
                }}
              />
              <br />
              <h2
                className="btn btn-sm btn-success"
                style={{ borderRadius: "45%" }}
              >
                MAC{" "}
              </h2>
            </a>
            <p>
              M.A.C’s new Lunar New Year “Lucky Red” collection could help you
              channel everything you need to get what you want. The
              limited-edition “Lucky Red” collection offers five lipsticks, a
              blush compact, and a blush brush. They all have bright-red cases
              and packaging, inspired by one of the most auspicious colors in
              Chinese culture. If you’re partial to universally flattering
              lipstick shade Ruby Woo, you can purchase that shade in the
              collector’s edition packaging, or you can try one of two new
              colors: “Lotus Light”, an intense pinky-red, or “Lucky in Love”, a
              mid-tone pinky mauve...
            </p>
          </div>
          <div className="content-right">
            <a href="https://www.thecut.com/2020/08/rosala-is-the-new-face-of-mac-viva-glam.html#_ga=2.40612322.1753607900.1646853836-1056649789.1646853835">
              {" "}
              <img
                src="https://pyxis.nymag.com/v1/imgs/6af/5d6/a77605300607b587faaada89ce5cb0b0f7-MAC2020-VG26-ICC-Crops-wo-Logo-3300x2550.rhorizontal.w235.jpg"
                alt="Mac Viva"
                style={{ borderRadius: "50%", width: "20rem" }}
              />
              <br />
              <h2
                className="btn btn-sm btn-success"
                style={{ borderRadius: "45%" }}
              >
                MAC Viva
              </h2>
            </a>
          </div>
        </div>

        <div className="max-width-1 m-auto my-2">
          <hr />
        </div>
        <div className="home-articles max-width-1 m-auto font2"></div>

        <h1
          className="center-align para-text"
          style={{
            fontFamily: "Tangerine, serif",
            fontSize: "40px",
            textShadow: "4px 4px 4px purple",
            backgroundColor: "orange",
            color: "yellow",
          }}
        >
          {" "}
          Makeup & Beauty Blog
        </h1>

        <div
          className="home-article"
          style={{
            backgroundColor: "pink",
            borderRadius: "2%",
            width: "20 rem",
          }}
        >
          <div className="home-article-img">
            <a href="https://www.opiuk.com/xbox-collection-gift-with-purchase/">
              {" "}
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdkcMRrTyyEJjVWYIFa4cuhWyWhHXEFoIM3Q&usqp=CAU"
                alt="OPI"
                style={{ borderRadius: "25%", width: "20rem" }}
              />
              <img
                src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRhjzuwORkUeqk6St_oB59wpCj-b6QNvl7KkAHpqQhzUxaI5FvS1WeBgfoCEKNVYVKXjQpEpx70&usqp=CAc"
                alt="OPI"
                style={{ borderRadius: "25%", width: "20rem" }}
              />
              <br />
              <h2
                className="btn btn-sm btn-success"
                style={{ borderRadius: "45%" }}
              >
                Nail Colors{" "}
              </h2>
            </a>
          </div>
          <div className="home-article-content font1">
            <div>Author Name</div>
            <div> 11 November | 3 min read</div>
            <p>
              Confession: The last time I can recall having bare nails was when
              I was a 5-year-old. When I was 6, my mom painted my tiny nails
              before a ballet recital, and they haven’t been bare since. The
              shade was Essie’s Ballet Slippers (great choice, Mom). I am a
              nail-polish obsessive and if you do the math, I’ve been obsessed
              for almost two decades. I’ve had more drunken nail-polish-shopping
              binges than I care to admit. At home, I wear rubber gloves for
              more than just washing dishes for fear of ruining my mani. Last
              week, my manicurist staged an actual intervention: She told me I
              needed a breather and sent me home with naked nails. So you can
              trust me when I say that I’ve tried every polish on the market.
              and these are the ones I know won’t let me down. Read on for my
              list, broken down by how long each polish lasts.
            </p>
          </div>
        </div>
        <div
          className="home-article"
          style={{ backgroundColor: "pink", borderRadius: "2%" }}
        >
          <div className="home-article-img">
            <a href="http://www.urbandecay.co.uk/">
              {" "}
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXIpFc7TNUrTizDfj1I7VTLaIwDHvq198hvEezDJv5UCNbNXUaKMNRxGgWM1yJkzNNjDE&usqp=CAU"
                alt="urban decay"
                style={{ borderRadius: "25%", width: "20rem" }}
              />{" "}
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhOg7VT_LAcESBKX8WMqOcvE36Y40xaZeoxw&usqp=CAU"
                alt="Urban Decay"
                style={{ borderRadius: "25%", width: "20rem" }}
              />
              <br />
              <h2
                className="btn btn-sm btn-success"
                style={{ borderRadius: "45%" }}
              >
                Urban Decay{" "}
              </h2>
            </a>
          </div>
          <div className="home-article-content font1">
            <div>Author Name</div>
            <div> 11 November | 3 min read</div>
            <p>
              If you’re ever looking for discontinued UD products, periodically
              search the sale section on the Urban Decay website. A friend who
              works in PR for UD suggested this tip, and it’s turned up gold! I
              found the sadly discontinued Cannonball Mascara there, and I got
              three tubes! It’s something to keep in mind if you love a
              particular UD product that’s no longer stocked on shelves. Anyway,
              candy. My childhood next door neighbor Karrie and I would ride our
              bikes to the corner store to buy candies that would probably break
              my teeth now if I ate them, ha ha ha! Lemon Heads, Boston Baked
              Beans, and these little hard blue jawbreaker-like candies whose
              name I can’t recall… I want to call them “blueberry somethings,”
              but I can’t remember. We also loved Nerds and the powder dips
              where you’d get a sugary stick to dip into even more sugar. 😁
              We’d gorge on candy right in front of the store, then take our
              sugar high onto our bikes and ride around the neighborhood for
              hours. By the way, about this look I’m wearing, the upper lid has
              a swish of black liner via Chanel Hyperblack, which I’ve been
              extra loving lately. It’s similar to MAC Blacktrack but so much
              better because it’s darker and more intense (so less layering),
              and it sticks like glue to lash and waterlines. SO GOOD!
            </p>
          </div>
        </div>
        <div
          className="home-article"
          style={{ backgroundColor: "pink", borderRadius: "2%" }}
        >
          <div className="home-article-img">
            <a href="https://www.maybelline.com/lip-makeup">
              <img
                src="https://image.shutterstock.com/image-photo/bangkok-thailand-apr-5-2019-600w-1369443089.jpg"
                alt=""
                style={{ borderRadius: "25%", width: "20rem" }}
              />
              <br />
              <h2
                className="btn btn-sm btn-success"
                style={{ borderRadius: "45%" }}
              >
                MAYBELLINE{" "}
              </h2>
            </a>
          </div>
          <div className="home-article-content font1">
            <div>Author Name</div>
            <span> 11 November | 3 min read</span>
            <p>
              I recently teamed up with Maybelline on Instagram to do a
              sponsored post for their newest Made for All lipsticks. I was so
              impressed, that I wanted to do a blog post just for fun
              (#notspon). Maybelline lipsticks have always been my favorite from
              the drug store. There is a huge range of colors and finishes and I
              really think they’ve set themselves apart from other drugstore
              brands in that way.
            </p>
            <img
              src="http://boltblogs.com/wp-content/uploads/2018/12/Maybelline-Lipstick-Swatches-800x1070.jpg"
              style={{ borderRadius: "50%", width: "20rem" }}
            />
            <p>
              These are 3 of the 7 shades from the collection. The collection
              has matte and satin finishes and was tested on over 50 skin tones.
              They wanted to create the perfect red, pink, mauve, ect. that
              would be flattering on EVERY skin tone. If you’ve ever tried to
              match a lipstick, let alone a drugstore lipstick, you’ll know what
              a task this is. You can read about some other experiences with the
              lipsticks on Elle as well. I had a lot of success with these 3
              shades, although I’m just one person. Based on what I’ve seen and
              read though, I think Maybelline really nailed it, so I wanted to
              share some swatches in hopes that it might give people a frame of
              reference when shopping!
            </p>
          </div>
        </div>
        <div
          className="home-article"
          style={{ backgroundColor: "pink", borderRadius: "2%" }}
        >
          <div className="home-article-img"></div>
          <div className="home-article-content font1">
            <a href="https://www.clinique.com/">
              <img
                src="https://images.stylight.net/image/upload/t_web_product_330x440bg/q_auto:eco,f_auto/vo1v5kmljn65ny06mnpq.jpg"
                style={{
                  borderRadius: "25%",
                  width: "20rem",
                }}
              />
              <br />
              <h2
                className="btn btn-sm btn-success"
                style={{ borderRadius: "45%" }}
              >
                Clinique
              </h2>
            </a>
            <div>Author Name</div>
            <span> 11 November | 3 min read</span>
            <p>
              Wear Everywhere Neutrals All About Shadow™ 8-Pan Palette.Versatile
              eye shadow palettes are perfect for day… amped up for night when
              you layer multiple shades for extra depth and dimension.
              Long-wearing shades are crease- and fade-resistant.
              Ophthalmologist tested, too..
            </p>
          </div>
        </div>
        <div
          className="home-article"
          style={{ backgroundColor: "pink", borderRadius: "2%" }}
        >
          <div className="home-article-img"></div>
          <div className="home-article-content font1">
            <a href="https://www.pixibeauty.com/">
              <img
                src="https://cdn.shopify.com/s/files/1/1463/5858/files/MainBanner_withGT_MOBILE.jpg?v=1643990736"
                alt=""
                style={{ borderRadius: "25%", width: "20rem" }}
              />
              <br />
              <h2
                className="btn btn-sm btn-success"
                style={{
                  borderRadius: "45%",
                }}
              >
                Pixi
              </h2>
            </a>
            <div>Author Name</div>
            <span> 11 November | 3 min read</span>
            <p>
              Start your holiday season right by adding a few radiance-revealing
              must-haves to your winter routine! Hydration and nourishment are
              key for happy and healthy skin no matter the season – discover a
              few of my top picks to help enhance your uniquely natural glow!"
              -Maryam Maquillage Beauty Guru, Maryam Maquillage, created an
              exclusive holiday bundle with her favourite winter hydrating
              Skintreats. Kit includes Milky Tonic 100ml, Hydrating Milky Serum,
              Rose Oil Blend & Botanical Collagen LipGloss.
            </p>
          </div>
        </div>
      </>
    </>
  );
}

export default Home;
