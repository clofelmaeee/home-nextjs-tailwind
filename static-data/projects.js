const projects = [

    {
        title: 'Restaurant Online Food Ordering',
        slug: '/restaurant',
        id: 1,
        description: '<p>Our Online Food Ordering Website is an ideal solution for hotels, restaurants, pizza places, bakeries or catering businesses to augment their dwindling sales during the Coronavirus Pandemic, by making the meals, breads or pastries available through online sales and ordering. Our solution is specifically for online food ordering or catering, and comes with extensive features that are not available with online shop websites.</p> <p>The system is suitable to be used in any country, and can be modified to meet your specific food ordering requirements.</p>',
        images: [
            {
                path: '/restaurant/wingzone_mobilea.jpg',
                alt: "Mimosa",
                width: 184,
                height: 376,
            },
            {
                path: '/restaurant/wingzone.jpg',
                alt: "Mimosa",
                width: 550,
                height: 401,
            },
            {
                path: '/restaurant/wingzone_mobileb.jpg',
                alt: "Mimosa",
                width: 184,
                height: 376,
            }
        ],
        frames: [
            {
                path: '/frames/frame_mobile.png',
                alt: "",
                width: 194,
                height: 410,
            },
            {
                path: '/frames/frame_laptop.png',
                alt: "",
                width: 706,
                height: 401,
            },
            {
                path: '/frames/frame_mobile.png',
                alt: "",
                width: 194,
                height: 410,
            },
        ],
        blocks: [
            {
                type: 'list',
                title: 'Features Overview',
                list: "<ul><li>Includes an API based Progressive Web App (PWA) with almost full mobile app functionality.</li> <li>Mobile responsive and “mobile first” design.</li> <li>Easy to use CMS for uploading and managing products, users and branches.</li> <li>Includes COD, store pickup and almost any payment gateway.</li> <li>Each store can set up their own delivery area for the “Check to see if we deliver in your Area” .This can be based on postal codes, suburbs or barangas for example.</li> <li>Unlimited number of branches/ stores, each with their own dashboard for managing and tracking sales orders.</li> <li>Customers can create a log-in (members) account.</li> <li>Mobile printer app for viewing and printing out the orders, either for the cashier, kitchen or delivery, or all three.This app also allows the staff to track orders and manage their status without having to use a PC or laptop.</li></ul>"
            },
            {
                type: 'content-right',
                title: 'Progressive Web App (PWA)',
                image: [
                    {
                        path: '/restaurant/pwa.jpg',
                        alt: 'Progressive Web App (PWA)',
                        width: 253,
                        height: 500
                    }
                ],
                list: "<ul><li>The Progressive Web Application (PWA) provides Mobile App functionality, providing improved user retention and performance, without the complications involved in maintaining a mobile app.</li> <li>It's not downloaded from an app store. Users only need to click on the link (bottom right) to install it on their desktop or mobile phone home screen.</li> <li>PWAs load in seconds, and use a very small amount of phone memory.</li> <li>PWAs work offline like mobile apps.</li></ul>"

            },
            {
                type: 'content-right',
                title: 'Select Delivery Date and Time',
                image: [
                    {
                        path: '/restaurant/date-time.jpeg',
                        alt: 'Select Delivery Date and Time',
                        width: 400,
                        height: 366
                    }
                ],
                list: [
                    {
                        item: "The Progressive Web Application (PWA) provides Mobile App functionality, providing improved user retention and performance, without the complications involved in maintaining a mobile app."
                    },
                    {
                        item: "It's not downloaded from an app store. Users only need to click on the link (bottom right) to install it on their desktop or mobile phone home screen.",
                    },
                    {
                        item: "PWAs load in seconds, and use a very small amount of phone memory.",
                    },
                    {
                        item: "PWAs work offline like mobile apps.",
                    }
                ]
            }

        ]
    },
    {
        title: 'Golf Course Management System',
        slug: '/golf-course-management-system',
        id: 1,
        description: '<p>The Halcyon Golf Course Management System, is a complete, modern, cloud based software system for managing golf courses of any number of holes or courses. The first system was for the Mimosa 36 hole Golf course, in Clark, Philippines.</p> <p>The system comes with a mobile app that allows a player to book, play and pay without the need to interface with staff. This social distancing feature is especially relevant during the Covid-19 pandemic in many countries.</p> <p>Most of the staff functions are done via a staff mobile app.</p> <p>The management dashboard features are extensive, and produces some 50 separate financial and operational reports.</p> <p>The golf course management system is suitable to be used in any country, and can be modified to meet the specific requirements of any golf course. This includes currency types, taxes, and payment gateways. We can customize it to interface with any of your existing systems, or to external applications.</p>',
        images: [
            {
                path: '/golf/golf-app-1.jpg',
                alt: "Mimosa",
                width: 184,
                height: 376,
            },
            {
                path: '/golf/mimosa.jpg',
                alt: "Mimosa",
                width: 550,
                height: 401,
            },
            {
                path: '/golf/golf-app-bill.jpg',
                alt: "Mimosa",
                width: 184,
                height: 376,
            }
        ],
        frames: [
            {
                path: '/frames/frame_mobile.png',
                alt: "",
                width: 194,
                height: 410,
            },
            {
                path: '/frames/frame_laptop.png',
                alt: "",
                width: 706,
                height: 401,
            },
            {
                path: '/frames/frame_mobile.png',
                alt: "",
                width: 194,
                height: 410,
            },
        ],
        blocks: [
            {
                type: 'carousel',
                title: 'Player Mobile App',
                images: [
                    {
                        title: 'App Homepage',
                        path: '/asd.png',
                    },
                    {
                        title: 'App Homepage',
                        path: '/asd.png',
                    },
                    {
                        title: 'App Homepage',
                        path: '/asd.png',
                    },
                ]
            },
            {
                type: 'group_list',
                title: 'Player & Staff Mobile App Features',
                items: [
                    {
                        title: 'Player Mobile App',
                        description: '<p>Account Registration</p><p>Account Registration</p><p>Account Registration</p><p>Account Registration</p><p>Account Registration</p>'
                    }
                ]
            },
            {
                type: 'group_list',
                title: 'Administrator Dashboard Functions',
                items: [
                    {
                        title: 'Booking Management',
                        description: '<p>Account Registration</p><p>Account Registration</p><p>Account Registration</p><p>Account Registration</p><p>Account Registration</p>'
                    },
                    {
                        title: 'Golf Cart Management',
                        description: '<p>Account Registration</p><p>Account Registration</p><p>Account Registration</p><p>Account Registration</p><p>Account Registration</p>'
                    }
                ]
            }
        ]
    },

]


export default projects;