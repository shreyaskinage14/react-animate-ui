import React, { useEffect, useState } from 'react'
import BannerContainer from '../components/BannerContainer'
import Header from './Header'
import { roundedCollection, tiledCollection, cardCollection, cardCollectionPack, tCardCollection } from '../utils/imagePath';
import ImageContainer from '../components/ImageContainer';
import TiledContainer from '../components/TiledContainer';
import TitleComponent from '../components/TitleComponent';
import CardContainer from '../components/CardContainer';
import Button from '../components/Button';
import TransparentCardContainer from '../components/TransparentTIleContainer';
import SaleContainer from '../components/SaleContainer';
import ServicesComponent from '../components/ServicesComponent';
import Footer from './Footer';
import SubscribeComponent from '../components/SubscribeComponent';

const HomeComponent = () => {
    const [rerender, setRerender] = useState(new Date().getTime());

    useEffect(() => {
        reveal();
    })

    function reveal() {
        var reveals = document.querySelectorAll(".reveal");
        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 150;
            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
            } else {
                reveals[i].classList.remove("active");
            }
        }

        setRerender(new Date().getTime() + "");
    }

    return (
        <>
            <Header />
            <BannerContainer name="homeBanner" />
            <div className='reveal d-flex flex-wrap gap-4 w-100 p-5 align-items-center justify-content-center'>
                {roundedCollection.length > 0 ? roundedCollection.map((image) => (
                    <>
                        <ImageContainer image={image.path} title={image.title} bg={image.bgColor} />
                    </>
                )) : ""}
            </div>
            <div className='reveal d-flex flex-wrap gap-3 p-5 align-items-center justify-content-center'>
                {tiledCollection.length > 0 ? tiledCollection.map((image, index) => (
                    <>
                        <TiledContainer image={image.path} index={index} />
                    </>
                )) : ""}
            </div>
            <div className='reveal'>
                <TitleComponent title="Trending T-Shirts" />
                <CardContainer cardList={cardCollectionPack} />
                <Button className="reveal">View All</Button>
            </div>
            <div className='py-5 reveal'>
                <TitleComponent title="Featured Products" />
                <CardContainer cardList={cardCollection} />
                <Button className="reveal">View All</Button>
            </div>
            <BannerContainer name="middleBanner" />
            <div className='py-5 mt-3 reveal'>
                <TitleComponent title="New Products" />
                <CardContainer cardList={cardCollection} />
                <Button className="reveal">View All</Button>
            </div>
            <div className='my-4 reveal'>
                <TitleComponent title="Best Selling Products" />
                <CardContainer cardList={cardCollection} />
                <Button className="">View All</Button>
            </div>
            <div className='my-3 reveal'>
                <TransparentCardContainer tcardList={tCardCollection} />
            </div>
            <BannerContainer name="endBanner" />
            <SaleContainer />
            <ServicesComponent />
            <SubscribeComponent />
            <Footer />
        </>
    )
}

export default HomeComponent