import React from 'react'
import OfferCard from './OfferCard'

const itemsInfo = [
    {
        bgColor: "secondary",
        subCardColor: "primary",
        titleColor: "white",
        borderColor: "secondary",
        img: "/featur-1.jpg",
        title: "Fresh Apples",
        offer: "20% OFF",
    },
    {
        bgColor: "slate-800",
        subCardColor: "white",
        titleColor: "primary",
        borderColor: "slate-800",
        img: "/featur-2.jpg",
        title: "Tasty Fruits",
        offer: "Free Delivery"
    },
    {
        bgColor: "primary",
        subCardColor: "secondary",
        titleColor: "white",
        borderColor: "primary",
        img: "/featur-3.jpg",
        title: "Exotic Vegetables",
        offer: "Discount 30$"
    },
]

const Offers = () => {
  return (
    <div className="flex gap-6 mx-4 sm:mx-8 md:mx-16 lg:mx-32 py-36">
    {
        itemsInfo.map((item) => (
            <OfferCard item={item} key={item.title} />
        ))
    }
    </div>
  )
}

export default Offers
