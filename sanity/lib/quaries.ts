import { defineQuery } from "next-sanity"

export const Allproduct =defineQuery(`{
    
    *[_type=="product"](
    
    _id,
    name,
    description,
    price,
    discountPercentage,
    pricewithoutDiscount,
    rating,
    ratingCount,
    tags,
    sizes,
    "imageurl":image.asset->url

    
    )
    
    }`)

    export const Threeproduct =defineQuery(`{
    
        *[_type=="product"[0..2]](
        
        _id,
        name,
        description,
        price,
        discountPercentage,
        pricewithoutDiscount,
        rating,
        ratingCount,
        tags,
        sizes,
        "imageurl":image.asset->url
    
        
        )
        
        }`)