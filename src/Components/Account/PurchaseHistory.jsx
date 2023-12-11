import HistoryItem from './HistoryItem'

const obj = {
    array1: [
        {
            src: 'https://pngimg.com/d/headphones_PNG101926.png',
            price: 387,
            status: 'Payment due',
            title: 'Wireless Headphones'
        }
    ],
    array2: [
        {
            src: 'https://pngimg.com/d/wireless_speaker_PNG28.png',
            price: 579,
            status: 'Shipped',
            title: 'Bluetooth Speaker'
        },
        {
            src: 'https://gadbazar.pk/wp-content/uploads/2023/04/G9-ULTRA-MAX-SMART-WATCH.png',
            price: 463,
            status: 'Delivered',
            title: 'Smart Watch'
        },
        {
            src: 'https://www.pure-gear.com/media/catalog/product/cache/f2948f408e9fe7a0ead9b85c9e935326/6/2/62632pg_5_000mah_purejuice_black_02.png',
            price: 299,
            status: 'In transit',
            title: 'Portable Charger'
        }
    ],
    array3: [
        {
            src: 'https://atlas-content-cdn.pixelsquid.com/stock-images/wooden-stand-table-mdaLE63-600.jpg',
            price: 520,
            status: 'Shipped',
            title: 'Tablet Stand'
        },
        {
            src: 'https://atlas-content-cdn.pixelsquid.com/stock-images/laptop-bag-doNVnB7-600.jpg',
            price: 650,
            status: 'Delivered',
            title: 'Laptop Case'
        }
    ]
};
const orders = [
    {
        date: '29 November, 2023',
        sum: 1200,
        orderNumber: 'UYTBJNDLIEHDN334',
       payment: 'payment declined'
    },
    {
        date: '30 November, 2023',
        sum: 1500,
        orderNumber: 'POIUYTREWQASDFG',
        payment: 'payment settled'
    
    },
    {
        date: '1 December, 2023',
        sum: 1800,
        orderNumber: 'MNBVCXZLKJHGFDS',
        payment: 'payment settled'
    }
];


export default function PurchaseHistory() {
    return (
        <div>
            <HistoryItem items={obj.array1} order={orders[0]} />
            <HistoryItem items={obj.array2} order={orders[1]} />
            <HistoryItem items={obj.array3} order={orders[2]} />
        </div>
    )
}