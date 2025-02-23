const mongoose = require('mongoose')
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'please enter product name'],
        trim: true,
        maxLength: [100, 'product name cannot exceed 100 characters']
    },
    price: {
        type: Number,
        required: [true, 'please enter price'],
        maxLength: [5, 'price cannot exceed 100 characters'],
        default: 0.0
    },
    description: {
        type: String,
        required: [true, 'please enter product description']
    },
    ratings: {
        type: Number,
        default: 0
    },
    images: [
        {
            public_id: {
                type: String,
                required: false,
            },

            url: {
                type: String,
                required: false,
            }
        }
    ],
    category: {
        type: String,
        required: [true, 'please select category for product'],
        enum: {
            values: [
                'Vegetables and Fruits',
                'Organic and Gourmet',
                'Bakery and Biscuits',
                'Atta, Rice & Daal',
                'Baby Care',
                'Cleaning Essentials',
                'Dairy Bread and Eggs',
                'Masala , Oil and More',
                'Sweet Tooth',
                'Juices'
            ],
            message: 'please select correct category for product'
        }
    },
    seller: {
        type: String,
        required: [true, 'please enter product seller']
    },
    
    
    stock: {
        type: Number,
        required: [true, 'please enter product stock'],
        maxLength: [15, 'product name cannot  exceed  15  characters'],
        default: 0
    },
    numOfReviews: {
        type: Number,
        default: 0
    },
    reviews: {
        required: [false, 'please enter a review']
    },
//     reviews: [
//         {
//         name: {
//             type: String,
//             required: true,
//         },
//         ratings: {
//             type: Number,
//             required: true,
//         },
//         comment: {
//             type: String,
//             required: true,
//         }
//     }
// ],

    createdAt: {
        type: Date,
        default: Date.now
    }
}
)

module.exports = mongoose.model('Product', productSchema)