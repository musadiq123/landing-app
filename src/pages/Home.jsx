import React from 'react'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import useResponsive from '../hooks/useResponsive';
// /Users/musadiqjinabade/Desktop/Musadiq/Pratice Project/landing-app/src/assets/Path.png
import Background1 from '../assets/Path.png'
import BannerImage from '../assets/Group.png'
import BannerImage2 from '../assets/banner2.png'
import BannerImage3 from '../assets/banner3.png'
import BannerImage4 from '../assets/banner4.png'
import BannerImage5 from '../assets/banner5.png'
//Rectangle
import BannerImage6 from '../assets/Rectangle.png'


import Navbar from '../components/Navbar';
import Customcards from '../components/Customcards';




// function Header(props) {
//     const isDesktop = useResponsive("up", "md")
//     return (<Grid container spacing={2}>
//         <Grid item md={4} xs={6}>
//             <Stack direction="row" alignItems={"center"} spacing={2}>
//                 {!isDesktop && (
//                     <IconButton>
//                         <List />
//                     </IconButton>)}
//                 <Typography variant='h7' style={{ fontWeight: "400", fontSize: '14px', marginRight: "30px", color: "#111B47" }}>Home</Typography>
//                 <Typography variant='h7' style={{ fontWeight: "400", fontSize: '14px', marginRight: "30px", color: "#111B47" }}>About</Typography>
//                 <Typography variant='h7' style={{ fontWeight: "400", fontSize: '14px', marginRight: "30px", color: "#111B47" }}>Contact</Typography>


//             </Stack>
//         </Grid>
//         <Grid item md={4} xs={6} container justifyContent={"center"}>
//             <Stack direction="row" alignItems="center" spacing={2} container>
//                 <Typography variant='h4' fontWeight={"900"} fontFamily="roboto">Landing</Typography>

//             </Stack>
//         </Grid>
//         <Grid item md={4} xs={6} container justifyContent={"flex-end"}>
//             <Stack direction="row" alignItems="center" spacing={2} container >
//                 <Button variant='contained' style={{ borderRadius: 0, width: "160px", height: '26px', backgroundColor: "#111B47" }}>Buy Now</Button>
//             </Stack>
//         </Grid>
//     </Grid>)
// }

const Header_typo = "Light, Fast & Powerful"
const Text_typo = `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.`




const Home = () => {
    return (
        <div className="home-container" style={{gridTemplateColumns:'1fr'}}>
            <div style={{ marginLeft: 100, justifyContent: 'center', alignContent: 'center', flex: 1 }}>
            {/* <Header /> */}
            <Navbar />
            {/* home container */}
            <div className="home-banner-container">
                <div className="home-bannerImage-container">
                    <img src={Background1} alt="" />
                </div>
                <div className="home-text-section" >
                    <h1 className="primary-heading">
                        Introduce Your Product Quickly & Effectively
                    </h1>
                    <p className="primary-text">
                        {Text_typo}
                    </p>
                    <div style={{ flexDirection: 'row' }}>
                        <button className="secondary-button" style={{ marginRight: 10 }}>
                            Purchase UI Kit
                        </button>
                        <button className="primary-button">
                            Learn More
                        </button>
                    </div>
                </div>
                <div className="home-image-section">
                    <img src={BannerImage} alt="" />
                </div>
            </div>
            <Customcards header={Header_typo} text={Text_typo} bannerImage={BannerImage5} pattern={2} />
            <Customcards header={Header_typo} text={Text_typo} bannerImage={BannerImage2} pattern={1} />
            <Customcards header={Header_typo} text={Text_typo} bannerImage={BannerImage3} pattern={1} />
            <Customcards header={Header_typo} text={Text_typo} bannerImage={BannerImage4} pattern={1} />
            </div>

            {/* A price to suit everyone */}
            <div className="home-banner-container-custom-card" style={{backgroundImage:`url(${BannerImage6})`, alignContent:'center', alignSelf:'center', textAlign:'center', height: 800}}>
                <div className="home-text-section-custom-card" >
                    <h1 className="primary-heading" style={{fontSize:'36px', textAlign:'center', alignSelf:'center'}}>
                        A Price To Suit Everyone
                    </h1>
                    <p className="primary-text" style={{fontSize:'16px'}}>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                    </p>
                    <div style={{justifyContent:'center', alignItems:'center', alignSelf:'center'}}>
                <h1 className="primary-heading" style={{fontSize:'50px', textAlign:'center', alignSelf:'center', color:'#222F65'}}>
                        $ 40
                    </h1>
                    <p style={{ fontSize:16, fontWeight:'400'}}>UI Design Kit</p>
                    <p style={{marginTop:50, fontSize:14,  fontWeight:'400'}}>See, One price. Simple.</p>
                    <div style={{marginTop:10, flexDirection: 'row' }}>
                        <button className="secondary-button" style={{ marginRight: 10 }}>
                            Purchase Now
                        </button>
                    </div>
                </div>
                </div>
               
            </div>
            {/* <div className="home-banner-container1"></div> */}
        </div>
    )
}

export default Home