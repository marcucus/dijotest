
export const Info: React.FC<{}> = () => {
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

    <div className="relative mx-auto max-w-7xl lg:pb-64">
        <a id='informations' href=" "> </a><br/>
        <div className="mx-auto mt-32 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
            {info.map(infos => (
                <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <div className="flex flex-1 flex-col justify-between bg-white p-6">
                    <div className="flex-1">
                        <p className="text-sm font-medium text-red-700">
                            {infos.title}
                        </p>
                            <p className="text-xl font-semibold text-stone-900">
                            {infos.description}
                            </p>
                    </div>
                </div>
            </div>
            ))} 
        </div>
            <br/><br/>
        <div className="bg-apple rounded-lg">
            <div className="mx-auto max-w-7xl py-12 px-6 lg:flex lg:items-center lg:justify-between lg:py-24 lg:px-8">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                    <span className="block text-gray-50">Vous voulez jeter un oeil sur nos activités ?</span>
                    <span className="block text-red-700">Regardez toutes nos photos !</span>
                </h2>
                <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                    <div className="inline-flex rounded-md shadow">
                        <a href="/activite" className="inline-flex items-center justify-center rounded-md border border-transparent bg-red-700 px-5 py-3 text-base font-medium text-white hover:bg-red-800">Par ici !</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    )
}