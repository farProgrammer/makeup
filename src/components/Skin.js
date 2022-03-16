import React from "react";

function Skin() {
  return (
    <>
      <div>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1Ct7jlzJKyvM71mbmOFtyf1S2cakH_0L7crol7obKlEhNnIF4iXul6xrQCnJYjdCtp9Y&usqp=CAU"
                className="d-block w-100"
                alt="..."
                width="400px"
                height="400px"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://1.bp.blogspot.com/-ivx5oisiPxY/YBBNCKOSYVI/AAAAAAAADmQ/yzlH0sr4_TIhCLHQxAZWbscTu0EE7eGeQCLcBGAsYHQ/s0-rw/Remedies-For-Basic-Skin-Care.jpg"
                className="d-block w-100"
                alt="..."
                width="400px"
                height="400px"
              />
            </div>
            <div className="carousel-item">
              <img
                src="data:image/jpeg;base64,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"
                className="d-block w-100"
                alt="..."
                width="400px"
                height="400px"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <h3
          className="center-align para-text"
          style={{
            fontFamily: "Tangerine, serif",
            fontSize: "40px",
            textShadow: "4px 4px 4px purple",
            backgroundColor: "orange",
            color: "yellow",
          }}
        >
          Home Remedies For Your Skincare
        </h3>
      </div>
      <section className="remedies">
        <div className="container my-3" style={{ backgroundColor: "maroon" }}>
          <div
            className="row"
            style={{
              width: "75rem",
              backgroundColor: "green",
              borderRadius: "10%",
              marginBottom: "10px",
              text: "bold",
              color: "white",
            }}
          >
            <div className="col s12 l5 push-l6 offset-l1">
              <a href="https://www.kiehls.com/skincare-advice/turmeric-skin-benefits.html?GeoRedirectOff&gclid=CjwKCAiA4KaRBhBdEiwAZi1zzjjd526S-NBjmICN9Q81CC3Fznwn0Lr4q9xehGpUZAZnXwlxUFoMVBoCCe4QAvD_BwE&gclsrc=aw.ds">
                <img
                  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFhYZGBgZGBwcHBwcHRocGBoYGBoaHBkeGRgcIS4lHB4rHxwaJjgmKzAxNTU1GiQ7QDszPy40NTEBDAwMEA8QHxISHzcrJSw2NDQ0NDQ0NzY0NDQ0NDQ0NDQ2NDQ0NDY0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAMMBAwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAAAQMEBQYCB//EAD0QAAIBAgMFBgQFAgUEAwAAAAECAAMRBCExBRJBUXEGImGBkfAyobHBE0Ji0eFSchUzgpKiBxSy8SMkU//EABoBAAIDAQEAAAAAAAAAAAAAAAADAQIEBQb/xAAqEQACAgEDAwMEAwEBAAAAAAAAAQIRAwQSITFBURNhgQUycZEiQqGxFP/aAAwDAQACEQMRAD8A9mhCEACEIQAIQhAAhCEACEIQAIQhAAhCEACEIQAIQiQAISu2dtEVHqIcnpuVI5rfusPLI+I6SxkRkmrQCwhCSAQhCABCEIAEI1WrKqlmYKBqSbAeZhTJOZy5Djbx5dIAOwhCABCEIAEIQgAQhCABCEIAEIQgAQhCABCEIAEIQgAQhCABCEIAJGcVWCIzHRQT6CPTMducZuUN0aufkMz87RWaeyDkQ3SMVsnbjJjRVc5OxDcrOc/TXynrYngFc9689i7H7S/HwyEm7KNxuqjI+YtMejny4vvyVjLsX8IQnRLhCEIAJGsRXVFLMQqjUmRNp7USgt3OfADU/wAeMwWN2xUr1N5j3R8K/lHlxPjMmo1UcXC5fghySNZg2bEVSzCyIQVU873W455X9JoZV9n6RFEEixclvI2C/wDECWkZgT2Jvq+WSLCEI8AhCEACEIQAIQhAAhCEACEIQAIQhAAhCEACEIQAIQhAAhCEAEnm3bXHb9UqDkndH3+f0m521jhRos/G1h/cdP38p5JjMRvEnxnO12TpBfllJvsV1RLt6TW/9Pto/h1vwye7Uy/1j4fuPMTJb/e9PvHcPiCrhlNiGuDytMkJOMlJdhSdOz3eErtibQFeirjUixHJhr+/nHsfj0orvObD5noJ2Fkjt3XwPslzLbd7VJSutIhn56qOnM/KZ7b3aepVuqXROQ+Jv7j9pmSCZzdRrr/jj/ZSU/BOxeOaoxZmJJ4mTthYM1airwJ+Q1+QMp0BY+Am+7EYOwZzwso882+0x4MfqZUn8lY8s1lNQAANALeQncIT0Q4IQhAAhCEACEIQAIQhAAhCEACEIkACEj4jEqguxA98BKmv2gA+FSfE5D7zPl1OLF97oZDFOf2ovRFMzDdpip7yqF62PqcpKodpqJ4kHjlf6RcNdgn0lX54GS0uWP8AUvIsi4fGo/wsp6HP01kqaoyjJXF2IaafIsIQliAiQjGMxApoztoqknykNpK2Bh+3207stFT8OZ6tp6D6zF2uPOP7QxJqVGdjmzXhQTuzg5Z7pOT7meTtlc9PP0nSUTYmSHTve+c5xeNCDdWxbieC/uZCt8IqX/Z/tCcMGXUuBuoeB/qPLpxiYvFPXYs7E/ToOQmKW/xX7xmpwNXepqt8zrIzqailfHgs26oRl3m6exFNLh6mSETd6n6QCE5nIcpk3FRrD07kAaXnp+w8NuUVFrEi56nP6WHlMPsTC79RFtkWHoMz8hPSROr9Nhbc/gdBdxYQhOuMCEIQAIQhAAhCEACEIQAIkS8gYrbFBPiqKOhv9IAlZYSp2rtQU+6tixHkORP7SPidvru9wG50LCw621+kz1aozEsTck8frORrvqEYrZifPnwbtNpXJ7prj/ouIxRYklizfTllwkdn5+/dp1uiFh7E4Dbk7bOsklwiOwJa5A5D7m87YAA3GfIe9I8q+PvwjbL74+VoFrOUaxBFwetrdJZ4ftBVQah8uOvhmLSuY24ZmwHM9Zw7G/P6fIxuPNPG7i2hc8cJqpKzabM2ylUC9lfipP0PGWs8337cPvLHDbXqqAFbLLIi4HrpOtg+q0qyr5Rgy/T+bg/hm4mP7f7R3aS0gc3Nz0XT1P0kxe0LjVAw/SbH0N5mu0WDbFVDUpsDkAENwQAOB0PE8NZryaiOXHWJ3Zgy4ckVyjK0xc+cmU1sSPMTk4crcEEEc4YnEhQCPitl4A8ZypW3RiaGcfU3B3fj4+A8PGUIBLZyRiKl7mdLh3CioUbc0DWO769Ztxx2xCvA3iWsZJwGJKMCdIzgtm1MQ9kUmxzP5V6toJqU7HAgBqxBGqquXkzHXxtCaUlTGwwznykOI6kA6ztaZY55COrsf8HQl04XtvDhnYWOcm4WgSfdpyckXCW0pKEoyqRcdlcJ3ix/KLDq38D5zVSDsrD7lMDicz56fK0ls4AuSAPHKej0mP08KT69WOiqR3CVGK7R4Wn8VdOgO8fRbyoxPb/DLkodz4AAf8iD8o55oLqwtGuhPOsT/wBRWv3KKgfqYn5C1pX1O3GLc2XcW/8AStz/AMiYp6vGujsjcj1WEzGxNj1mC1MXUZm1FMnujlvAZE+GnWae0fCTkraosLCEJcBJV7T2p+HdVF2+QloZ5Tie0DpVdsipYkg6XvKydIvCO5lpisfUrsy71rak3Ki+lhpeNYbZ6qQ7Eu/NtB/avD5mQ6O3aJJuGQk3y76eQvcSbTxlNvhqIfAndPo04GqWqk33XsdXF6SXHH5JLGFucFI5r6qfoY4E6mc14Jrqn+h++PZjRQaWiMI/uHkfQzkJ4eoh6cvBO8Y3OMUIfSOhCbm3TIiBp+Xjb34yfTl4DeRyhHGc7vP0F4424NXVerKPny1jZxVL/wDRT0uf/G+cusGR9E/0HqRXcQ07nO4t5/eOqgtfj79+ciV9r014Ox8FFuerEH5Rn/HUtcJ6tl5hQD842OhzS7UUlniu5ZKTJVC6kOx3FF/iyLdF1PWZmt2iqDJd1B+kZ/7jc/OVlbaLNqxN9b8ZswaFQacnz7cCZ5nNUkXXaHaaO3dGmV+fW3jMfWrljcmScRUyveVhYkkAXvNEsa3WczVQSaaLvs3s5K9UCp8CWZgPzH8q+efkDPUKeHQALZQu6Bu27u7pYjS3hPMdnMcOFbMuTvOBn3fygeI+5mqwfaEOAzZgcABfO+V+XnLpUh2DHUfd9TQYlRTXeAso1UAAAXsbASC+IDN3Ce9ncDQStxW3k0QMP7tOlpTVttBDuLY8c7+WXh14QaNMVSpl5tzagpUHYAFlXLe4szAAepmQodqMS5AVkX+1Rp/qvOe01ZnoArdt1gz2/KtrLvchc/ISo2Qw3SeP2i8sI7dzVs52qbUjUV+0eJbI138ju/JLSoxOKdz3mZj+olj84jZicMLTNvk+rMttje6YbwERnJyH8xUpEya8gdIS2QnpXYnsxuAV6q985qp/L4kc+Uj9i+yQG7XrL4oh+TMPoJ6BN+m039pfCGxj3YsIQnQLhCEIAcNoZ4btWmd8+B/n957pPJe0eDC1qing7W6HMfKKy8Rsdg+4zaXHwk2Nteh5dZIoPmL28JJw+GysePsRDhTy9/Y6TLGSNri6J1N8o6UTVlB8h5SDQa1r6+9Y+2YlitHVYqM114a8I0+Jyyv6mLu8D7EjOlvvpIJR2a/93qZyainW/v8A9xplHX2f5jNz/HgJDRdEs1EvwyyPT3ectjLDLl5SFUy0096++EbJ95QSBkitXY8fLw5yEKxB8JJTL36xmogI985ZS7FJR7g9a86QyIwKzta8JLwEX5O8S+Ug0q4ClrWJBA9YuMqXFhqch1Mq6rkm3BcsvDjJjGxGZ3JFnTx7ltbZ8zrNrsTY6un4lTfDuLjdNt0cG01bXpbS886pgsQB8RyHU5AZ/ee2YSjuoq5DdVQOWQAiNS3GlHuPwpO7Iz7KRqf4Vja3xWBck6tcjX5eEynaLshUQB6Dl1GT7wG8g53HxDnll4529DoYRh3jrw/f6+srsdVvUFNWIKgsP6S4tqOIsZXEpR5kWnT4iYXZdM0wQSGL5G5FmDZEG+t5m8GwSqyg927Dnocs+M9F2t2fw7VDusUZ/wAoyAJtcqbG3SU1HshTuSzVFVDmd5Bz0O7plGSpp33MufHLIkkimNXgPWH4ZOZM2VPs/hqdm77m1912G6ORbdAJ6SaztmFsV4DIADpaxHhac+TUXRXF9OyTVtpeDDU6XITadiuzYqEV6g7gPdB/Mw4nwB9TG6exqVQglSjZbyqe4f6iotcHjbTLTgdxg8dSX/4V7rIq90aBdAQdCDNekxKUt0ugiWmnjlUkWoiyPRxSt8JF+XGPzqp2RVCwhCSAQhCACTz/ALd4bdqh+Dr81y+lvWegSi7W7P8AxcO1h3k7w52HxD0+krKNqi0JbXZ5tRadux04SLTfMx8H0mKUaZ0IztCBec7XxhaB8NecklikXGUZZBz8I6z3jToff7wBETjY+/ec5C2ndYfIW9j3pEL5eX3gyUFQDx59JH3QTnf3YZRXf37EaY3952lLLjhPvr0jRPHX9opf3nnbxjbP7y8/tAKEcftIrpO6r8ZEq1PfvSXiLkI+QLXzGnXSR8Lht8gjW8MSx7oOhuf2+UmYNd0XsfQ+t+Ub0Rm+6RxjtmOi33tfWen9n9qVKtJXuoawBNr3Ya8RYTH1mR6YBse75g3+WnoZfYNKlDDBkAKndAXPeLOd0EW4nLPhlE5OUvI2HDZoMdtqoGZFCU1QDfdhcgtawVcuGeeglfhqdRHaod2qhud65Vwo1Yqe7kORztOaex6KoqOm++TOA7hTUt3mPetrfMy1xTBKDGwz7oAzF2PrlqSTnKJlqpcCFabMag7xuQDnkFAGQ63MrcRjVqVaVEgANUuwtkwUb1vPd+ZktF3UVb3soGX1lVs+lbEhz+Uk5+KkDzzkN9xu2kWjLcsxzY5+Z4RA0UVd6/Hged/2jRIB1nMfJuiuzG8ZWCDevYLY+QzPyjVHHvVqKFcgG+W7cBcjnfnyPMxjarLYB8kINxwZbWI6WvnzAHGZnZ3aBP8AuHO9beBFiRmSeHDlN+li1Fsx6mSckj0BK5AYXZGBBLJYX5EBgw4W0Bykqjja4K7tUOvEEEMdSchlpxy04zPrtJVp2YFTcA3vcngT4WEsKeNAQ2zNiLnXTlHqcqM8oK7o0NLtGgJVjmBfQi9teFjbyltTx1MqGDrYi4NwMvOeQvUUsu89iM8rWtl4epvJFPE/i99MmW5sBbeFs7ga5RyzNLkU8Cb4PWxWU6MvqITydduouRVgRkcjr5GEn134K+gvJ69EiwmkzHkvazZBw9clR3X7y9L5jqP2ldRqjyPOer7b2UmIplGyIzVuTftzE8m2ns+ph3KOtiPQjgV8IqcLH451wSUInTsLftK1KslJWFrTO40aoysV2t6wZhOC05DWy4SCyYlXpINZrffrJbnLWQMQZBI27+Mb/F9/aR97h7tOC9pDiSpDoq298Z0XyzneA2ZWr5ohK8zpfraXuD7Gs3+YxP6V9eEXLJBcN8kpN9DK1cSJHRS50NufD1nq2F7IUaYDGio8WN7dN6Ta34QUod1gRYqFBXobyj1W19H88Eem59H+jyjE0VRcviJHjnLPZuJXeu5Nj6XlZthwld0TNVbujU2IBt4nO02uyezKpTP4lmdhcEgELbNlW/hx11mqUk4p+RMYtSaXYj7CwgxJ+ABTY3IU3vqMxkBp5zdphvw0CgXF9LC/hYcZT7O3fjXu2yAHAaZ/Xzjm0tsOALoGHhfe63Ggim0XUZdjObW2kaFR3Hfpsbm2bAnJrE+tuvLORR2k2IVSBuBC1jfevY23gLZEjnp4zL9pXR2YhNw2JbvXU9QAMzaVOwNuNRezf5bHMa7v6h94xY90bXUhz2yqXQ9SwovYG7eJOfWSRggVIHxNceIFjnfnfjGdlVFYA8DazA8PC2R6+MsmxSo1tbqSbeXDxzPlFr3GzlfCKHE4tUbeZWPBt0qLkacPXxEqKnaWqibwooGvYNZm55m7C3kbS2xdVW1t/PpHcNhEdWRhlYHLM3GeUrCMU7otk3baswOMfEYol3YgHgOIGgJHDwyHhM1jsEytbdPz+k9fTCoO7YZctPLylfjdjA3YcMzppHxy06E5MNq7MZsUVdyxYsL3scwLaS+w+KrZLuAnQZny/LJWxsEFrOdFC6fqvmb++Eu33FFwB14HzlZSTkTGH8episS7AsHurXzXh4jx/iW1FVRl3b2tdieRtbIcDcTjtTRL99BckDe+Vo7sDAviKqoxI3jYnkBmSfGw9ZZ81RROk7J26GzFHevxuc/S0J6phcElNFRVAVRYQjvRfkz+t7EqEIR5nCVW29jpiaZVhZh8LcVP7HiJawgB4XtDDNSZlIzViGHIjKNUK98uM0f/AFF2ey1zUCkq4BuOBA3SDbpfzmHpsQbXJ9IuUUx8JNF6WuJzeRqLnn792jgV+X1meSo1R5Oib5DM3sAOMnnszVNt4ol+BJJHgbDWOdmsP/8AZTfto1swe8FNvv8AKbnH1xluqDYEZ8Li178xMuabi6Tr4ssuXVHn6dkCT3qo8lP3Mkr2FpnV6pH6Qo+djNY206i6FF6AftIuI241s6nHgAJmlmkl9z/SHLE30S/bJeDwpp0xTRbKBbRQbdTG9pY+pSXUKMibAX4AZjLgPSVdTbV/zMfPKQ8RiFqhlctustrj4siDl6RKyV0bLrFzcqGa/aC4JZiSSRc3J1NrKPCQ6mKq1BamjHqLeoyAElYLZ1AHu71+ZIJPyl3h8IOANhztb0tnIlljF21f5GU9vWjzmnsauuJotVT433r5FSVJYg20+HSeiVarVkH4Yzv03SNbnS8mVcIjBQ6g7p3hfLvA7wOWtjB2ubcPd5aevtKlz/gmGNK6IWzNnmjvs7B2drgLfdUeeueZyj9eqdLC3IAco47iMNMU885O2x0IJEHaGyqVZSroM+K91hfTTL1BmXq9hSrb1KpvgfkdbH/eMj6CbZbaxA0bi1mbH0fHvyRPBCXVGc2fUqYcik652uoGg/TfQjpFwmKdnbePxanXoCR0micBgN4AgG4uNCNCOUjPgh+Sy5nIk2N/W2k34tZCfEuH/gh4ZR6ckLcJN9ZPoViuYX66cdZwdm4gWKCkee87geVkN5LpYKuRZxTHR3OvhuCa0o9mLk5Mp3xdnNgbfSOU65Iu2nv1lmNgaXYZAaC+nWPL2cW2ZY+g5dYcWWcuKMdtHEGnZ0OtgwIFjbTWd0K7uAAbk2vl9R4TYf4Lh1sCge2l+9a2hzyEkJuLYKtuHAAeQlZS9gjwUeC2P+ILOSi6GwJYjwFvrNls00cOgWlT3RxOVyebEm5MqKdc8SB65xXxQHL35S0csl0QqeOL6s0H+LDkPX+IszH/AHC/p9IRnq5PIv0YeDdwhCbjEEITio9oAVG1sOrkhgCLWsZlMf2MpPmt1PqJtnSNskHFMlSa6HnNTsVVX4HVutxGH7OYsfkVujD7z0lhG2eUljixkc0kebjY2LUgik1wbghlFiNOMvETGOneVFYG2hJtzIU2v0mnaoZDrV2RiRo2cxarElFfnqasGWUn2szrbCrN8TsD+lbfUmQa3ZQk51a2v9P3AE1w2o3hHF2qeQnPUILpJr4Rr3ZH2/0ymF7PUU+LvEC/eBv8yeRk5Uw4sO5Y31FwBbjbnpLTae0w1Fxax3D6WznneMxDFlCXOt8jbMC3vwi3ibmkpWXi3tblwabZmzlDGoD3Ae6oJ+IHW/LLKXJfy/eVXZusGpimzbrqTbkwJvlfPK8t3wTaqQen8zPlw5G7q/wG6N8sYd5yOfITpqDcjG2Q6WPobzM4TXVDVXY5JGvvrG6tTgAPHpb9526EcDOGB5SKLqhFbhEHG3P7QVCeB9J0qNyPvrLqEn0QNpdw3s5yGtrOxhzxIHzMZqYqkhzbebkMz6DTzj4aTLPtQqWWMe5aYCsAp3jkDlz8o6+OF8sh4yiOKqP8C7o8df4kmhgKp/NboPvO1hwSUVF9jDkyxtssv+4Y6A+hPz0jdSo51+ZFvQRaWx2PxOxkynsZONzNCwIQ89dCqdyfzqOhJ+0bZrn4r+RP3mip7LQflEkphFHASywRKvUSMeUc6BvSWuztmo6nf30bj3lsR1Iv5S/FATv8GXjhiuxSWaT7lV/g1Dkf9zQlr+COUIz04+EU3y8ss4QhJKCExljHHMatJRDObRCs7tC0kBhkjbIJKInBWQTZDZBynLYZWGa3kopALIcbJTorW2TTP5bdCR9DGX2MnAuP9R+8ubCG6Ip4Yy6pfoYss10bMjtHZdQZIGItqd068v5lZQ7N1NW+Ijnofdp6AaYjRpiZXoIuTlb58Gha2SjVIosDs9UUA2JGpsM4uKAtlcdNPSXLURODhl5TR6Mdu1ISsz3bmzKPiwhzDeX/ALiHbqDUsP8AS32BmmbAIdROTsql/QIt6ZMatS+5mj2ho/1t/tf9oy/aOkNC56I37TVjZNL+gek7XZ1MaIPSR/5UD1PsYxtvs3wUqreSqPrecitjH+GmqeLEt8habtcKo0UekcWiOUvHTRRR6h9jDU9gV3/zKjW5Duj5a+ctsF2bROE06pOlSOjjihUssmVtHZqjhJqYYCSAs6Al0ijbGlpidbkdhJog4CRd2dWi2gRZzuw3Z3aKBJCxNwRJ1aEAHoQhKkjVScwhJICEISQAzmEIAJEhCQCEMQxYQJOTEMSEgBBAwhJASEISAOhCEIAEBCEkDoTsQhIAURYQliAEWEIAKICEJAHcIQkgEIQgB//Z"
                  alt=""
                  style={{ borderRadius: "50%", width: "20rem" }}
                />
              </a>
            </div>
            <div className="col s12 l5 push-l6 offset-l1">
              <h5>
                <b>Turmeric Powder:</b>
              </h5>
              <p className="justify">
                {" "}
                Turmeric revives your skin by bringing out its natural glow.You
                can mix your turmeric powder with coconut oil, honey, greek
                yoghurt to apply for your skin.It improves your skin’s potential
                to produce collagen, an element that is necessary for its
                elasticity and vibrant nature.Mix about 1 teaspoon of turmeric
                with 4 teaspoons of chickpea flour.To this add, a little amount
                of plain water rose water or milk to form a thick paste.Leave
                this pack on for about 20 minutes before washing off with cool
                water.
              </p>
            </div>
          </div>
          <div
            className="row"
            style={{
              width: "75rem",
              backgroundColor: "green",
              borderRadius: "10%",
              marginBottom: "10px",
              text: "bold",
              color: "white",
            }}
          >
            <div className="col s12 l5 push-l6 offset-l1">
              <a href="https://www.womenshealthmag.com/beauty/a19934865/uses-for-lemons/">
                <img
                  src="https://res.cloudinary.com/mealthy1/image/upload/ar_16:11,c_fill,f_auto,h_760,q_auto:best,w_1140/v1505779004/rose-water-lemon-juice.jpg"
                  alt=""
                  style={{ borderRadius: "50%", width: "20rem" }}
                />
              </a>
            </div>
            <div className="col s12 l6  pull-l6">
              <h5>
                <b>Lemon Juice:</b>
              </h5>
              <p className="justify">
                You can use the juice of lemon or lemon skin in various
                combinations to get a natural and quick glow on your skin. One
                of the simplest home remedies for glowing skin is by using lemon
                juice with sugar.Make a nice mixture of equal amounts of lemon
                juice and sugar (2 teaspoons would be enough for one
                application).
              </p>
            </div>
          </div>
          <div
            className="row"
            style={{
              width: "75rem",
              backgroundColor: "green",
              borderRadius: "10%",
              marginBottom: "10px",
              text: "bold",
              color: "white",
            }}
          >
            <div className="col s12 l5">
              <a href="https://www.bebeautiful.in/all-things-skin/products/honey-and-milk-benefits-for-your-skin">
                <img
                  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVFRgWFhYZGBgZHBgcHBwaHBweGhwaHBoZGhwZHBkcIy4lHh4rIRgaJjgmKy8xNTU1HCQ7QDs0Py40NTEBDAwMEA8QHhISHzQrJSc0NDE0NzQ0NDQ9NDQ0NDQ0NDQ0NDQ0NDY0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDY0NDQ0Nv/AABEIAKkBKwMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAEBQIDBgEAB//EADwQAAEDAgMFBQcCBgICAwAAAAEAAhEDIQQxQQUSUWFxIoGRofAGEzJCscHRUuEUFSNicpIz8YLSU6Ky/8QAGgEAAgMBAQAAAAAAAAAAAAAAAAMBAgQFBv/EACoRAAMAAgEEAgEDBAMAAAAAAAABAgMRIQQSMUEiUQVhcaETgZHRFCNC/9oADAMBAAIRAxEAPwD6xC6AoAKQKkgnuqJYpNK65wAk5BAFb3holxAHElL8V7QYenG88X4X+iQe09V76b3wS0AwOA4wsjshtF7oe4kiwa0wB3rLkzUq7ZRqx4Jc91M+n0PaDDPEio22hMHwKLobQpP+B7XdCFj2bGwzhZrh0cfupj2foMvvvbH937KVkv2kQ8cemza2VVauxg7Rj6rL4fFupAtY57h/e4GOiqqse+7pnS6u8vHCKLFzyx/W2oPkjrKS4nbD3SJPUIdmCeeQVhpU6Y7R9dEurqv0GTEoUuqYhzjuFxHl4my09PEFzW7wh8DejKdYQWDxfv3FrYDGxJHHQDnYoksIMZjivOflrralcr+TROn5Wiqsq2Yrd9eak96XYt1+4rjxPdwzQlxph52m2bg53PAdBdMKVTeG8DI0WRdVAIk5mBzPADitBsvs02zvAmSQ4/DJnd5dE3JiUymVqUlwMn5RMetErx0MHZbvi+80gkkcRHBHE25IWm2HhxBDhP0juzWjolVZpcr2hLSSexDV2cyod+k6Dq12vIFKMXgXtJNwRocwtNtXCEw+m2HyJAPxTawGRlVtqb0sqDtCRORaeHNepcpvTKKnraHlE9lo4Bo8AB9lVj9ohghud78OnNUur7recJDtCuRPH6apryaQqMfc9sWbcxT3TeS8xzuQM9Vr8WYssTggauJpsN4eHHo3tnyC2WMddTh8Nlc3lIW4goJtnIyqqaTe0EwUfQtmummwnPdCJJQuAH9Nn+IREppQ7K4YXt5cQBLdC7uhRDl6EAShc3V5dQBHcC7urq4gCgBdAXGlTagDrQUFtmpuUnGeA80a94aCTkLrLba2h7wgDIaKl12oZE7Yu9oMcf4V+4C5xEQ0EkTyGi+X7PpP395u/IOgPnC+g1nlpmSOBVzNo27bWu55HvhYqpN8m2U0uCOydpf0y4jtNFwePRV4b2vY9/u3tuTDZEAngDKqrta5+9Ta6TZzRLpBztmkuO9nK7ny2i+OMgd9yEKq9EOZ9n0DDsY4bzDHEO49URRdAvug9R91ksEcU0Br6LsviDmxPMby66jiCbU3eLfyr92vRTt37NBtF73Wa5jG8SfwlFTZ4fYYgAjiwnn+pVfy6u6N5ob/AJPAnwlWO2U+39RgBygknpEQT3qlbflFlpew3ZdP+GaYe1+8bkNIHhPNNjiGOMB7ZOkifDNInUSxoG8HZkkayR9lPA4hgeCb5gGMibcOUrB1fTTadLhpf5LS+R72IsJQ38VSa/ccW7x+Xh1P/SAx+0N4ObTJkNd2hIFosDqb90LMYXC75LnGZJJ1EQZN+kxZc7D0VUt0tfXA1a9s3Rc1zo3QTIAH1P1V9dzWiI5dyytJ7mAkEhzBpnMSW8xEHlMI7+bscwF070CZyNsxGn0S8vRZMa4W9/oCSb8hjBDmgZoZ21WjLL5eEcdOmY68M1U2g9z3kOIDoAAN4sJkGYPAcUK7FOgSYEd2l4PAdw0yW/ocFYdun50RkSo0zNo/1GGbyN7Pd3TY5xrbLhzQuIpP961mj3SCMt0G99YCz7MVEOMwLgDMnk03NtPsFttnVHe5bM3uJzE69SL+C6afc9MVrtK65DZIuSddTl3C0dxSDaD4BvdNsZUvGg9eu9Z/Fh1R4Y27nEDxUvlkrhDX2MwUl+Idr2W+RcfDdHeU4xbrouhh20qbWNyaI6nU95k96AxC2TOp0YrrurYHUUMOO0pPK5g3jfAPEKUQb7BPaWgA5ADwsid0LO4ZjmGd5NKeKafiEc5UzSYVLXgPhe3Aqmuacj5roA4+auUJloXrcVAgcVwMHFAFneolyiWc17d5oAmCuwoBqkgCkLsqC6SgCYcs/tDYpJLmOGchpt3Sm76sJPitut3wxgL3nh8I5l3BUtS18i8uk/iZbaVGqHhhYd42HA9DkvYbZzWXe7fd+lpho6n5k7xOMc4GCDpIynXuS1zTIWOplPg1y6a5O/xJFgN0HRoAHRXYcue6Aeck28VQ8AnODpzsiqDy1gYbdNep+wjuUbJaDmBrM7zmDx5etFyrjCLAAZgHhA6X1/OSFe68GNR+Dnf1eyqc7OLkgO4EznYn6nUK3cV0dr1CRM2tPCI7wc9DPlFJmxnIWBt2eBBOpichaNCol5mNAJPCJG7cjdjM24DgiKc5X4O1sTYxvG99eDuKXvZbWjhpzrzA0veefrmhzSa6bCeIs7LXu+uaZBsZ6wM+oEk9PJCvLbzf4e5wI42BM6j6KGgTBxSe10gzlAcd06WEyDYcVU7DRJ3N0m5k9nKOy4GO4+aMaSBYmADY31i868jzUKlaCRuSeLbTeCIAmbgwQjSJ2xQ+q5p3nCAGuBMzIg3HUkTbRL8A5+5kABBJduwQHSO6Drx6BPxULg+GizS6/aFogQcpHik2LZv2DBHzQ4jSTnPCeMKjWi6ewfEVcrgyDZonPPM/XgqKzCBJBAmZMkj7BFYtz2AbjtyBEloPmPXkoYZ9YkEvkG8kgt75QSQwGFdiKjKbN5rCSXv+Ys+a/wAs2FtSFuqzw0WgBogDQD9o8kHsXBtpte8fObf4jKBpJk9IUse+xTF8ZKeaFONxFp4z5q72dohrjVcHFxs3sk9XTly8UpxLwDx6JzgsX2QDaALJmFc7YvM+NIdPxZPyP/8Ap/7IOtVn5XeX2KHdilW7FBatmU9VfyPgVTs871QD+4fVWVKtldshkOkyfJVZMmig62CoqYprTEFxXi8uFrgdx/B8uqHGHk8ePLqDl91R7XgctPyEMx7swB4oqntS8bpKA/hiOXer204FhfmiapA5ljOnjWHOR3oxm64dlxSAUiMxfkrGPczKUxW/Yt416HpZzK57rmUDT2icjdFU8UHax1V1SYty0WgLsLsniuyrFSBQ+JrtYJcf3UsRWDGklZ3F4h73WuTpwVKrtGTPccx+OL7acB91X7sMG6Ik/EfsFBmEDXAuN890ceMq97JNlnbb5Y9JLhALhExCrDYvrlbj6KPOF1e5rG8XEAd0r38VRYOwHuP6gx5no6I8FTX2X39AzcLAlwjhmTztnKpq1GtyBcc5cYHgPyrMTtEj5HD/AC3Wx9SkG0trNYO0QCcgLk259eCXTS8F5lvyGnaZBMgQNBI89J8eiro7boOPaeGwXSHWLgQZjQ68cxwWSx2Oc4S424LP4l7nODhpcclEJ0yaSlH1NmMpyXOewRaQ4CAWyAAIFoIHTmrnbcoMkB2+4QIEkOyjt5QAOJJWRwLRVptfkSII5hQxTNxoPNLq3O9eRs41Wt+A7aG1KzqhO+5oDpaBYAxE8+pVmz9vOEMqSWT8QzgGYPESc0G7dcA7WII4oQs04JCt7HOJ1rRtaVYEQ1wdY5RA7W8JmwJ4ZGMgArHuuZ1JJuLDs5c5t3uORCy2y8b7uWu+B2flPPQJ+3E7+UQZOXSZ5WuOGWidNcGeoaYXTaA1wO7JGQ4SSM9LkxpIlD4DCljSHXJJ4zeb29BG02WgEXJAmLay7iScxw3eN7nGDzkxqdZv3XP5TUti2xVVogyRkZ077oGjsVr6gbENJl3Jogn6DxTjE07kza97iIJy0dYz3BHYGlut3ogu45hoyB9c0KeQ7izEPDRAEADLhoB4DySPHVC47rbkmB1RmOxA3SZi59eXiVd7O4IOBrP5hgPgXeuavM91aK1XbOzmD2GxrRvjedrwnomDMGwZNHgjYXoW1LS0jC6be2AuoRkFFlLiAjiF4NUkA4wrDmwHuUv5Uz5Zb0uPAq8I7CCyCdiN+Fey+Y4j7rjMQbGbjI/bmORWifTBSzFYMZgX+v7qHP0WVemTova9ocBGhHA/jUK4sHFKw/cZUdwaD3h7QPJxQlLa7XWLonholU1L5GynSHDnEc1EsJ9WQjqzRfenkh3Y+ZnL1mFV2iylhpqHJtgNTqphxAufogf4toEg/f0VScaTl64qO9E9rNDg8ZFibaJl60WKOJa25Pfopt2k8ZPgeuaYsv2UeLfgYbRrh0lxhvAoCjjJs0RNp496CrvLj2yT9Pwq3PLbcckmq29jZnS0Moc54vobadVY+sxnxGeQGSzG2vaB9B+5u7rIBa6LO434g6JFiPaL+6JyGZhUq9eEWmN+TZYjaTA7e3Wh36j2njkCZI7krxO2yBd0DjfyWV/jqlU9hpA/UbnuCZ7N2XLpeS53P1ZKp0/I1TKO4vH1Xg7jSJzc6fILJBr2vc6qS53E+XcvqVDCCIj0Fm/anYu8zfYLt04jVWlaX7kNpv8AYyNSqXG+SspsGSpwzCU0o4ZFccErkK2Q/ca9uliFZiw8s3jlItr1UcNSLTIAKbvwwfSedd0npF/sk1y9jY44AMNBaDrkuFl1RgKuiLKza02jQ+SlzEy2RiDdmoynLO0nhJQBXqLt1wdExeOPI8lZPQulvg2eGqSCN4G50kzYyPO+sgaIguvPcfEC/CNBySzA198b7XXAAzgBtiW2+YEdTZHMrhwzyHatBB7MiPlN8s7rZD2jHa0y2mJdF7kccoPcLNFuiniawAt0Hdkq8O7s70/FEcgfRPQJbtPFQIV2+CEuQanQdVeGiXAGXAZ7s3ic3G8d63mGq03sinADQBu5FsaFuYWW2TR3QP1G5PE8O5aBlBryC4EPGT29l3eRn3rTglKTNmptkoXYVhwr25Frxz7Lv9hI8gpB4HxMe3ukf7NkeKcIKd1d3Ve17Dk9p7xPgrhSUgBhqOwzIauMoiVbUxVNnxPY3q4IAkQqqrJCpO0Q7/jY+oeIbus/3fA8JQeOY97f6jw1v6KZMH/N9ieghSAI7EgOhptMk8xMNHiSe7gpV8JSqDtMBP6m9l3796EDAXRFhnoOAEZdylUqhguT0sNFnt7ejRC0hbi9iVWn+k7faeYDh3ZHqlmJq1ac77HsA1c0xH+WSdM2iCc7dbT3FMaeLsNZgQOdtdEh40/D0PVteUYr+Yyc7eXVd/mQHzLR7U9k8LXkwabzPbY4i5GZb8PPJYnH+xmNpOPuz75mjgQH9HNJz6Krw0vZZZZfoYtxoOv7qPv+frxQGF9nMWfipPHWAPEmE1b7KV+LR1e1U7a+i+4+x9tHCnfn5T5IOowN65rQuIIg+vNLsTgv0/8AS2ZMXuTJjy+qK8VhW1GkFjXtdctcJBM5gHI80id7MYXekNcw8GuLh4OBT5r9wtn4HQDyf+D9eqjiabZsPQKTQ2QDDbGotIG/bSQB4FMWspss0AkICo6LWkT98l5lFzRvQY/VBiOM9yRWWZ8jFLYY/ENFgqn1ARB1y9cFzF7Md7plRh3pEvE3PDdHRMcBgGhlxvHUnITmAseT8hErfn1oso4PmW38M3DvnJj7jgDq31xQNPaDnRuMJ5mwWx9pdnlwNN0T8VM8YOXW8HxWWwGcajT7LXjyRcKlzshqk9bDsLhaj7veGjg38lEvxPuYLQXOJiP1f23V1N4DeCt9n8L7x5qOEiYb04q8R31oi77J2KqrNx2RbyOiKa+U29p9nGG1WD+1wv8A+J+3gs/TdCRmxOKaNGLKrlMKJUN+FyVXWSWhi8hGBxT2PG460zBNpgiY4ibc4Wkoj3rxTa3dYWtc4jLcMOPazJcbdJN1j6IcXANkukQBmSt/gMMKFKHfFm6830aOQyH7lPxJ/wBhebXD9ksbVDZGgHmbeQ+qye0sTvGOP0/f6JltLFQD3k8zw81nX1JJPFGW/SDDj/8AT9G42U6Q08gtNhnWWQ9nak028hHgYWpwzrLo4HwcvMtU0MmPUwUO0rsp4kuc0HMA9RP1VRwrP0M/1H4US88VB1UqQLRhKerGd7R91YwMZ8LWjoAPogX1yh6lc8VGwGdfGAapFtDaHDNVV6pSfG1oknIT5KtVwSlyKcVtqoyo/ceQ3Uc856/hDM2s957RnreRzlKnP3yXZEyfFXUWd/4WGqezoTKSNPgXsItBNrEkBNqVZrOE9cuBWLdjGszcAeSizHPdZrT32H5Qq0DnZsXbRa2bkk89eFkO/bIAmS08cvGT9kjp7PqvEvfuDOGiPM3+iFxlKjTzl7/Fxj1mp7mR2ob4v2k039L8fASs8fbJv6nnnu5+KV4mpvVBusLbZOsSUX/K5uabT3KU/shr6Psb8IP0+arOEjQ+P7Jm9g9FUPYOHmt5gEG1KMS0gQRl9fse5L8PiCW7rsxYnmLfvHNOtpYbs7wHwyTxg5pFTouLwGj4sxpOjukCD0Cw532N0/BtwvuWhls0MdvNLQScpEyNQmmHho3YiBA5cFXQpNYGwwSBEj6rlcmZXkeqzLJkdSaUt8F9aiN0NFvyuYWn/TjW/iqDjBEE3CvwGKa4uaOM31FhI7/skw2344Ck1Ip2pghUhjrbpBzIixvbqsRt7Yxo1A9hLmPmcpDhBPWZnxX0jajYG9HzC/KIv5JVtalSdSJqAANBO9kW8weK29L1FYrU8teNF18pRg6hL4Y2xdY9NVqdn0gxoaIskGw8Mfjeb6cgtThgeK9Z086nZz89d1a+gpzN9hYYgiMj4rE4/BFjy02ut26s1jS5xEDl5dUmx39dwduACMzaeBKT1ubFK+T5G9LNt7S4Mvkue6c8hrQSSYELTNwTG5kDoB9SmdLBbnwyXHU6LlRl/qP4rwb2u3yxf7P7HFM7xjfvfMNGoHPmjcdUtJ0Fh9+ZROIduMDQJJmSYFhe3JJsdW3hwK3JqVp+TPW6ezP7UxFw3hc9Slrq6c4zZLXdrtNcYuDIyi4P7JO7ZTmu/UBqMu8aJEVFvyaH3TPg13s2C1gBzI3uknLy81rsI9YvYhIcJ4EevBa3BPXUxccHKy8vY3YVNVMcrAn7M5FyrerSqnoAHehKjkVUQlRBCBKpWS9qceKdMz853RHifIea1WJdAK+ce0mKFStu6Mt3m7vsO5UycIZjW6FTdrX7LT1KbYF5qDtEjkLJYzCCU62fSgiyx259G6U/YdhdkAmwz8eqe0cNTpNk587qhldrGk9b8hqs5iNqPxDnBksZN3akDQcAoleya+hnjtque4sZnqdG9ePRW7L2YDd1zq46+vJR2Vs0NAtbjz++ae0+yd2LKV5IfC4AsRsdj7Fs/WeqgzY7gLOTN+JbpB/Kh78cR671fgpybxwHJVuC6SoOW4wlT3chCz+Pwjmu3qYyMiMxrl10Whc7khXvvb6JdxNzqi805e0D4eo5zAXt3XXkZd6i+VfWMqulS3jFvqvDdXEznqZXCZ08dfFNinENuRMnnw5cvFT2Q7+oADkHTHdY8Lwm9TCs+YA9Vyq0MLiOM+Ko8mp1ov3JrRHaFQyAR2c7cuKAxOLY0FxNoTF7ZG8TkLLJ7bozXLQTENO7oCReyf0mJZ8qlvRV0pkpw0PeXNbAJsI06Jy0QQ0ZnM8B+T+65s7Z8AWVmAdL50Ic7weWDyA8F62v+uFM/sYZXdTpleOplgBLTBsJz45Zgcs+MpfUeeK1r6bXNIcJB4rO0sO01XsA7LZAJiTNj3AfXkuR1fStWnve/s6PT5l2tNeCp+AFWj2CC45cJHy28PNG7CxIDPdvkPYIIdYjnfS9kr2aX4WqWVPgfdhPwk8f7TkCOSbbTwjal5LXAQHNJDhbU6i6fijsW58ryiuSu59r8PlMD2g8ySQY7kmrG41mwHeP3UdouxLAQ0h4469SMkJhsRUcd57QC2Izv5pdvzSGRO9ILfUgmF2hUhwd16EHMHkqKj94knVXYBu87dOv1WN/HlGprjTCqZANuo/Cc7OxCTfw/bAHjyiRPku4bEbruq63TZ24TZys+JKtI21F8olpSPBYqQmbKsrcskv2YnDQQSqnlcNRUVawTNopo5UKDrOU6lZBV6ysiBZtzGbjCddOZ0WBfhy/4r6zrPFaDbtV1R8Cd1vLM8fsgMPhzqFD5LJ6AsPQc03BI4694TnBNEyrqNDkiGYBpyEHkI+6TWDfKHzna4Z7FYL3rC0Oi2ijgdltpgB99ICJZhXtiDPIiD4yit+PiaW8zl3EJbw0kNWWWTFQAQAeXIQqn17xyz9ZLzKjTqDwhRa2+QM5Z26yqcliJPnfvUf4V/6vqp1DFy4DyCh/HU//AJGf7hHbsjuSPpTmqBZzVkLoproGAGfTtmhnUnc/NMn01U6lyHggAF1InOe8FSA3Bf1yRYpch5rxo8vMrmdT+MxZm6nhv2OjNU8PwK67zoJcbActT4Ier2mk3JOn7J0MPFwFAUjzXPn8G+N1+49dVrwhPhsK+JLz0kGOS87Zku3iZI6Jw6jy+i82jy8gurh/H4cbTlc/Yqs9UD0qMaJEyp7uo+m7R7ns0/pvEubOpDmg9CVpyzkPAJBt3Cy4HImC0i0EWt5eKd1HxnuXojDzWn7GlM7zUm2rsx/ZfRMOYSdy0O4wTrnY8VXgdovYQHCdIGv+P4+iZVa5qACm8NcDJBs7w4eSwXkjJG0ttevZrmaiv0/gXUcbRrNLKgaHnNjwWlrotBNx1zSDFU61M/0nl4/S74h35HRabEse+Q+k1+d3MB8NEjrYZzTm9vKAB0AhY8md6Wk+PtGrFKbf+xccTVdO+0xFrQc8nTbwCnSDd0yDvTkIjK0k3nkrnUXHMnvUmUeSzVl7jSpSBjSESrsBT7QKOwzabW7zxvH5W5CAYkn1krjj2B+/ui2VpI+g6aczkrdm5235KVke2kgnE0RTa+q4dot3WNOpIEPjTI908khw2Fe+409dYTDEYw1Hh751gZwEZhWQi+reJJQuF437M/8AS2t0+QfZ29cOBBBH3n7J7TbDZQIeDojKdSWgdR5rn5eqyVXcuCHCSSLfdkjjGaSY6oWHskkGc1oXOtAQ+LphrI1P1Ktg63JF922/sS8ctaM+cU7WQhMTitAblE7dMMgWNz4D8wlGzMMSZOa9P0HVPPO2tGTPi7Ggyngy7mimbL4gJnh8PABIPijabOEromcTs2cOXh+6vGA4fdOGMVrWcp7kAIjhSOPcutYefgn7afJT/heCCTMPwzTmxp6tH4QtfZLHD4B66Fa40BqovwbTlBUBswb9iMn4I73f+y5/Jmfp83/lbOrs9p0Hgh/5aOHrwQGzStCnuqqOakxSQWFqjurpK8CgD0BeheMldAhAHN1eLQuuHAqMoAjux6Kg43yVl+Ki63oIAg5o4DyVOJwwe3dJHXUHiiBV0+4XHPKhpNaZKbT2jJYrDOY7dd3EZH1wVPvSLEB3XPxWjx1MPEEGdDaQVm8TQcwwR+CuL1XSXjfdj8HTwZptaryXsxhAjee3vmOk3Xn7RMEF5cODmD6peXFcLlznnyrg0rHLOvxDYjcy1OaFNd2kj1qiCq3AJKpjlpFJkqQaALrj3gevsvME3cD4FOx4atlbyKUXMpl2V09p0xHDkgsAGtMRnHoppUaMgs3Xd00pa0l4ETfdyAOBBKBOJcHOIdachyA/dNqlO0kpXXwpkbokdqbyZuZlxy07wk4nL8l3yF7N2o4ua1w3pMDrc3MZWTp9AOu4knwAWfwGAdvBzhDReJ7W9OsZARoSDKdVsS1ovmqZe1VqRTXPAq2zs6nDi5zhMRcZzZuWSXYOiAYF+qZV6W/JdM6XmOiDwFMz3nTmu3+GbdNb8ehHVpKV9j7DUDGXruRrKXHwyVODyzHruR44fSF6M5xWymrQ0c/EqxrOQXXE+igCs0Rx81JtKOCk0gcu/wDddLuSAIe6HoFe92FbpkuElAFL2dfAIf3J9NRxJhV7ruHmgD28fX/am2V4ZqaAOArpHVSauO+/4QB6/NeC85cqZFAHnn1Ci4ngrHLzskAV7pzP3US2OPrqrai4EAD7gGpUHt5kK+rl4fZVP06H6oAFeCdfNUVMKHCCfMfhX1viPVQ1QTsVV9lfpPigKmz3ibStE7M9B9FRU1WbJ0mKuWh8Z7Xsz7sI8aeYVZwjzy5mD909Gapp5lZ10WL6G/8AJsUs2UQZ3gep+1wj6OE3bSJ5EjyBRrs+77hX0fXgVpjDEeEJyZaryCMw+UHuLneV1cykdT671MZ9xU3aLj/nOInX2O6V8sExLySBkFeaG6ABmfUoVmnU/ZH1vh/8fsV521rSNzfCKpFgDM6cp1QVfEwXMcLi7TnLdD1/Ctp/8g6D/wDTkt2t/wAncPum4oVVpgTo1S5l2ovZ2FIuRE3VOAy8E4oZD1ovV9D0sYt3Pk53UZarhhFJsBEiVWz14LrMyukZSYBzv5fhTL+R8175ShtR64oAKBOd/L7qYJ1nyQ9PJWlAHi7gCPH7KTHniO+fuuHJQKALC7jHcCu+9ZwP+pVSuQB//9k="
                  alt=""
                  style={{ borderRadius: "50%", width: "20rem" }}
                />
              </a>
            </div>
            <div className="col s12 l6 offset-l1">
              <h5>
                <b>Milk and Honey:</b>
              </h5>
              <p className="justify">
                This is not just one of the best combinations for preparing our
                dessert, it is also great for your skin, especially if you have
                dry skin.Milk has lactic acid, which helps you to treat cell
                damage and correct the issue of dead cells.Make a paste using
                one tablespoon each of honey and milk.Ensure that you scrub well
                in circular motions so that the mixture gets nicely spread on
                your face.You can prepare this paste daily and apply it on your
                face for about 10 to 15 minutes before you wash off with
                lukewarm water.You will notice that your skin would become very
                soft and moisturized within a few days of trying this
                application.
              </p>
            </div>
          </div>
          <div
            className="row"
            style={{
              width: "75rem",
              backgroundColor: "green",
              borderRadius: "10%",
              marginBottom: "10px",
              text: "bold",
              color: "white",
            }}
          >
            <div className="col s12 l5 push-l6">
              <a href="https://www.kiehls.com/skincare-advice/aloe-vera.html?GeoRedirectOff&gclid=CjwKCAiA4KaRBhBdEiwAZi1zzq9dvVbMv_8yLGfni65rGIdJy_AnXXyLYfSvgWhOfijRaJI4wPNHAhoCK1sQAvD_BwE&gclsrc=aw.ds">
                <img
                  src="https://previews.123rf.com/images/walisaa/walisaa1802/walisaa180200096/96517735-crema-di-cura-della-pelle-della-vitamina-del-collagene-dell-aloe-vera-illustrazione-di-vettore-dell-.jpg"
                  alt=""
                  style={{ borderRadius: "50%", width: "20rem" }}
                />
              </a>
            </div>
            <div className="col s12 l6 pull-l6 offset-l1">
              <h5>
                <b>Aloe Vera</b>
              </h5>
              <p className="justify">
                If you want to get rid of dry skin, pores and skin damage, all
                you need to do is to squeeze the juice of Aloe Vera leave on
                your face after you have washed it well. When you use aloe vera
                regularly on your face, you will notice that your skin becomes
                moisturized and youthful looking within a short time. You could
                also mix a spoon of aloe vera gel with a spoon of turmeric,
                milk, and honey to make a thick paste. The anti-inflammatory
                properties of turmeric & aloe vera, when combined with the
                soothing properties of honey & milk make your skin look supple a
                young-looking once again.
              </p>
            </div>
          </div>
          <div
            className="row"
            style={{
              width: "75rem",
              backgroundColor: "green",
              borderRadius: "10%",
              marginBottom: "10px",
              text: "bold",
              color: "white",
            }}
          >
            <div className="col s12 l5">
              <a href="https://juicychemistry.com/blogs/skincare-blog/potato-for-skin">
                <img
                  src="https://i.pinimg.com/originals/9f/d4/9b/9fd49b362c5b3f4d2f651854ce1f0ac5.jpg"
                  alt=""
                  style={{ borderRadius: "50%", width: "25rem" }}
                />
              </a>
            </div>
            <div className="col s12 l6 offset-l1">
              <h5>
                <b>Potato</b>
              </h5>
              <p className="justify">
                If you want to keep your skin free from the dark spots caused
                due to the exposure of the sun, you should try this potato pack
                regularly. The natural bleaching agents in potato give your skin
                100% protection from the harmful UV rays, dark spots, and other
                aging symptoms. This is one simple and effective home remedy for
                glowing skin that you can regularly try at home, without having
                to spend a lot of money. All you need to do is to grate a small
                raw potato and mix it with a few drops of honey and rose water
                to form a paste. You can replace rose water with plain water or
                honey as well. Apply this pack for 20 minutes every alternate
                day to see phenomenal improvements in your skin.
              </p>
            </div>
          </div>
          <div
            className="row"
            style={{
              width: "75rem",
              backgroundColor: "green",
              borderRadius: "10%",
              marginTop: "10px",
              marginBottom: "10px",
              text: "bold",
              color: "white",
            }}
          >
            <div className="col s12 l5 push-l6">
              <a href="https://www.baywaterfarms.com/blog/carrots-great-skin/">
                {" "}
                <img
                  src="https://i.pinimg.com/originals/f6/41/54/f641541f59cf27a2d6243c0029b41d6b.jpg"
                  alt=""
                  style={{ borderRadius: "50%", width: "20rem" }}
                />
              </a>
            </div>
            <div className="col s12 l6 pull-l6 offset-l1">
              <h5></h5>
              <p className="justify">
                Carrots contain beta carotene and natural antioxidants, which
                prevent your skin from damage due to free radicals and helps to
                keep it refreshed at all times. You need to blend 4 small
                carrots and a piece of ginger well in the blender. Strain the
                juice and add some more water to it to get the consistency
                right. Drink this refreshing drink in the mornings every day, if
                you want to see visible improvements in the overall health of
                your skin.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Skin;
