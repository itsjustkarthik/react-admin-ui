export const menu = [
    {
        id: 1,
        title: "main",
        listItems: [
            {
                id: 1,
                title: "Homepage",
                url: "/",
                icon: "/home.svg"
            },
            {
                id: 2,
                title: "Profile",
                url: "/users/1",
                icon: "/user.svg"
            }
        ]
    },
    {
        id: 2,
        title: "lists",
        listItems: [
            {
                id: 1,
                title: "Users",
                url: "/users",
                icon: "/user.svg"
            },
            {
                id: 2,
                title: "Products",
                url: "/products",
                icon: "/product.svg"
            }
        ]
    },
    {
        id: 3,
        title: "genereal",
        listItems: [
            {
                id: 1,
                title: "Elements",
                url: "/",
                icon: "/element.svg"
            },
            {
                id: 2,
                title: "Notes",
                url: "/",
                icon: "/note.svg"
            },
            {
                id: 3,
                title: "Forms",
                url: "/",
                icon: "/form.svg"
            },
            {
                id: 4,
                title: "Calendar",
                url: "/",
                icon: "/calendar.svg"
            }
        ]
    },
    {
        id: 4,
        title: "Mainenance",
        listItems: [
            {
                id: 1,
                title: "Settings",
                url: "/",
                icon: "/setting.svg"
            },
            {
                id: 2,
                title: "Backups",
                url: "/",
                icon: "/backup.svg"
            }
        ]
    },
    {
        id: 5,
        title: "analytics",
        listItems: [
            {
                id: 1,
                title: "Charts",
                url: "/",
                icon: "/chart.svg"
            },
            {
                id: 2,
                title: "Logs",
                url: "/",
                icon: "/log.svg"
            }
        ]
    }
]

export const topDealUsers = [
    {
        id: 1,
        img: 'profile-placeholder.jpg',
        username: "Prabhakaran",
        email: "prabhakaran@karthik.com",
        amount: "10567"
    },
    {
        id: 2,
        img: 'profile-placeholder.jpg',
        username: "Prabhakaran",
        email: "prabhakaran@karthik.com",
        amount: "10567"
    },
    {
        id: 3,
        img: 'profile-placeholder.jpg',
        username: "Prabhakaran",
        email: "prabhakaran@karthik.com",
        amount: "10567"
    },
    {
        id: 4,
        img: 'profile-placeholder.jpg',
        username: "Prabhakaran",
        email: "prabhakaran@karthik.com",
        amount: "10567"
    },
    {
        id: 5,
        img: 'profile-placeholder.jpg',
        username: "Prabhakaran",
        email: "prabhakaran@karthik.com",
        amount: "10567"
    },
    {
        id: 6,
        img: 'profile-placeholder.jpg',
        username: "Prabhakaran",
        email: "prabhakaran@karthik.com",
        amount: "10567"
    },
    {
        id: 7,
        img: 'profile-placeholder.jpg',
        username: "Prabhakaran",
        email: "prabhakaran@karthik.com",
        amount: "10567"
    },


]

export const chartBoxUser = {
    color: "#8884d8",
    icon: "/userIcon.svg",
    title: "Total Users",
    number: "15.351",
    dataKey: "users",
    percentage: 45,
    chartData: [
        { name: "Sun", users: 400 },
        { name: "Mon", users: 300 },
        { name: "Tue", users: 200 },
        { name: "Wed", users: 278 },
        { name: "Thu", users: 189 },
        { name: "Fri", users: 239 },
        { name: "Sat", users: 349 }
    ]
}

export const chartBoxProduct = {
    color: "skyblue",
    icon: "/productIcon.svg",
    title: "Total Produts",
    number: "3212",
    dataKey: "products",
    percentage: 34,
    chartData: [
        { name: "Sun", products: 400 },
        { name: "Mon", products: 300 },
        { name: "Tue", products: 200 },
        { name: "Wed", products: 278 },
        { name: "Thu", products: 189 },
        { name: "Fri", products: 239 },
        { name: "Sat", products: 349 }
    ]
}

export const chartBoxRevenue = {
    color: "teal",
    icon: "/revenueIcon.svg",
    title: "Total Revenue",
    number: "₹32215",
    dataKey: "revenue",
    percentage: -11,
    chartData: [
        { name: "Sun", revenue: 400 },
        { name: "Mon", revenue: 300 },
        { name: "Tue", revenue: 200 },
        { name: "Wed", revenue: 278 },
        { name: "Thu", revenue: 189 },
        { name: "Fri", revenue: 239 },
        { name: "Sat", revenue: 349 }
    ]
}

export const chartBoxConversion = {
    color: "gold",
    icon: "/conversionIcon.svg",
    title: "Total Ratio",
    number: "2.4",
    dataKey: "ratio",
    percentage: 12,
    chartData: [
        { name: "Sun", ratio: 400 },
        { name: "Mon", ratio: 300 },
        { name: "Tue", ratio: 200 },
        { name: "Wed", ratio: 278 },
        { name: "Thu", ratio: 189 },
        { name: "Fri", ratio: 239 },
        { name: "Sat", ratio: 349 }
    ]
}

export const barChartBoxRevenue = {
    color: "#8884d8",
    icon: "/conversionIcon.svg",
    title: "Profit Earned",
    dataKey: "profit",
    chartData: [
        { name: "Sun", profit: 4000 },
        { name: "Mon", profit: 3000 },
        { name: "Tue", profit: 2000 },
        { name: "Wed", profit: 2780 },
        { name: "Thu", profit: 1890 },
        { name: "Fri", profit: 2390 },
        { name: "Sat", profit: 3490 }
    ]
}

export const barChartBoxVisit = {
    color: "#FF8042",
    icon: "/conversionIcon.svg",
    title: "Total Visit",
    dataKey: "visit",
    chartData: [
        { name: "Sun", visit: 4000 },
        { name: "Mon", visit: 3000 },
        { name: "Tue", visit: 2000 },
        { name: "Wed", visit: 2780 },
        { name: "Thu", visit: 1890 },
        { name: "Fri", visit: 2390 },
        { name: "Sat", visit: 3490 }
    ]
}

export const userRows = [
    {
      id: 1,
      img: "",
      lastName: "R",
      firstName: "Karthik",
      email: "itsjustkarthik@gmail.com",
      phone: "9500097894",
      createdAt: "19.09.2023",
      verified: true
    },
    {
      id: 2,
      img: "",
      lastName: "S",
      firstName: "Sowmya",
      email: "sowmya@gmail.com",
      phone: "9500097895",
      createdAt: "19.09.2023",
      verified: true
    },
    {
      id: 3,
      img: "",
      lastName: "M",
      firstName: "Mohan",
      email: "mohan@gmail.com",
      phone: "9500097896",
      createdAt: "19.09.2023",
      verified: true
    },
    {
      id: 4,
      img: "",
      lastName: "R",
      firstName: "Ram",
      email: "ram@gmail.com",
      phone: "9500097897",
      createdAt: "19.09.2023",
      verified: true
    },
    {
      id: 5,
      img: "",
      lastName: "S",
      firstName: "Shyam",
      email: "shyam@gmail.com",
      phone: "9500097898",
      createdAt: "19.09.2023",
      verified: true
    },
    {
      id: 6,
      img: "",
      lastName: "M",
      firstName: "Murali",
      email: "murali@gmail.com",
      phone: "9500097899",
      createdAt: "19.09.2023",
      verified: true
    },
    {
      id: 7,
      img: "",
      lastName: "K",
      firstName: "Kavitha",
      email: "kavitha@gmail.com",
      phone: "9500097900",
      createdAt: "19.09.2023",
      verified: true
    },
    {
      id: 8,
      img: "",
      lastName: "N",
      firstName: "Nisha",
      email: "nisha@gmail.com",
      phone: "9500097901",
      createdAt: "19.09.2023",
      verified: true
    },
    {
      id: 9,
      img: "",
      lastName: "G",
      firstName: "Ganesh",
      email: "ganesh@gmail.com",
      phone: "9500097902",
      createdAt: "19.09.2023",
      verified: true
    },
    {
      id: 10,
      img: "",
      lastName: "V",
      firstName: "Vijay",
      email: "vijay@gmail.com",
      phone: "9500097903",
      createdAt: "19.09.2023",
      verified: true
    },
    {
      id: 11,
      img: "",
      lastName: "P",
      firstName: "Priya",
      email: "priya@gmail.com",
      phone: "9500097904",
      createdAt: "19.09.2023",
      verified: true
    }
]

export const productRows = [
  {
    id: 1,
    img: "profile-placeholder.jpg",
    title: "Smartphone",
    color: "Black",
    producer: "Samsung",
    price: "$599",
    createdAt: "19.09.2023",
    inStock: true
  },
  {
    id: 2,
    img: "profile-placeholder.jpg",
    title: "Laptop",
    color: "Silver",
    producer: "Apple",
    price: "$1299",
    createdAt: "19.09.2023",
    inStock: true
  },
  {
    id: 3,
    img: "profile-placeholder.jpg",
    title: "Smartwatch",
    color: "Rose Gold",
    producer: "Fitbit",
    price: "$199",
    createdAt: "19.09.2023",
    inStock: true
  },
  {
    id: 4,
    img: "profile-placeholder.jpg",
    title: "Headphones",
    color: "Black",
    producer: "Sony",
    price: "$149",
    createdAt: "19.09.2023",
    inStock: true
  },
  {
    id: 5,
    img: "profile-placeholder.jpg",
    title: "Camera",
    color: "Silver",
    producer: "Canon",
    price: "$799",
    createdAt: "19.09.2023",
    inStock: true
  },
  {
    id: 6,
    img: "profile-placeholder.jpg",
    title: "Tablet",
    color: "Space Gray",
    producer: "Microsoft",
    price: "$499",
    createdAt: "19.09.2023",
    inStock: true
  },
  {
    id: 7,
    img: "profile-placeholder.jpg",
    title: "Drone",
    color: "White",
    producer: "DJI",
    price: "$699",
    createdAt: "19.09.2023",
    inStock: true
  },
  {
    id: 8,
    img: "profile-placeholder.jpg",
    title: "Gaming Console",
    color: "Black",
    producer: "Sony",
    price: "$399",
    createdAt: "19.09.2023",
    inStock: true
  },
  {
    id: 9,
    img: "profile-placeholder.jpg",
    title: "Fitness Tracker",
    color: "Blue",
    producer: "Garmin",
    price: "$79",
    createdAt: "19.09.2023",
    inStock: true
  },
  {
    id: 10,
    img: "profile-placeholder.jpg",
    title: "Bluetooth Speaker",
    color: "Red",
    producer: "JBL",
    price: "$69",
    createdAt: "19.09.2023",
    inStock: true
  },
  {
    id: 11,
    img: "profile-placeholder.jpg",
    title: "E-book Reader",
    color: "White",
    producer: "Amazon",
    price: "$129",
    createdAt: "19.09.2023",
    inStock: true
  },
  {
    id: 12,
    img: "profile-placeholder.jpg",
    title: "External Hard Drive",
    color: "Black",
    producer: "Seagate",
    price: "$79",
    createdAt: "19.09.2023",
    inStock: true
  },
  {
    id: 13,
    img: "profile-placeholder.jpg",
    title: "Smart Thermostat",
    color: "Silver",
    producer: "Nest",
    price: "$199",
    createdAt: "19.09.2023",
    inStock: true
  },
  {
    id: 14,
    img: "profile-placeholder.jpg",
    title: "Wireless Mouse",
    color: "Black",
    producer: "Logitech",
    price: "$29",
    createdAt: "19.09.2023",
    inStock: true
  },
  {
    id: 15,
    img: "profile-placeholder.jpg",
    title: "Printer",
    color: "White",
    producer: "HP",
    price: "$149",
    createdAt: "19.09.2023",
    inStock: true
  }
]
  

export const singleUser = {
  id: 1,
  title: "John Doe",
  img: "https://images.pexels.com/photos/17397364/pexels-photo-17397364.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  info: {
    username: "johndoe27",
    fullname: "John Doe",
    email: "itsjustkarthik@gmail.com",
    phone: "9500097894",
    status: "verified",
  },
  chart: {
    dataKeys: [
      { name: "visits", color: "#82ca9d"},
      { name: "orders", color: "#8884d8"},
    ],
    data: [
      { name: "Sun", visits: 4000, orders: 2400 },
      { name: "Mon", visits: 3000, orders: 1398 },
      { name: "Tue", visits: 2000, orders: 3800 },
      { name: "Wed", visits: 2780, orders: 3908 },
      { name: "Thu", visits: 1890, orders: 4800 },
      { name: "Fri", visits: 2390, orders: 3800 },
      { name: "Sat", visits: 3490, orders: 4300 },
    ],
  },
  activities: [
    {
      text: "John Doe purchased playstation 5 Digital Edition",
      time: "3 days ago"
    },
    {
      text: "John Doe added 3 items into their wishlist",
      time: "1 week ago"
    },
    {
      text: "John Doe purchased Sony Bravia",
      time: "2 weeks ago"
    },
    {
      text: "John Doe reviewed the product",
      time: "1 month ago"
    },
    {
      text: "John Doe added 1 item to their wishlist",
      time: "1 month ago"
    },
    {
      text: "John Doe reviewed the product",
      time: "1 month ago"
    },
  ],
}

export const singleProduct = {
  id: 1,
  title: 'PlayStation 5 Digital Edition',
  img: "https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png",
  info: {
    productId: "Ps5SDF1156d",
    color: "white",
    price: "$250.99",
    producer: "Sony",
    export: "Japan",
  },
  chart: {
    dataKeys: [
      { name: "visits", color: "#82ca9d"},
      { name: "orders", color: "#8884d8"},
    ],
    data: [
      { name: "Sun", visits: 4000, orders: 2400 },
      { name: "Mon", visits: 3000, orders: 1398 },
      { name: "Tue", visits: 2000, orders: 3800 },
      { name: "Wed", visits: 2780, orders: 3908 },
      { name: "Thu", visits: 1890, orders: 4800 },
      { name: "Fri", visits: 2390, orders: 3800 },
      { name: "Sat", visits: 3490, orders: 4300 },
    ],
  },
  activities: [
    {
      text: "John Doe purchased playstation 5 Digital Edition",
      time: "3 days ago"
    },
    {
      text: "John Doe added playstation 5 Digital Edition into their wishlist",
      time: "1 week ago"
    },
    {
      text: "Mike Doe purchased playstation 5 Digital Edition",
      time: "2 weeks ago"
    },
    {
      text: "Anna Doe reviewed the product",
      time: "1 month ago"
    },
    {
      text: "Michael Doe added playstation 5 Digital Edition into their wishlist",
      time: "1 month ago"
    },
    {
      text: "Helen Doe reviewed the product",
      time: "1 month ago"
    },
  ],
}