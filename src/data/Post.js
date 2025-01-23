const postData=[
    {
        imgUrl:'https://scontent.cdninstagram.com/v/t51.75761-15/474157694_18309213436203096_3809812144524247948_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=100&ccb=1-7&_nc_sid=18de74&_nc_ohc=xLhI5jcy65UQ7kNvgFL5hEN&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=AovgjQ791ZCXomJRqs3oXpf&oh=00_AYDNFWt4QwSyzwfigxHrwwSSDNDSZ8w_L3r-KkrKYpn-Sw&oe=6794008C'
    },
    {
        imgUrl:'https://scontent.cdninstagram.com/v/t51.75761-15/472455053_18307872169203096_4526473811137969239_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=103&ccb=1-7&_nc_sid=18de74&_nc_ohc=40XVOwYSOiAQ7kNvgFYQGor&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=AovgjQ791ZCXomJRqs3oXpf&oh=00_AYD3gwrQ704ffcYAUpeJdd28dIQzNFzn-KGkoF5CsfQ06A&oe=6793E31C'
    },
    {
        imgUrl:'https://scontent.cdninstagram.com/v/t51.75761-15/473175392_18308736061203096_8005605125945081675_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=111&ccb=1-7&_nc_sid=18de74&_nc_ohc=DuIJxD3pHsUQ7kNvgHL78Q2&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=AYVb24Iqhqzkc7o0rkS3gRY&oh=00_AYDX8cbmLTh_eGMkU8cVhMxaOwiuQqGzc-v5EIlpQikO4w&oe=67940FD9'
    },
    {
        imgUrl:'https://scontent.cdninstagram.com/v/t51.75761-15/473607180_18308490784203096_449456473536683657_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=109&ccb=1-7&_nc_sid=18de74&_nc_ohc=xeM73bjC7ToQ7kNvgF81nBX&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=AYVb24Iqhqzkc7o0rkS3gRY&oh=00_AYA8SleEULAJpwb7XrE6W3e5iI5gvYSGBj9sCDEqcU1eDA&oe=67940373'
    },
    {
        imgUrl:'https://scontent.cdninstagram.com/v/t51.71878-15/473582748_566402476159358_7568976382227843761_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=109&ccb=1-7&_nc_sid=18de74&_nc_ohc=Mb13NTtE6ugQ7kNvgGUPWE2&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=AYVb24Iqhqzkc7o0rkS3gRY&oh=00_AYCsTBAWLza_z24Og6R2EBEe9iXt4E72W7oi5vYAXhEqbA&oe=6793E6A0'
    },
    {
        imgUrl:'https://scontent.cdninstagram.com/v/t51.71878-15/472977348_1007395557893012_6011559971448392378_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=100&ccb=1-7&_nc_sid=18de74&_nc_ohc=Fmh7q_Qp5IEQ7kNvgE3RtNz&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=AYVb24Iqhqzkc7o0rkS3gRY&oh=00_AYDvAMOSRbiLb3SSvVglKYLw_MvKQ7CGt1DmHuaJWiHV6g&oe=6793FE04'
    },
    {
        imgUrl:'https://scontent.cdninstagram.com/v/t51.75761-15/472455053_18307872169203096_4526473811137969239_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=103&ccb=1-7&_nc_sid=18de74&_nc_ohc=40XVOwYSOiAQ7kNvgFYQGor&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=AYVb24Iqhqzkc7o0rkS3gRY&oh=00_AYCSoPhD1X5sM8nlj-7ihJbChZI3FvNYXeWcBejO08hkFg&oe=6793E31C'
    },
    {
        imgUrl:'https://scontent.cdninstagram.com/v/t51.71878-15/472728184_518641713859563_6842962942132388707_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=104&ccb=1-7&_nc_sid=18de74&_nc_ohc=l5NredHZe_QQ7kNvgFUI3aF&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=AYVb24Iqhqzkc7o0rkS3gRY&oh=00_AYDReP1An1-AO-L4R8tkKJYNmbZv-Qx5JW6Dx3d9dh71oA&oe=6793F8DE'
    },
    {
        imgUrl:'https://scontent.cdninstagram.com/v/t51.75761-15/472236235_18307250200203096_2078268680955765998_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=109&ccb=1-7&_nc_sid=18de74&_nc_ohc=S4C5kOL6VxEQ7kNvgFVp8Uf&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=AYVb24Iqhqzkc7o0rkS3gRY&oh=00_AYB_RcTVqyOmCskC0mk-S9Zewopn9umoCAoAUFjOZYmXxQ&oe=6793E384'
    },
    {
        imgUrl:'https://scontent.cdninstagram.com/v/t51.75761-15/472008274_18306915166203096_2660321142873765666_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=102&ccb=1-7&_nc_sid=18de74&_nc_ohc=HGWDHDOqmrYQ7kNvgGyDR4w&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=AYVb24Iqhqzkc7o0rkS3gRY&oh=00_AYCEajPXXIAYBAfwCX92NHgPqOBwbpcEnI7iVUbDP7PzGA&oe=6793E3EF'
    },
]

export default postData