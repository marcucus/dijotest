import logo from "../assets/images/image1.jpeg";

export const Pres: React.FC<{}> = () => {
    const info = [
        {
            title:'Information',
            description:'Notre société réalise la création, la confection et la pose de lettrages, enseignes et slogans publicitaires. Nous nous occupons de votre visibilité.'
        },
        {
            title:'Information',
            description:'Spécialisée dans le grand format et le placement à plusieurs mètres de hauteur, notre personnel dévoué et qualifié réalisé avec le patron les poses les plus délicates, ou difficiles d\'accès.'
        },
        {
            title:'Information',
            description:'Pour vos cadeaux d\'entreprise ou vos "coups de pub", une gamme d\'objet divers avec votre logo ou slogan vous est proposée.'
        },
    ];

return (

    <>
<div className="relative bg-white py-16 lg:pt-36 lg:pb-54">
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

                    <div className="relative bg-white lg:bg-apple lg:col-span-10 lg:col-start-3 lg:row-start-1 lg:grid lg:grid-cols-8 lg:items-center lg:rounded-3xl">
                        <div className="relative mx-auto max-w-md space-y-6 py-12 px-6 sm:max-w-3xl sm:py-16 lg:col-span-6 lg:col-start-4 lg:max-w-none lg:p-0">
                            <h2 className="text-4xl font-bold tracking-tight text-stone-900 lg:text-white sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl sm:text-center">
                                <span className="block xl:inline">Bienvenue chez </span>
                                <span className="block text-red-700 xl:inline">DIJOMA</span>
                            </h2>
                            <p className="mx-auto mt-3 max-w-md text-lg text-stone-500 lg:text-stone-300 sm:text-xl md:mt-5 md:max-w-3xl">
                                Société familiale de publicité et de menuiserie créée en 2002.
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
            <div className="mx-auto mt-24 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
            {info.map(infos => (
                <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <div className="flex flex-1 flex-col justify-between bg-apple p-6">
                    <div className="flex-1">
                        <p className="text-sm font-medium text-red-700">
                            {infos.title}
                        </p>
                            <p className="text-xl font-semibold text-white">
                            {infos.description}
                            </p>
                    </div>
                </div>
            </div>
            ))} 
        </div>
        </div>
    </div>
    </>
  )
}