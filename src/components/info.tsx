
export const Info: React.FC<{}> = () => {

return (

    <div className="relative mx-auto max-w-7xl lg:pb-32">
        <div className="mx-auto mt-32 grid max-w-lg lg:max-w-none">
                <div className="overflow-hidden rounded-lg shadow-lg">
                <div className="justify-between bg-white p-6">
                    <div>
                        <p className="text-sm font-medium text-red-700">
                            Plus d'information
                        </p>
                            <p className="text-xl font-semibold text-stone-900">
                            Nous réalisons pour vos enseignes, affichages publicitaires, impression sur bâches ou tout autre type de support de la création graphique jusqu'à la pose sur site.<br/>
                            Le lettrage sur véhicule ou vitrine est parfait pour votre visibilité, rapide a mettre en oeuvre, vous serez directement remarqués par vos clients et futurs clients.
                            </p>
                    </div>
                </div>
            </div> 
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