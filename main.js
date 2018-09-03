new Vue({
    el: "#app",
    data:{
        features:[
            {
                icon: 'img/sprite.svg#icon-global',
                heading: 'World best luxury homes',
                content:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus.',
            },
            {
                icon: 'img/sprite.svg#icon-trophy',
                heading: 'Only the best properties',
                content:'Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus rerum sed a eligendi aut quia.',
            },
            {
                icon: 'img/sprite.svg#icon-map-pin',
                heading: 'All homes in top location',
                content:'Tenetur distinctio necessitatibus pariatur voluptatibus quidem consequatur harum.',
            },
            {
                icon: 'img/sprite.svg#icon-key',
                heading: 'New home in one week',
                content:'Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
            },
            {
                icon: '/img/sprite.svg#icon-presentation',
                heading: 'Top 1% realtors',
                content:'Quidem consequatur harum, voluptatum mollitia quae. Tenetur distinctio necessitatibus pariatur voluptatibus',
            },
            {
                icon: 'img/sprite.svg#icon-lock',
                heading: 'Secure payment on nexter',
                content:'Pariatur voluptatibus quidem consequatur harum, voluptatum mollitia quae.',
            },
        ],
        houses:[
            {
                img:'img/house-1.jpeg',
                title: 'Beautiful Family House',
                location: 'USA',
                room: ' 5 rooms',
                square: 325,
                money: '$1.200.000',
            },
            {
                img:'img/house-2.jpeg',
                title: 'Modern Glass Villa',
                location: 'Canada',
                room: ' 6 rooms',
                square: 450,
                money: '$2.750.000',
            },
            {
                img:'img/house-3.jpeg',
                title: 'Cozy Country House',
                location: 'UK',
                room: ' 4 rooms',
                square: 250,
                money: '$800.000',
            },
            {
                img:'img/house-4.jpeg',
                title: 'Large Rustical Villa',
                location: 'Portugal',
                room: ' 3 rooms',
                square: 325,
                money: '$1.900.000',
            },
            {
                img:'img/house-5.jpeg',
                title: 'Majestic Palace House',
                location: 'Germany',
                room: ' 8 rooms',
                square: 325,
                money: '$5.300.000',
            },
            {
                img:'img/house-6.jpeg',
                title: 'Modern Familiy Apartment',
                location: 'Italy',
                room: ' 2 rooms',
                square: 325,
                money: '$600.000',
            },
        ],
        quicklinks:[
            'find your dream home',
            'request proposal',
            'download home planner',
            'contact us',
            'summit your property',
            'come work with us',
        ],
        realtors:[
            {
                img:'img/realtor-1.jpeg',
                name: 'Erik Feiman',
                houseSold: '245 houses sold'
            },
            {
                img:'img/realtor-2.jpeg',
                name: 'Kim Brown',
                houseSold: '212 houses sold'
            },
            {
                img:'img/realtor-3.jpeg',
                name: 'Toby Ramsey',
                houseSold: '282 houses sold'
            },
            
        ]
    }
})
