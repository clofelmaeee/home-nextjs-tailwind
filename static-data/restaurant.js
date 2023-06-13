const { default: Image } = require("next/image");

const RestaurantData = [
    {
        featuresOverview: [
            {
                title: "Features Overview"
            },
            {
                text: "Includes an API based Progressive Web App (PWA) with almost full mobile app functionality."
            },
            {
                text: "Mobile responsive and “mobile first” design.",
            },
            {
                text: "Easy to use CMS for uploading and managing products, users and branches.",
            },
            {
                text: "Includes COD, store pickup and almost any payment gateway.",
            },
            {
                text: " Each store can set up their own delivery area for the “Check to see if we deliver in your Area” .This can be based on postal codes, suburbs or barangas for example.",
            },
            {
                text: "Unlimited number of branches/ stores, each with their own dashboard for managing and tracking sales orders.",
            },
            {
                text: "Customers can create a log-in (members) account.",
            },
            {
                text: "Mobile printer app for viewing and printing out the orders, either for the cashier, kitchen or delivery, or all three.This app also allows the staff to track orders and manage their status without having to use a PC or laptop.",
            },
        ],

        progressiveWebApp:
        {
            title: "Progressive Web App (PWA)",
            image: <Image src="/restaurant/pwa.jpg" alt="Progressive Web App (PWA)" width={253} height={500} />,
            description: [{
                text: "The Progressive Web Application (PWA) provides Mobile App functionality, providing improved user retention and performance, without the complications involved in maintaining a mobile app."
            },
            {
                text: "It's not downloaded from an app store. Users only need to click on the link (bottom right) to install it on their desktop or mobile phone home screen.",
            },
            {
                text: "PWAs load in seconds, and use a very small amount of phone memory.",
            },
            {
                text: "PWAs work offline like mobile apps.",
            },]
        },


        dateTime: {
            title: "Select Delivery Date and Time",
            image: <Image src="/restaurant/date-time.jpeg" alt="Progressive Web App (PWA)" width={400} height={366} />,
            description: [

                {
                    text: "A client can choose “Deliver Now” or a delivery date and time."
                },
                {
                    text: "The store admin can set up the operating hours, and the days in advance which a customer can order for. In this example, it's a week in advance.",
                },
                {
                    text: "Each product has a “preparation time” and a “delivery time”. An order cannot be placed for a time if it’s less than the delivery and preparation time.",
                },
                {
                    text: "Special meals could have many hours of cooking time, where custom cakes may have a one or two day preparation time.",
                },

            ],
        },

        sitesBuilt: {

            title: "Sites Built",
            description: [

                {
                    image: <Image src="/restaurant/botejyu.jpg" alt="Progressive Web App (PWA)" width={500} height={275.8} />
                },
                {
                    image: <Image src="/restaurant/papermoon.jpg" alt="Progressive Web App (PWA)" width={500} height={275.8} />
                },
                {
                    image: <Image src="/restaurant/wingzone.jpg" alt="Progressive Web App (PWA)" width={500} height={275.8} />
                },
                {
                    image: <Image src="/restaurant/cubano.jpg" alt="Progressive Web App (PWA)" width={500} height={275.8} />
                },
            ]
        }      
    }
]

export default RestaurantData;