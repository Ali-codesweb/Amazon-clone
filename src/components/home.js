import React from 'react'
import './home.css'
import Product from './product'

function home() {
    return (
        <div className="home">
            <img className="home_image"

            src="https://i.pinimg.com/originals/0b/a3/d6/0ba3d60362c7e6d256cfc1f37156bad9.jpg" />
            {/* product,id,price,rating,image */}
            <div className="home_row">
            <Product
                id="1"
                title="The book book  book bookvb ookbookv"
                price={11.56}
                rating={5}
                image="https://sslimages.shoppersstop.com/B8AC9759D45547D9AEF177F0DE13B7C8/img/F4F035913D33476E89CFD5EB2C4BFAE7/204630449_9999_F4F035913D33476E89CFD5EB2C4BFAE7.jpg"
            />
            <Product
                id="2"
                title="The book book book book book book book bookbookbookbookbookbookbookbookbookbookbook book bookvbookbookv"
                price={11.56}
                rating={5}
                image="https://sslimages.shoppersstop.com/B8AC9759D45547D9AEF177F0DE13B7C8/img/F4F035913D33476E89CFD5EB2C4BFAE7/204630449_9999_F4F035913D33476E89CFD5EB2C4BFAE7.jpg"
            />
            <Product
                id="3"
                title="The book book book book book book book bookbookbookbookbookbookbookbookbookbookbook book bookvbookbookv"
                price={11.56}
                rating={5}
                image="https://sslimages.shoppersstop.com/B8AC9759D45547D9AEF177F0DE13B7C8/img/F4F035913D33476E89CFD5EB2C4BFAE7/204630449_9999_F4F035913D33476E89CFD5EB2C4BFAE7.jpg"
            />
            </div>
            <div className="home_row">
            <Product
                id="4"
                title="The book book book book book book book bookbookbookbookbookbookbookbookbookbookbook book bookvbookbookv"
                price={11.56}
                rating={5}
                image="https://sslimages.shoppersstop.com/B8AC9759D45547D9AEF177F0DE13B7C8/img/F4F035913D33476E89CFD5EB2C4BFAE7/204630449_9999_F4F035913D33476E89CFD5EB2C4BFAE7.jpg"
            />
            <Product
                id="5"
                title="The book book book book book book book bookbookbookbookbookbookbookbookbookbookbook book bookvbookbookv"
                price={11.56}
                rating={5}
                image="https://sslimages.shoppersstop.com/B8AC9759D45547D9AEF177F0DE13B7C8/img/F4F035913D33476E89CFD5EB2C4BFAE7/204630449_9999_F4F035913D33476E89CFD5EB2C4BFAE7.jpg"
            />
            </div>
            <div className="home_row">
            <Product
                id="6"
                title="The book book book book book book book bookbookbookbookbookbookbookbookbookbookbook book bookvbookbookv"
                price={11.56}
                rating={5}
                image="https://sslimages.shoppersstop.com/B8AC9759D45547D9AEF177F0DE13B7C8/img/F4F035913D33476E89CFD5EB2C4BFAE7/204630449_9999_F4F035913D33476E89CFD5EB2C4BFAE7.jpg"
            />
            </div>
        </div>
    )
}

export default home
