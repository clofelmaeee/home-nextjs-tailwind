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
                type: 'content_right',
                title: 'Progressive Web App (PWA)',
                image:
                {
                    path: '/restaurant/pwa.jpg',
                    alt: 'Progressive Web App (PWA)',
                    width: 253,
                    height: 500
                },

                list: "<ul><li>The Progressive Web Application (PWA) provides Mobile App functionality, providing improved user retention and performance, without the complications involved in maintaining a mobile app.</li> <li>It's not downloaded from an app store. Users only need to click on the link (bottom right) to install it on their desktop or mobile phone home screen.</li> <li>PWAs load in seconds, and use a very small amount of phone memory.</li> <li>PWAs work offline like mobile apps.</li></ul>",
                firstDiv: ''
            },
            {
                type: 'content_right',
                title: 'Select Delivery Date and Time',
                image:
                {
                    path: '/restaurant/date-time.jpeg',
                    alt: 'Select Delivery Date and Time',
                    width: 400,
                    height: 366
                },
                list: "<ul><li>A client can choose “Deliver Now” or a delivery date and time.</li><li>The store admin can set up the operating hours, and the days in advance which a customer can order for. In this example, it's a week in advance.</li><li>Each product has a “preparation time” and a “delivery time”. An order cannot be placed for a time if it's less than the delivery and preparation time.</li><li>Special meals could have many hours of cooking time, where custom cakes may have a one or two day preparation time.</li></ul>"
            },
            {
                type: "carousel",
                title: "Sites Built",
                items: [
                    {
                        slickTitle: "Botejyu",
                        image: {
                            path: "/restaurant/botejyu.jpg",
                            alt: "Botejyu",
                            width: 500,
                            height: 270
                        }
                    },
                    {
                        slickTitle: "Paper Moon",
                        image: {
                            path: "/restaurant/papermoon.jpg",
                            alt: "Paper Moon",
                            width: 500,
                            height: 270
                        }
                    },
                    {
                        slickTitle: "Wingzone",
                        image: {
                            path: "/restaurant/wingzone.jpg",
                            alt: "Wingzone",
                            width: 500,
                            height: 270
                        }
                    },
                    {
                        slickTitle: "Angel's Pizza",
                        image: {
                            path: "/restaurant/angels-pizza.jpg",
                            alt: "Angel's Pizza",
                            width: 500,
                            height: 270
                        }
                    },
                    {
                        slickTitle: "Pepi Cubano",
                        image: {
                            path: "/restaurant/free-delivery.jpg",
                            alt: "Pepi Cubano",
                            width: 500,
                            height: 270
                        }
                    },
                ]
            },
            {
                type: 'content_right',
                title: 'Optional Staff Mobile Application with Bluetooth Printer',
                image:
                {
                    path: '/restaurant/restaurant-staff-app.jpg',
                    alt: 'Optional Staff Mobile Application with Bluetooth Printer',
                    width: 472,
                    height: 500
                },
                list: "<ul><li>The app is setup to receive orders for the assigned Branch. </li><li>TWorks on any low cost Android phone that has Bluetooth. </li><li>Connects to most low cost Bluetooth thermal printers .</li><li>SThe phone beeps when an order is received, or when the order needs to be moved to the POS/kitchen. The phone beeps until the order is acknowledged to ensure that the order is not overlooked.</li><li>The app allows for managing the orders without the need for a laptop or PC. Orders can be searched. The status of any order can be set on the app, including being cancelled. </li><li>The printout is ideal for restaurants where the kitchen orders are managed through the POS. In that case, the order notification is made when the job needs to be entered into the POS. The printout has all the details required for entering the order into the POS.</li><li>A printout is also available for the delivery person.</li><li>The app connects via the internet, usually through WiFi.</li></ul>"
            },
            {
                type: 'content_right',
                title: 'Branch Manager Dashboard',
                image:
                {
                    path: '/restaurant/dashboard-486.jpg',
                    alt: 'Branch Manager Dashboard',
                    width: 600,
                    height: 385
                },
                list: "<p>The Branch managers dashboard allow the branch manager to:</p><ul><li>View full details of all orders for any day </li><li>TCancel orders, or mark them as pending, in progress, ready for delivery and delivered.</li><li>Block any time slot in a day for orders, such as for overload at that time slot. </li><li>Block dates such as.<ul><li>Closed due to Coronavirus</li><li>Closed due to holidays such as Christmas</li><li>Closed Sunday for example</li></ul></li><li>Adjust stock levels, and set out-of-stock for certain items.</li></ul>"
            },

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
                        path: '/golf/app-homepage.jpg',
                        alt: "App Homepage"
                    },
                    {
                        title: 'Choose a Date',
                        path: "/golf/choose-a-date.jpg",
                        alt: "Choose a Date"
                    },
                    {
                        title: 'Choose Time and Course',
                        path: "/golf/time-course.jpg",
                        alt: "Choose Time and Course"
                    },
                    {
                        title: 'Choose Add-ons',
                        path: '/golf/add-ons.jpg',
                        alt: "Choose Add-ons"
                    },
                    {
                        title: 'Payment Summary',
                        path: '/golf/payment.jpg',
                        alt: "Payment Summary"
                    },

                ]
            },
            {
                type: 'group_list',
                title: 'Player & Staff Mobile App Features',
                items: [
                    {
                        title: "<h3>Player Mobile App</h3>",
                        list: '<p>Account Registration</p><p>Account Registration</p><p>Account Registration</p><p>Account Registration</p><p>Account Registration</p>'
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