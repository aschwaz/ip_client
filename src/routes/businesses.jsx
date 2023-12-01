import Rejig from "../assets/rejig.jpeg"
import LockedWhite from "../assets/lockedwhite.png"


// this will be used in the .map to list products. Can be replaced once we have datbase
const products = [
    {
        id: 1,
        name: 'Rejig.ai',
        href: '/1',
        price: '$240',
        description: 'Rejig monitors all your content channels, customer reviews, industry news, trends, and uses AI to automagically create & publish content to social media.',
        options: 'Pay Per Transaction*',
        imageSrc: Rejig,
        imageAlt: 'Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.',
    },
    {
        id: 2,
        name: 'Fintech for SMBs',
        href: '#',
        price: '$2,000',
        description: 'Unlock at 10 transactions',
        options: 'Pay Per Transaction',
        imageSrc: LockedWhite,
        imageAlt: 'Front of plain black t-shirt.',
    },
    {
        id: 3,
        name: 'Fintech for SMBs',
        href: '#',
        price: '$2,000',
        description: 'Unlock at 10 transactions',
        options: 'Pay Per Transaction',
        imageSrc: LockedWhite,
        imageAlt: 'Front of plain black t-shirt.',
    },
    {
        id: 4,
        name: 'Fintech for SMBs',
        href: '#',
        price: '$2,000',
        description: 'Unlock at 10 transactions',
        options: 'Pay Per Transaction',
        imageSrc: LockedWhite,
        imageAlt: 'Front of plain black t-shirt.',
    },
    {
        id: 5,
        name: 'Rejig.ai',
        href: '/product',
        price: '$240',
        description: 'Rejig monitors all your content channels, customer reviews, industry news, trends, and uses AI to automagically create & publish content to social media.',
        options: 'Pay Per Transaction*',
        imageSrc: LockedWhite,
        imageAlt: 'Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.',
    },
    {
        id: 6,
        name: 'Fintech for SMBs',
        href: '#',
        price: '$2,000',
        description: 'Unlock at 10 transactions',
        options: 'Pay Per Transaction',
        imageSrc: LockedWhite,
        imageAlt: 'Front of plain black t-shirt.',
    },
    {
        id: 7,
        name: 'Fintech for SMBs',
        href: '#',
        price: '$2,000',
        description: 'Unlock at 10 transactions',
        options: 'Pay Per Transaction',
        imageSrc: LockedWhite,
        imageAlt: 'Front of plain black t-shirt.',
    },
    {
        id: 8,
        name: 'Fintech for SMBs',
        href: '#',
        price: '$2,000',
        description: 'Unlock at 10 transactions',
        options: 'Pay Per Transaction',
        imageSrc: LockedWhite,
        imageAlt: 'Front of plain black t-shirt.',
    },
    {
        id: 9,
        name: 'Rejig.ai',
        href: '/product',
        price: '$240',
        description: 'Rejig monitors all your content channels, customer reviews, industry news, trends, and uses AI to automagically create & publish content to social media.',
        options: 'Pay Per Transaction*',
        imageSrc: LockedWhite,
        imageAlt: 'Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.',
    },
    {
        id: 10,
        name: 'Fintech for SMBs',
        href: '#',
        price: '$2,000',
        description: 'Unlock at 10 transactions',
        options: 'Pay Per Transaction',
        imageSrc: LockedWhite,
        imageAlt: 'Front of plain black t-shirt.',
    },
    {
        id: 11,
        name: 'Fintech for SMBs',
        href: '#',
        price: '$2,000',
        description: 'Unlock at 10 transactions',
        options: 'Pay Per Transaction',
        imageSrc: LockedWhite,
        imageAlt: 'Front of plain black t-shirt.',
    },
    {
        id: 12,
        name: 'Fintech for SMBs',
        href: '#',
        price: '$2,000',
        description: 'Unlock at 10 transactions',
        options: 'Pay Per Transaction',
        imageSrc: LockedWhite,
        imageAlt: 'Front of plain black t-shirt.',
    },
    // More products...
  ]

export default function Businesses() {
    return (
        <div>
            <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 py-6 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <h2 className="sr-only">Products</h2>
                    <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
                        {products.map((product) => (
                        <div
                            key={product.id}
                            className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
                        >
                            <div className="aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none group-hover:opacity-75 sm:h-96">
                                <img
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    className="h-full w-full object-cover object-center sm:h-full sm:w-full"
                                />
                            </div>
                            <div className="flex flex-1 flex-col space-y-2 p-4">
                                <h3 className="text-sm font-medium text-gray-900">
                                    <a href={product.href}>
                                        <span aria-hidden="true" className="absolute inset-0" />
                                        {product.name}
                                    </a>
                                </h3>
                                <p className="text-sm text-gray-500">{product.description}</p>
                                <div className="flex flex-1 flex-col justify-end">
                                    <p className="text-sm italic text-gray-500">{product.options}</p>
                                    <p className="text-base font-medium text-gray-900">{product.price}</p>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export const businessesLoader = async({params}) => {
    const businessesResponse = await fetch(`${url}/api/businesses`)
    const businesses = await businessesResponse.json()

    return businesses
}