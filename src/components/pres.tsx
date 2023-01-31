import logo from "../assets/images/image1.jpeg";

export const Pres: React.FC<{}> = () => {

return (

    <>
<div className="relative bg-white py-16 lg:pt-36 lg:pb-96">
    <div className="absolute inset-x-0 top-0 hidden h-1/2 lg:block" aria-hidden="true" />
        <div className="mx-auto max-w-7xl bg-white lg:bg-transparent lg:px-8">
            <div className="lg:grid lg:grid-cols-8">
                    <div className="relative z-10 lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:bg-transparent lg:py-16">
                        <div className="mx-auto max-w-md px-6 sm:max-w-3xl lg:max-w-none lg:p-0">
                            <div className="aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1">
                                <img
                                className="rounded-3xl object-cover object-center shadow-2xl"
                                src={logo}
                                alt=""
                                />
                            </div>
                        </div>
                    </div>

                    <div className="relative bg-white lg:col-span-10 lg:col-start-3 lg:row-start-1 lg:grid lg:grid-cols-8 lg:items-center lg:rounded-3xl">
                        <div className="relative mx-auto max-w-md space-y-6 py-12 px-6 sm:max-w-3xl sm:py-16 lg:col-span-6 lg:col-start-4 lg:max-w-none lg:p-0">
                            <h2 className="text-4xl font-bold tracking-tight text-stone-900 sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl">
                                <span className="block xl:inline">Bienvenue chez </span>
                                <span className="block text-red-700 xl:inline">DIJOMA</span>
                            </h2>
                            <p className="mx-auto mt-3 max-w-md text-lg text-stone-500 sm:text-xl md:mt-5 md:max-w-3xl">
                                Société familiale de publicité et de menuiserie créée en 1996.
                                Agréée Région Wallonne et affiliée CSTC.
                            </p>
                            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                                <div className="rounded-md shadow">
                                    <a href="#informations" 
                                        className="flex w-full items-center justify-center rounded-md border border-transparent bg-red-700 px-8 py-3 text-base font-medium text-white hover:bg-red-800 md:py-4 md:px-10 md:text-lg">
                                        En savoir plus
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
    </>
  )
}