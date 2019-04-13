import React from "react";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardGroup,
  CardSubtitle,
  CardBody
} from "reactstrap";

const PotentialDateTemplate = props => {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-sm-3">
          <Card>
            <CardImg
              top
              height="300"
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUSExIWFhUXFxcWFxUYFxUXFxgYFxUXGBcYFRYYHSggGBolHRUWITEhJSkrLi4uGB8zODMtNygtLisBCgoKDg0OGBAQFS0dHR0tLS0tLS0rKy0tLSstLS0tLS0rLS0tLS0tLS0tLS0tLS0tLS0tLTctLS0rLTc3LS03Lf/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAEAAIDBQYBB//EAEgQAAIBAgQDBQQHBQQJBAMAAAECEQADBBIhMQVBUQYTImGBMnGRsRRCUqHB0fAHI3KS4RVTstIWM0NigoOTovFko8LTVFVj/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAJBEBAQACAgIDAAIDAQAAAAAAAAECEQMSITETQVEEYSJCUjL/2gAMAwEAAhEDEQA/AN2KVOiuha9HbztGiuxTstOC0bGjIpRUmWlFGxo2KcBXYrsUbGjYroWuyKelwCoua8eO1zuTXVtE08PNR/2ggE6mNwAZGoGo9azvLWs4YJTBzzp30Ou4bHKwB8tfKilao+XL9X8WP4BfCmosVgWZGUHKSCAcoaD1KnRvcatS0a10EHal81P4Y8p43wbFW7t27duHuCbZ7xE8QggxbtLdkAEaneCYgVki9tnORs4DWzbBUqGiBcyq8HMBkmQZgyNK1n7UOOreuLhLRg23bM2vibLlYBVMnKGbRgQ2vSqDgnCr0SVOa41vKhIUqAVY3FtkNKyUSCJ8W0yBGV2rGaRXFFtrYfDEyV1ZQHlW1Nt8mUlVObNsZEggCbvD4q2oRdCobMhuIiFVZouO+hLqZ18B013ANVHFuFlMQiE5wHW5lnK8gI5DGMoENAMkwRQ6NedgAGWSAuiIFBYZQEABSDmAMcjruazl0rW2g7T4bC2rSFSHVbpVwEZrieAspDEGUkbMQNuhrmPtF1W33ZViWAIw0EL3U25hlRWMhtQIJJ0g0NdxOIuGLty5LC5Ie4VKurKxVVIGpCsIUx5nWlY4tdt3S99hcuq2VldkBKkaOw7ssUBBAMCC3RqfbyEGGs4qwReDm2BbYkMVPhCwSEBMDM0CY1XqIrnCsFYfAm++c3HdrkZC7H96VZwklSJzsTAI0MiqDi9+0bt3urYCvbZxD5spg3GUnXN7BMdTyq74PdZLVh1vXLX7k6gDLJzMUZwSQpIzZSux86rZa2P4xYi0ECsbecoFCA65VJDLsCC4YAeZJ0iu8IIW3aLpbUsbalpKFVU2oYiSSJdBLA6dJBAd7EF1Vc/drbBYmbhEgkK+W40Lc3zADXNMaiq/DcdRbi5nLAbZD7OpJyg+EEzpy0pb0NNzwDizd+lsGynjKsqIma4ikhSZcZB4iZjUqYmIN3xS6MVdGFRmUqczsASMqtBhlPhaVIGaRD6g6V5tw3G2WEm3nysHUHwTEawHPizLqfEAQIAE1rOC9sghVVtqEfV8zuSLjBiFVoyqM2u206TvWPJ+ouDZf2P/AP2uf+3/AJaVV3+kOK//AF7f9a3+VKr+T+y6D4FRY24EQmVUkEKW9nNBIzbaadaGxGLyIWALEDYRO3vrFcR7SvmuanVfY8WWCABIygqYJIDflSuVh9Y1XZnHvcJt3dXBJzCDpr4SV0kQR6jrrpO6UV5X2a4+UukBTB0ChQfHH2mOYAnf8Oe44W164Ve6+UL/ALMKQSYIl5Ox3gUpnVdIue7U8qQs12aZcvdKfajrD8oFDXsUIhfjUF4k1GVgb1UqdfjjXI1NPtvzqmxeLIbJoegJjTnyg0MeL5VkkwPCduR389IouQkafOaz3Er7rcyg5pgOQAPdMjQT4Z8xJECpbnFNA4EjQZftTlgqfWfWmIouZswkGVaRJEiSdduR06VGVXE/DMfF3u9RJDamQFOsDXfNO/KtbhrobbX868zxr5XDBtSTaYr4ySBnTWeR3jaSKJxX7RbWCujDG295oSShUKGeCFEneCNOU71CnouIMiPKq4Y4hd8h0BMA6kA6ecdaw139q1gk5sJiRBIMGyRIMfb19KAs9reHXe8W47285YzcW6CCTmgMAypJJ1EbDyokLa8scFsJjHvrd7zS4RbliEe5LNka2f3TGbnU6zyoLj3a+2gt2rFkG04UBrii3ZXMCVVGcSHlNWPh56moeNZRhB9EvWltDxMEZirLlByKEO5MEyQTlMms9hOGqrTibTHPbTugGZbaAk5lCoTKkExsQdxJ1KURYzitxWR7gY3M6q90KhtgNbnJbWAM0G4ZnUrrOhq14gthksvbW4kzZBuo7LnUK3shmyKykmOus61R3sKC1t7dsqtu7bzKCiN7TFLkO3hMRofumKnu3VzJmfRvamXVgAQjSSRm9seCNiY5GVD2KWzbIHeoMhzoO6JEgMADJLrJh48WnXSy4pxK0vdZVGIR0DQcmZNBktSzEq8ZcxzchINZg30ZFN1RKSskkACMo7tpA9kiADumnOiuMLat2FsQ6FXC53HgKnUG4UI7wy4YaDKLhHKiEqOKhFlWslPa1RueZhqIJzBSVgnaDzmj+F32GRshysXIZWIEky0hSdQimFIgE9DVXxB7S2QbTuWz5WUhhAGfU5jHJQAu2u3O+w3GWtWxaFs+wFOYrkiFJIUTIJRpnXUzG1UEeExFsgo4JeCUOaFaXBMo4GpUgeYETFOODUAuVDBVbYZRmB8WcvtkBgrvptBEQWeJN4pUFgSUBNsBQbmZsgI0KkyAdNxryL4fxu0HAYZFlWZlVIJAbdMgEw8wOgg1NCsucLeX/dOckElFnYy5BA8IiCAdh5VIMEwWCpDEJCFQA6qdSFaQRrrpyB6xqcRfuWfGmYo6mJul7THIxOqgtMRAiPKgsBasi6Fvo6q5IRiiJlU20ZWJP11iDyIDEUbAb/R/Gf3Vn4Wv/srlb/6Hgv7lv5R+dKmWzMNiVuCVaQf1qPWsxxXBhL9y7kKhpGdii+ysnul3PTblznXuBxTAiT3awYIk6Kp9nMdSc2w5xvVFxfizXHyR4fEqEk5ypIIILbMAOW8mdau0tBsO+VpPs5jJAElZjwk7aDpzr0jshgwqd4CGzic0nNryZdgYjz1OteaW3KaLBEkyQs6gaeZEfOr3stxzuCZGbOV9PFDHTnlP3Cs5VvUQ1Kq3F8RS21sMQA+bUmNAsz565R61Fa47aa4iKwIdM/MQDMfI1WyXHdihsdYBQj8/kKC4jx6zZAJaZfJC6+ICSDyECszju2mbKFQ5SVmeYV/EJ81gaxzp7CS+jB1SSxWSsbsPrbHfT3Ggxhg+YAe1BEtEmNYzaHUHT0oLtPxR7dwACAG5qrAwdJJ3mT6GKJwfESX8arlcFQSFIBK+EZRyBSIERm90rYG2cK72yqg+Eg5DAggAggdNtpGh61YYy/PjJynJq+kgZQ55a6E/Ac4rHYDirTAJDAFSB7SgMGBSTGWVIgRBgbNq7FcWdjpqg8QAMShEsQJDQADpEDUDpRsLji1yILiUVbjs0kg5WcZ3A1CnQk8iDrWct4Cx9BuYvGKq3MQWuWrjTmUtPdBQvigAAxznnUXanjZGGFksWLHII27suz3hM6lmyax9obRWP4hj7l9+8uMSYhROiqNAqDZVAAEDpTgRY4OjZWGXmI2IOzKfrKeoqDvj51KLzRlzHLvlOq+cA6Co4HT4VtjySJsSYcEkZdGJEEaSeU1pcFxS5qzPcYAAl8pZ1KnMHk7Q+xBmG0I2qjwhIDFANRlJE5obfUzAorhmPa2GGbRlKspJEg6EqeXPT31ly5zK+IrGDbvH2XJdyLnZnbKHhgDCkXAFkZspI8W2sVaWO1tl7Hd3rNzMslMgQjPIIZmBzGfEDC7NuNZyvE8IAf3clcoOsSJ1KmOh2PQ0Alz9f0qsMMcoVtj0HCcVtYgFQFGjMwyqULkjQhyRmO0kbqIALaxYiwpT6OL0qxnxjMxNv2SpuC2bbnMFkjKw0JEVkLRDbzPJhow9eY8qveD4p7hFl5L5MqgD2l9pY0G86H8hU8nF0Eq4xPZwE2wtu5AdFuqgZ1IA9pQCSmbUlSYGUwdhQuPe5ccLF1WZmIQgv41yjMqsCxPijUjfbYEnDu1u0obKbJLCWysslSVBLL4SInwFTz5GpW4xaW0qqmU25IK/vBDZZIZlMq0sInQxM8szUDmVhASrGFYoM2bQwVBhTowBnYEiNRVpkvG011zauEjKyhUDgOCLRDoBLAsBoGgGDzg65i7Tqzyl17wVblrRCjoGKOQbepgkFlIaRE6zUNniIuW3RSBJ/wBoqm0mXLuJO5znQCCeYJpgHhsgZDlJ0sqQzKFI0LEqWBgahdR7XKjLPGwhK3FuJlYyS7EMQT4yjLKyOUmfPWpcJdCLkdEuCXeT3LWUSNDbMZ1Mk+FiAwgAVW442neUtpBTxMjFtiQWtszBnEAGDIb7qNAf/pdh/wC4P/UNKqDI36z0qfYLC7iQBDXEbSILLB5xrOmo5VUi+WkgZZ6MxnfXfY/DTyr3S9fw5Hiw10jztqw/7poC5a4exg4dA3+9hsMfkAarqW3mSnMAS0sdcusltp8tvWKTKQYC6eYMgz5UuzHGGu463YvWMPkZ2V1FhLZWA0SUGZcvrXpzdncKdUsWwTzS6+v/AHCp6U+zzx8W1wIGbRQQs7LrJEctI+FOa7l1nXLA1kEa6A9PEa2+I7L2GEG1cGkaXGOnLViwih37JYfLlz4pF/5bgeQ8KkUdKW4wnf6LzEz5gtoY16HeuC/lOQQN9diAdpM1sT2FskQmNjp3lh1+LBgKEu/s2xO9u9h7kmfaZfmp+dGjZnGsXIYkEnQaz7ICjXc6LvT8K5IKzCnkJIkuuog+1p67c6tW7EY+0dcO7CZm21t/fChp+4VV4nC30IW5ZuJB3KOk858QEwd9fhSAa65XVhDDdxrp4SpXTUGBsdiNYMVIykNBO8gb5g6iNOmqgGJ0E9DXXvsylihOUAE/VKuwGYDfRsskb5uXJuJdRaWTsGA1LTHjBBI0YZivmI6CgM5x3Ed5cG+VFyiTz3J9fzoECnPrvXWFMaDXGqOaJ7hjyNMe3FPY0I4Y0MAdjpvGsyPlR2FRLqMCYYHXqDtI9d6qRT7F8q+aTMifP31NVKtcCrArO8+FtiCNteXSrbGcJTEDvUyo8xcVhlTacwyjwkmPZ0M8qGwOHzqWQaxqNwZI5coJ+FX+BtG3qNQ6RvrrJ1PIgzt51jlnZ6bTDbN2MPbtXQTaJgkhSWykCYEbwSB7vOrXC3nOItXAoRhZdiV8IEXVC95l+qAqjSeVLilrwgaNl5yCQNPurnCMr3lBGY9wVK5c0nvpIEAkSAT7yK0nJcp5ZZY6TtcDXcrZQzTdlYTVgcwCtA0kGACYBjoI0uL3jJClybifuydWPhGS2ChUTBjUHpuKlxuFS5keVtOl0KFcFQwEEAFQw2XY6g5pkCu43Cq19CoVJxAV7aSFTL4n2HhHhHMyBptTiQ197YVGhwxhWBGgZYlWg6SMvuM6ipMLct2mLMCFmA+YMQIA1tQwbUkRpqRUxtCfFdtt5G4CygrqVYhTcQGByI9wqvxzsr3E11RGWEBLZ/rDWMuh8UHblVYzwX2n4hfBvM6sWnb94IjKs2+75AFToegECKFOAtkBkuJJLAqpzNlJJJCkbCYOszMaChEadW1zwdhO/KBI2iI2nSry1Yvuyt3Vu2AirMBVIykHNajcyZ0FGrRaA+mH7Q/6H9KVWf8AYrf333N+dKn0pdo9FsdsORlfSi04+Ln+29GS23zFYuAa4VHStesTutuuDwztny4fvCIziwgYg7gsDPKuXeCA6otk+Wa8nyZh91YpSRsxHrRFnH3V2uH1o669DbVLw68ui2jHRL6EfBlmnPZvWxKpdX3MX+OsVQWe0V9eYNH2O2Dj2lNGsi8JTxi4p8an/i8PyWupxW22uUq32kuKfkJqe320WPEG+E0j2uwx9rDlvelo/M0ef+R4/Utniv8A6kj+NCfv1oocUxGyXLFwHlME+gK1UXONYB98Mw/gCr/hYUNdxWBPs/SE9Lbj4MaOv9Df9rPHWUeTiOHWTIgtlgwYnxR5DnWF7d4HB28KO4t3LdzvBlXOWQhvanOMx8K6VpE4mE9hyw/5lto84OWqDt1jDes2lJfw3C0MQ31SN4B5mllhqb0eOXl5scNNWuDwShZI1rv0baN6OCQo91YWunDEM1sdBQWKwamjyahuEUttLIp7vDehodsE1XYonB2QW12o7aT8cqLgOIa3IIOogxrvufLzotLl1WLKGyEzMbGZ/P41peC4S2SDlB12I6RXp3DcFaa2s216DwjT9fjXNll5b3j64+XjNnCM7klPCRmJkDfkOoOvwNC8MwQW5cPdyMoTIToSD4Sw2YAwTtGpnSvUe1XBreGC4m2uzAMANAraaD3/ADrB9p7iq+e2mUXRKzJKkxMZdZGvwiq4st5aZcsnXcAdocSpW0rB7TMGcEoxmCxgk6oVJCkw252mgrufvFBCkZWZ1QZYEjWbYGoMHWQCTpQmJum45ZpZiSMwUg5pEnKFJ5c+m9WPBgS7Nm2VEBBIPhMmfhB9/vrqstcqZ8KxJ7q47WyQBqofKNA2pIJGUSA0Dlzq1XAKwOcSSIzA5TGfNHhA0nfzk7k0+wFUQIA6VL9IFazCIuVLB4FLYARQsACRvA5FtzRGlDHEHkKYSx/X41pEjMwpUH3Lfa++lQTOYXtHcU+MBh5eFvyNHp2mt81cegPyNZTvG+x99JL+b6oPrXNLl+uizG/Ta2eOWW+vH8QK/eRFEXOJW1IUuoJ21HPbWsE0nSPnXVEUfJkXTF6KtwH1p2asBZxVxNFdgBynT4bUYnaC8BBynzgj5ECqnL+xN4/ytka5lFZ/Ddo0K+MFWHIAsD/CR8j8a7c7TJ9VWOnkNZ2P6NX8k/S+Or7LSAis/b7UL9a0w9xB+cUQO0VjmXH/AAk/4Zqpyz9TeO/i/v8AHBZssTbSYgNlkg9YO5iazd/GXLiAE5kLB4YAOpAI0KwIM8weW1RcUxtu+gW04JzCRqCASBJBG1QnGKrDcxCj5Ga5+XL/AC8O3h48fj8zyLwqiuYwdKfZHiY8pqLFhzotZ7OTQPLTbluorneryny/KuWsfyZSKZuBKmtNrT4kSKSpS2qRseyiBmG46bj+lenYCQAJkV5P2WxmRonb8Nq3vDuPAuq/a31299cuXiuizeK840oay4YAgjY7V43+0RIa2ANSshYExmE8ugPwr2biCZkjzHzFeZ8c4HcxfEiquipZW2qz7RKjM0Ropl23PKCKvius91zZY3LDUjCrglDOrNEwEymIkk6mJMKvqelEcPvKnegyWzhUYDcKNc3XnrJOg9L7tVgcNZvG4jswt2xmBOpuhrhOYHWRKrGm1UnDoW1bd73dwS2mjSWJkNuJ02rs25NeElnjCSVueEg9CQemopPx+0DAV28xEfeareIBbxzKMo2EgCYIGi78xuKq7uEYfX+6Pxqu2RTHFp37SoBojesD8aGHa0Exk36EHX7vnWabCHm0/GiuG8BuX2KoRoJJIMASAJgaSSB7zS75Drivv9Im/uj/ADD8qVZn+z7nS5/Lc/KlR3o6wSMO/X51xMMw5D4H86Vy+QzAMGAJGYDQwYBHkaZ378m+VI0/dP5D0/rTclwc/umo/pL/AGvlTTec8zQBFuy7HVoEcgKgFtzpm202FOtYhgZnyg7a1H3h1jSeQpaG3Taf7X3D8q6ykDzqLMeprmY9T8aLjBMqeb4G9C3sadl+P5U3G35MDbnQgoxwh3KrTs/ey3gT9YH1Ihh/h++r7DYaLqk6ox8J8+U+ulZJGIIIMEGQehGoNa/AYsOiuoE/WG8NMnT7xS5J9tuDLxpZ2T7X8RobFXG5GJ5wJp+CuSX9/wA5rmJtzWbRW4vBOdVut6kj5GgjcddD4vfr8KNe2w2JofuSTrVFYNwl6REQRUeIxYUDlP4U+xagGtfc7JfS+GW71hB39tmBAgd6swQZ0zDQg+RFRldNJvW2F/tBZnOR7gT8jV9wDGqzgd4pnrnU6cxM/KqpOFXEOW5YYHoyx8623Zi1byGxcwSsG+tlXQ7+0uoPnIqOSzSuPHLe3oD8RNrDNcu/UAJI1J6R1kkbivJeI4ppBBILONidSZ9o/WJP6Feq8fwoOAuWwG/1egMsxKgFV55iSoHnNeY2LcWu9dfZOdUOmbLIAPkXKD+bpWMm7p1fxsscZlnfpne2+InG3obRiobXmujTr9qajt4dcrkLmIyEkzIBgaTGQTAEaQQKr+LYW6l398PGw7wiVOfM7BmlTpJVvhWoweGuZi6WrSEyCM9xoBXMyldoIER89q9DDG608bPPd3+qvG3G0u8yZzHUj2Ygn63mKExLkRIkZRJ11O8Btpg7f7vxvLqOFLN3SgGM03BAIAgZSPDrEH41VpiE7zIFzIGkZHEqcssQYIJM66fVossTLKaOHM3siefmRpqsbjUbUfbL4UErIYKWzrlKkFdVP2lPhM8t9aI7wgzbBYiCwJzQ0eIhk5BpI0BiNJFUOI4kWQIQQNfdJiTEdR+tKNWmb/bF37OH/wCilKq7u2+2PgPypUtDZzDzpopxXauBRVJcA13pKTO9Oyc6WTnQZmbzpAnXWnZBTramdJoJErHqaa7kCdddjyPuPOizh1GrfAUHj8WzwpY5V9lZMCQASBtMKNfIUGCNPApKK7VROyppJGxI9xIp1NIopxruFX/H5EfIA1cuorMo5BBG8Kw9VH41e2cWGt5uesj3f+K5q7MKZeCjehjJ2oFbzu0zqZIXy8hzpy4l1O3x2NC9iA59a9g/Z0+bAAdGYH11rySxeW4NVyn7q3PYrtAMJZdHBYFpVVALbR1A6b1nyXw0xm5dKril97GIuWL0MFOn8LCVZemhHwrV9ijbmZ9xnn5ivNe0nH2xGKe+yZCSAE5hVECep0n1rS9g8ZmugA6MJHpUZY/4rxy7eK9C7S48WxaBAbPcURqNtZEcwYrzTtLxCz9LuYcXfBmuPduFgoNxSMtqZjKgYiNiSd4rSftBvE90iuUch8jD6rwCDPL2Y9Z5V5LgsLZW73OMzLnAKXfEYzbFwDqDqM2sEbEbX/Hx/wBq5+fOyfHPv2Z2iuL35KMrKqIAQQwMSdxvV/w7jdq64AbITMoRAMqy7zDRIPXShuJ9iSmULdClvY7wg2rk6jur6CCY5MoPzrN4/h13Dtlu22Q8idj/AAsND6V2Y8kvpxXCz29CxXF7VoFXYZhMZRJgxAbWDoZ6686zOK7tr0BiLbQ5gW4HNQIIURqup59aAwfE2y5SxIkEqSYJEwQJ31OvnR2GxSPdGbwlciqZ8EZpJadZ8R3PSelGWVs0UmmuwyqQZyKcqkHPb8SH2Qcpg84YbxB5VlOMcNtq4KE5WGYAE6eWuu81syVjREHmBHIa7xyB0qi4rhRcuKGJnI5OWASVKmTPIhp9a2ywsxZzLyzf0L3/AH0qi7tuv3r+VcrLqvscLGn9akGHH6Jp1vht07W39VYfOKmHB7/92f5k/wA1PrR2iBsNpodeUzFcTDaCTrziaJPBb/8Adn+Zf81Mfg94CTbYAbmREfGjrRufqL6MKcwCKWjT7zU1uzHhGw3JobiGNSDbGpOkjYevOs/a9eAVy6W1qvuHWixQJOtUlIKRri0qNjRwrjUq6RQF+v8Aq7bf7oB93L9edE4RoGUxG9RcMAa0B5RUZOXRjqNvMdawrqxT/QxcWD1ke+psNikChL0ggkZoJBAXQnkDNOwLyKIxNlWGvLnUtdHDhYOUoynMJ0Og0nlNFYxDhAe8Cg5ZjNqQApkCJ1zr8aokwQUyhHyr0HsLZUeNlUsTBYwSeXr61nyak8teLG31WHx3FDiMrGyltVB2JZm3Mlj8o9atOyuLGHYOZnUgDqdhWi7a8GtuxuJCn64G0bTHLashjcYMKhJH7w+wOe256cqmZTKdcRcel7U7ttxxvpKKrE92JbU6u8Md+YGWD86qO1xtOLFy2ZLq4nkFDyFI+qVZmHpVI9wsSzGSTJPU0ZYti4hWRIk6zI/MHY/Hlr14YdcZHByZ98rWk7J9oTbVrF8Z7O160wnKCQBdtg+ZGYDyYama0vEsMLPheL2EeMjMc+XMNASfaEaq2/LcCcVwy1bxBNtwVe2ghjow1IaftICRoeVaXsRxDvEfh+I3ghATrpq9sHfoy8wduRrPOfcaceX1Wf492ZW2Dds5mtAS6btbH21P10HOdRz01FKMKQQwboysBI3/AAMVubTPYuG0zaqQVaNwfZb3EaEciG5EVX8T4WqqWtqAjEnIJhHglkHRCJK+WYfVp45/VLPD7gbhvGbiJlyrcUA3AA0OFdoYI0eIK4fwnUA1YWscHuAqQPCAZAzLnAZYnkZieoisztbDjTu21/guQDpG2bIY8zSv3SFt3oMKTZcb+BpMTziWg9MnOujHksmnPcJtof7AtfZP8x/KlVL3eI//ACB/OaVP5J+F0v63kDpSNvyqPOa6b8DaK3ZOlKz/AGn4miDuxq25A5dA3TrFD8d7TfUsn33PwT/N8OtZJ2k/r4ms88/qLxx+0t7FM2503jl/WhZ586c5pgrFYzFDmNiJHrrVcankwDy2qNxQZDaugVxBTqZEaVKnAUBfcCfwxR2NwuYSNCNj+flVXwhoNX9s6Vhk6cPMVOGukGDodoox7um9PxODD67MNj+dV14Mu4ipaSiMKkuJMCelbzg4CKPHqdh5e70rzzDYghutbjs5hXuqzAlV3NxtFCBTJk6GsOaujhsd4xxc2rdxmHPX/wCKzzMg7edeX8SxDXHLsZJ9Y8hWp7YcTS64tWQRZtyVJ9q4x3d/fGg5ADrWVxa6Ct+Dj6zd91yfyebvdT0HFS4e9kM+nxqIV2uhzNDw1Ud1aSrzCOpg7eyQZHu0206U7tLeexesXEYggZpAAhlYDT3QD6+lUVi/l91WmIvfSEVnmbYuM5ETBVPEBzMrJ/qKmxW2545dXFYe3i03CEuo6f7RPeCMw8wDQnD74Mo5GV4RjyEwUuAdASre6RVX+z3iGlzDMdD40nqIzCPNf8NShcjG30JT3gy9o++M49yiufWrY6Jdzan4nhzYusHHgBa3eUcg0qdegJMeYFU2V7bXbDfZbMNxNtTcVh/KIPQ1qe1o8K39f3tru35gun7sz0MG23qaz/EdLmf/ANOvWQWTudfTUVthdxhnNVV5z1NKnd3+v0KVaM9PfrvYq5Bdb1vuwJLPmQgRJLCCBA8+VeU9qOLhma1acNbBjOsgXI5idck7dd62f7WO2wuZsDhzKgxfuA6MVOtpeoB9o9RHWvLL3LzpzPKzyOs2jY0ynGm0Ga1cpxptGiTYcnUCI3imXV8opWG8XvEV12k0jMFcNOilFANFPXcU01JhxLCmB1liuo9R1q8wWLVhoaqrSU27hGHit781/Koyx2vHLTRzTWNZ9OLumjD4ginNx4dKz6Vr3jU8At2e+BuwFGpmIMdfKpu2Hao3/wB1a8Nkeyu2cj6zgbKOQ/GAMiuLu3NlCD7R1PoOtSW7ccyTzY7micXndK8vjUMZPP3+dC4y3p51ZZBQl4Sa1YqcUqRrk0ydo7h+Jgx7/XQgg+UEj1NAUqAtcKxwuIt3VnKCCPxU+nz99bLtCirdS4ICOg15SkXFn0zj1rAfSid4OgWDtC7abdfjWk4JaOJuFyykpZItC6ZRXGgBEHYajTfz1rLPH7a8eXjQ7i+MtNhSFIYJdDDQ7FCxIn2h+6AkaVlMGgullIPiy5IBOQKSAD1Eaek1ZcYzW8OisZZnYHWTopn/ABGgOEKzPA259P60Yf8AkcnnJef2NZ6n7qVTZPd8KVG0stcNQ3TtUrVFcGlaocppFdFI0EYa4a7FcoDqjnXYpwFEnC+BmJ2OXTmaADmuzRaWisNAOxg9PxorjOEGl5AAjxIAjK0dByO/xo2avbDsFDFTlOgNPsJDUaTOGYGPCy5T7zBHwJoLD+1RPIW9kaVMikfkfwNRWSdqJWqJz3g/OuBANh/2x+FS701qWgjZfSmqtdy05RSM0ihrgom5UNzagKKJk+dNqbDc6jvATIoBlKlSoBAVY8GxRRyobLmET0PInrrVdTqL5Euk2OxJciWLHUn1/wDFXfCmC29oqiwyhm129PlVvfbZZMDU9T0FRfWlT9EfTvMffSqu7pqVTpQVqYwpxrlas0K041xq6aCNIrhFdU12KAZRIvnKF5Bsx8zEfn8agyVLbsPEgbb7fKkazwkFRHtOyrB2ifq+6rRMOpVlg92WIgbrlPtD1qm4a0sse0pMJ9xyfOP61d4F4VIPizEHlMklgRyIC6zzqapUcZs93CAyure87VX4QS49avu0NhSquDGmx+sCTt5wpqiwPten5VeKb7W9o0StCpRaDnVEkrjUqRNADhtYp8UoHSmsaNA1jUV07+6pTUDmkajttpXCZp15MrEevpTKQKlXabmoJ2uE1xjSUUBobnZq/YFq7cQ9zdRLiXR4rbK6hgJjwsJgqYNLEKZmP0BXr37Ksf8ASOE9wYLWWa1BiMreNNDpADR/wmvPe1OGVLjoukMenrHpWdvlpIz2cdaVM+jjofupUACa5Sps1qgiKYKfTTSJwb040zNNPNAK1uPeKtMLbMBwYLEt5Ryn0qrtIWIUbkxWltsFUoLamYhyzhkAjRVHhOx1PWoyul4xV4rCZxmUQ4OoHxBHOicPxhmhboAuAEd5oC4OgzjYuJHj5gCepr8XiD3pKnaB+MVLiLXfAPbAmPEJEgz+jT9+yScfuTcEHwhVge4QdORmR8ar8M0OPhUbXCYB5aT5cppswZ/WlVPBVfpRaTQlnzopasj2pmau02kHCKYTXSajY0AmNQM1PZqhc0BXY3cUMponHUNUmTVHThXDQRCng1HT1oDVdhuN3MLeDI2jeFwZIdDOhUbxuOnxoziDgsWPMk6jUz5fhVNwBBM1bYtZgD1NZ5e1wF9J/wB1vgtKndwvn+vSlU6Uz6Vw1ylWzIhSpUqAY1PG1KlQEuC/1g9f8Jq+G1KlUZe14+meu+2/8bfOi+D/AOtHuNKlVJAv+J+dcfalSpkv8NsKKWlSqwVNFKlSBj1C9dpUBEajelSoCvxvL30K9KlUghXDSpUBw05a5SoDRcB/Cra5zpUqzvtcC0qVKg3/2Q=="
            />
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </div>
        <div className="col-sm-3">
          <Card>
            <CardImg
              top
              height="300"
              src="https://images.pexels.com/photos/307008/pexels-photo-307008.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            />
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </div>
        <div className="col-sm-3">
          <Card>
            <CardImg
              top
              height="300"
              src="https://images.pexels.com/photos/247903/pexels-photo-247903.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </div>
        <div className="col-sm-3">
          <Card>
            <CardImg
              top
              height="300"
              src="https://images.pexels.com/photos/1427741/pexels-photo-1427741.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </div>
        <div className="col-sm-3">
          <Card>
            <CardImg
              top
              height="300"
              src="https://images.pexels.com/photos/941710/pexels-photo-941710.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </div>
        <div className="col-sm-3">
          <Card>
            <CardImg
              top
              height="300"
              src="https://images.pexels.com/photos/1816593/pexels-photo-1816593.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </div>
        <div className="col-sm-3">
          <Card>
            <CardImg
              top
              height="300"
              src="https://images.pexels.com/photos/1498925/pexels-photo-1498925.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </div>
        <div className="col-sm-3">
          <Card>
            <CardImg
              top
              height="300"
              src="https://images.pexels.com/photos/1456951/pexels-photo-1456951.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </div>
      </div>
    </React.Fragment>
  );
};
export default PotentialDateTemplate;
