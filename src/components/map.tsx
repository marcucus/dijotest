export const Map: React.FC<{}> = () => {
    return (
        
        <main className="bg-white"><br/>
            <div className="mx-auto max-w-7xl py-8 sm:px-6 lg:px-8">
                <div className="map-responsive">
                    <iframe name="carteDijoma" className="rounded-lg" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2528.9977831735623!2d5.514895099999999!3d50.664301699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c0fba323853527%3A0x1e517ff3f4d70602!2sRue%20Kerstenne%2029%2C%204432%20Ans%2C%20Belgique!5e0!3m2!1sfr!2sfr!4v1672592145102!5m2!1sfr!2sfr" width="800" height="600" style={{"border":"0"}} loading="lazy" title="map"></iframe>
                </div>
            </div>
        </main>
    )
}