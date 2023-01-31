export const Map: React.FC<{}> = () => {
    return (
        <main className="lg:pb-32">
            <div className="relative mx-auto max-w-7xl">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                    <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center">
                    <a id="localisation" href=" "> </a>
                    <span className="bg-back px-3 text-lg font-medium text-stone-900">Localisation</span>
                </div>
            </div>
            <div className="mx-auto mt-20 max-w-7xl py-6 sm:px-6 lg:px-8">
                <div className="map-responsive">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2528.9977831735623!2d5.514895099999999!3d50.664301699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c0fba323853527%3A0x1e517ff3f4d70602!2sRue%20Kerstenne%2029%2C%204432%20Ans%2C%20Belgique!5e0!3m2!1sfr!2sfr!4v1672592145102!5m2!1sfr!2sfr" width="800" height="600" style={{"border":"0"}} loading="lazy" title="map"></iframe>
                </div>
            </div>
        </main>
    )
}