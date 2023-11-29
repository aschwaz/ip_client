import { AcademicCapIcon, DocumentMagnifyingGlassIcon, CurrencyDollarIcon, ArrowPathIcon, UsersIcon, WrenchScrewdriverIcon } from '@heroicons/react/20/solid'

// used in .map in first section
const features = [
    {
      name: 'Specialized Training.',
      description:
        'Gain access to resources that sharpen your skills for selling market-defining products.',
      icon: AcademicCapIcon,
    },
    {
      name: 'Curated Opportunities.',
      description: 'Get a personalized, ever-changing list of prospects ripe for conversion.',
      icon: DocumentMagnifyingGlassIcon,
    },
    {
      name: 'Full Control Over Earnings.',
      description: 'What you make is yours—no questions asked.',
      icon: CurrencyDollarIcon,
    },
  ]
// used in .map in second section
  const features_2 = [
    {
      name: 'Network with the Elite.',
      description:
        'Tap into a community that\'s making a significant impact across industries.',
      href: '#',
      icon: UsersIcon,
    },
    {
      name: 'Synergetic Collaboration.',
      description:
        'Benefit from an ecosystem that fosters mutual growth and long-term success.',
      href: '#',
      icon: WrenchScrewdriverIcon,
    },
    {
      name: 'Endless Opportunities.',
      description:
        'Forge partnerships that go beyond the initial handshake.',
      href: '#',
      icon: ArrowPathIcon,
    },
  ]
// used in footer



export default function Homepage() {
    return (
        <div>

            {/* ///////////// */}
            {/* First Section */}
            {/* ///////////// */}

            <div className="relative bg-white">
                <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
                    {/* <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6"> */}
                    <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 xl:col-span-6">
                        <div className="mx-auto max-w-2xl lg:mx-0">
                            {/* <img
                            className="h-16"
                            src={InstaPitchLogoBlack}
                            alt="InstaPitch.ai"
                            /> */}
                            <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl">
                            Start earning by selling next-gen solutions
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                            Embark on a rewarding journey by selling products that are set to disrupt the market.
                            </p>
                            <dl className="mt-6 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                                {features.map((feature) => (
                                <div key={feature.name} className="relative pl-9">
                                    <dt className="inline font-semibold text-gray-900">
                                    <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                                    {feature.name}
                                    </dt>{' '}
                                    <dd className="inline">{feature.description}</dd>
                                </div>
                                ))}
                            </dl>
                            <div className="mt-10 flex items-center gap-x-6">
                            <a
                                href="/signup"
                                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Signup
                            </a>
                            <a
                                href="/login"
                                className="rounded-md bg-gray-600 px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Login
                            </a>
                            </div>
                        </div>
                    </div>
                    <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
                        <img
                            className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-screen"
                            src="https://images.unsplash.com/photo-1498758536662-35b82cd15e29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2102&q=80"
                            alt=""
                        />
                    </div>
                </div>
            </div>

            {/* ////////////// */}
            {/* Second Section */}
            {/* ////////////// */}

            <div className="bg-gray-900 py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:text-center">
                        <h2 className="text-base font-semibold leading-7 text-indigo-400">Networking</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Expand Your Circle. Elevate Your Game.
                        </p>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                        Team up with the minds that are shaping tomorrow, today.
                        </p>
                    </div>
                    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                        {features.map((feature) => (
                            <div key={feature.name} className="flex flex-col">
                            <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                                <feature.icon className="h-5 w-5 flex-none text-indigo-400" aria-hidden="true" />
                                {feature.name}
                            </dt>
                            <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                                <p className="flex-auto">{feature.description}</p>
                                {/* <p className="mt-6">
                                <a href={feature.href} className="text-sm font-semibold leading-6 text-indigo-400">
                                    Learn more <span aria-hidden="true">→</span>
                                </a>
                                </p> */}
                            </dd>
                            </div>
                        ))}
                        </dl>
                    </div>
                </div>
            </div>
            <div className="bg-gray-800">
                <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:flex lg:items-center lg:justify-between lg:px-8">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl">
                        Ready to Join a High-Caliber Community?
                        <br />
                        Reserve Your Spot.
                    </h2>
                    <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
                        <a
                        href="/signup"
                        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                        Signup
                        </a>
                    </div>
                </div>
            </div>

            {/* ///////////// */}
            {/* Third Section */}
            {/* ///////////// */}

            <div className="overflow-hidden bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:ml-auto lg:pl-4 lg:pt-4">
                        <div className="lg:max-w-lg">
                        <h2 className="text-base font-semibold leading-7 text-indigo-600">Ai</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Earnings Reimagined with Intelligent Assit</p>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Harness the power of smart technology to create a stable, recurring income.
                        </p>
                        <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                            {features.map((feature) => (
                            <div key={feature.name} className="relative pl-9">
                                <dt className="inline font-semibold text-gray-900">
                                <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                                {feature.name}
                                </dt>{' '}
                                <dd className="inline">{feature.description}</dd>
                            </div>
                            ))}
                        </dl>
                        </div>
                    </div>
                    <div className="flex items-start justify-end lg:order-first">
                        <img
                        src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
                        alt="Product screenshot"
                        className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                        width={2432}
                        height={1442}
                        />
                    </div>
                    </div>
                </div>
                </div>
                <div className="bg-gray-800">
                <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:flex lg:items-center lg:justify-between lg:px-8">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl">
                    The future of sales is here.
                    <br />
                    Are you?
                    </h2>
                <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
                    <a
                    href="/signup"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                    Signup
                    </a>
                </div>
                </div>
                </div>
    


        </div>
    )
}