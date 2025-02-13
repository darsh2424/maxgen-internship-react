const postData=[
    {
        imgUrl:'https://scontent.cdninstagram.com/v/t51.75761-15/476675170_18311717893203096_1979694185090536283_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=104&ccb=1-7&_nc_sid=18de74&_nc_ohc=m1qkoCikXE4Q7kNvgF6Bumg&_nc_oc=Adj7CQyCjSiREuAXFZCqXJ1fjqUlZEiF6sJVY5CWHphF0qALXhV-GxpsqYgwqXkNggA&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=AE4YUL_EHcq-CZCOBmYzOZC&oh=00_AYAAmfeudQML-rfXYr5QdYUchYq2M47eyiOllpVmD7sHcg&oe=67B38E47'
    },
    {
        imgUrl:'https://scontent.cdninstagram.com/v/t51.75761-15/476675170_18311717893203096_1979694185090536283_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=104&ccb=1-7&_nc_sid=18de74&_nc_ohc=m1qkoCikXE4Q7kNvgF6Bumg&_nc_oc=Adj7CQyCjSiREuAXFZCqXJ1fjqUlZEiF6sJVY5CWHphF0qALXhV-GxpsqYgwqXkNggA&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=AE4YUL_EHcq-CZCOBmYzOZC&oh=00_AYAAmfeudQML-rfXYr5QdYUchYq2M47eyiOllpVmD7sHcg&oe=67B38E47'
    },
    {
        imgUrl:'https://scontent.cdninstagram.com/v/t51.75761-15/476426057_18311473339203096_8248196822476122911_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=100&ccb=1-7&_nc_sid=18de74&_nc_ohc=V3PitqnLiAIQ7kNvgE0Hn3j&_nc_oc=AdjClA7k46C90oZonPwyzeUHiTm_btgWZHcft8YhrPRT4lwjl3a7iWEx3hFHPCM06ow&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=AE4YUL_EHcq-CZCOBmYzOZC&oh=00_AYCT-aW2YtP-WoWtwjfc0-XjJ9viIvcdirBibCESueV59w&oe=67B38DE9'
    },
    {
        imgUrl:'https://scontent.cdninstagram.com/v/t51.29350-15/476558262_1204658714349579_4346602237362861016_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=104&ccb=1-7&_nc_sid=18de74&_nc_ohc=JhZGKc4Ul74Q7kNvgEIqtGW&_nc_oc=AdjNR0gQ4Tfj4zGnU6KHCHepzdqUEiybeOoHQ2PgqtIBp0T5YL7mwaEQhzcaCICJniU&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=AE4YUL_EHcq-CZCOBmYzOZC&oh=00_AYAx1I_cQ1tSCHxFtIGTWkDEH1k4XYQ6gkAzBLrOvhLIJA&oe=67B39B56'
    },
    {
        imgUrl:'https://scontent.cdninstagram.com/v/t51.75761-15/475694555_18310546015203096_6831789972321677774_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=108&ccb=1-7&_nc_sid=18de74&_nc_ohc=IRcrjIaArNsQ7kNvgHXTcFC&_nc_oc=AdjFuas4d3mMSFJzGsdIRfZRJpfaHB9bJTZKGCLKt-2UKZJX7oz4tpZ45m9fVUg0Nlk&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=AE4YUL_EHcq-CZCOBmYzOZC&oh=00_AYBrCyzV6nG02MDp2PG10Re0h2KmVNS1QUkyWHOatIrgFg&oe=67B3A335'
    },
    {
        imgUrl:'https://scontent.cdninstagram.com/v/t51.29350-15/475516891_603549985615064_1036780358775002145_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=111&ccb=1-7&_nc_sid=18de74&_nc_ohc=fmEUhOyNvZUQ7kNvgEaVM8i&_nc_oc=AdhauouFUzg9zUUyjVjr9b8Js2wy5xU4whZkZjYrUuOjoihKmtlUPTHQU2tnQ_l-a1U&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=AE4YUL_EHcq-CZCOBmYzOZC&oh=00_AYD4ZlKxiekCGXEw6RI3qyWdEdL8mY7XfO1WMSi1uuCV_w&oe=67B381EB'
    },
    {
        imgUrl:'https://scontent.cdninstagram.com/v/t51.75761-15/474037299_18309433021203096_4350824215139629228_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=105&ccb=1-7&_nc_sid=18de74&_nc_ohc=av8vsFq72r4Q7kNvgHb3Dpm&_nc_oc=AdjuV11EN5eip0_bXlW4g4bT_8zJod8J_LXlYxrWSEu0p5gnfKpL_FC8LkOr2oSGwg0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=AE4YUL_EHcq-CZCOBmYzOZC&oh=00_AYDGf-DHqrbL2Q1icGx6PX6hbucwOqP4lX79ztVG_WH2Nw&oe=67B3B403'
    },
    {
        imgUrl:'https://scontent.cdninstagram.com/v/t51.75761-15/474036544_18308980276203096_8345420290403963847_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=106&ccb=1-7&_nc_sid=18de74&_nc_ohc=NUQWJDsdDbAQ7kNvgFsPTAP&_nc_oc=AdjZN1HkIxRKCBUIcwstUnA_9nSQHNhNqcyd5RPUziSFAzEzjyyRsOtbi1Et52u86Ds&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=AE4YUL_EHcq-CZCOBmYzOZC&oh=00_AYC3-F9_sBr_x1sdlRDbpHKvwkUI8b92yqiWXNtJMIuVrA&oe=67B3AFAC'
    },
    {
        imgUrl:'https://scontent.cdninstagram.com/v/t51.75761-15/473175392_18308736061203096_8005605125945081675_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=111&ccb=1-7&_nc_sid=18de74&_nc_ohc=uYWA2s4rICkQ7kNvgF_XYut&_nc_oc=AdiKqqktrNP23CskkHJuWmiQqK3KtwHutrn6NOxpmDoCSoZ_Qo89cNseyKGxhspAQc8&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=AE4YUL_EHcq-CZCOBmYzOZC&oh=00_AYAPcj1Ss8TYXF-UVBxxoB5Ji7oczrcXyllASH-mkT1F_g&oe=67B3B3D9'
    },
    {
        imgUrl:'https://scontent.cdninstagram.com/v/t51.75761-15/473607180_18308490784203096_449456473536683657_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=109&ccb=1-7&_nc_sid=18de74&_nc_ohc=PXwTdouQ1KMQ7kNvgHEAN6B&_nc_oc=Adjs-29ZWap2bzgJ9c1O3WOOOvLaUbINSrY3DXaHB0AnteS9LMTqmem8E-ubC_R4g9Y&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=AE4YUL_EHcq-CZCOBmYzOZC&oh=00_AYAvKdoc8gEhj2NpngcpodptXiCqgR762t1d3rXysKh-kA&oe=67B3A773'
    },
]

export default postData