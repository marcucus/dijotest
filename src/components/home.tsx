import logo from "../assets/images/image1.jpeg";

export const Home: React.FC<{}> = () => {
return (
<> 
    <div className="relative bg-white">
        <main className="lg:relative lg:mr-20">
            <div className="mx-auto w-full max-w-7xl pt-16 pb-20 text-center lg:py-48 lg:text-left">
                <div className="px-4 sm:px-8 lg:w-1/2 xl:pr-16">
                    <h1 className="text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                        <span className="block xl:inline">Bienvenue chez </span>
                        <span className="block text-red-700 xl:inline">DIJOMA</span>
                    </h1>
                        <p className="mx-auto mt-3 max-w-md text-lg text-stone-500 sm:text-xl md:mt-5 md:max-w-3xl">Société familiale de publicité et de menuiserie créée en 1996.
                            Agréée Région Wallonne et affiliée CSTC.</p>
                    <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                        <div className="rounded-md shadow">
                            <a href="#pres" className="flex w-full items-center justify-center rounded-md border border-transparent bg-red-700 px-8 py-3 text-base font-medium text-white hover:bg-red-800 md:py-4 md:px-10 md:text-lg">En savoir plus</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2 mt-10 md:mt-20 sm:mt-20">
                <div className="site-responsive">
                    <img className="absolute inset-0 h-auto w-auto object-cover" src={logo} alt="test"/>
                </div>
            </div>
        </main>
    </div>
    <div className="relative sm:pt-60 bg-appleground px-4 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
    <div className="absolute inset-0">
        <div className="h-1/3 bg-white sm:h-2/3"></div>
    </div>
    <div className="relative mx-auto max-w-7xl">
        <div className="relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center">
                <a id='informations'></a>
                <span className="bg-white px-3 text-lg font-medium text-stone-900">Plus d'informations</span>
            </div>
        </div>
        <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
            <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <div className="flex flex-1 flex-col justify-between bg-white p-6">
                    <div className="flex-1">
                        <p className="text-sm font-medium text-red-700">
                            Information
                        </p>
                            <p className="text-xl font-semibold text-stone-900">
                            Notre société réalise la création, la confection et la pose de lettrages, enseignes et slogans publicitaires.
                            Nous nous occupons de votre visibilité.</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <div className="flex flex-1 flex-col justify-between bg-white p-6">
                    <div className="flex-1">
                        <p className="text-sm font-medium text-red-700">
                            Information
                        </p>
                            <p className="text-xl font-semibold text-stone-900">
                            Spécialisée dans le grand format et le placement à plusieurs mètres de hauteur, notre personnel dévoué et qualifié réalisé avec le patron les poses les plus délicates, ou difficiles d'accès.</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <div className="flex flex-1 flex-col justify-between bg-white p-6">
                    <div className="flex-1">
                        <p className="text-sm font-medium text-red-700">
                           Information
                        </p>
                        <p className="text-xl font-semibold text-stone-900">
                            Pour vos cadeaux d'entreprise ou vos "coups de pub", une gamme d'objet divers avec votre logo ou slogan vous est proposée.
                        </p>
                    </div>
                </div>
            </div>
        </div><br/><br/>
        <div className="bg-apple rounded-lg">
            <div className="mx-auto max-w-7xl py-12 px-6 lg:flex lg:items-center lg:justify-between lg:py-24 lg:px-8">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                    <span className="block text-gray-50">Vous voulez jeter un oeil sur nos activités ?</span>
                    <span className="block text-red-700">Regardez toutes nos photos !</span>
                </h2>
                <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                    <div className="inline-flex rounded-md shadow">
                        <a href="/" className="inline-flex items-center justify-center rounded-md border border-transparent bg-red-700 px-5 py-3 text-base font-medium text-white hover:bg-red-800">Par ici !</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
<br/><br/><br/><br/>
    <main>
        <div className="relative mx-auto max-w-7xl">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center">
                <a id="localisation"></a>
                <span className="bg-white px-3 text-lg font-medium text-stone-900">Coordonnées</span>
            </div>
        </div>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <div className="map-responsive">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2528.9977831735623!2d5.514895099999999!3d50.664301699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c0fba323853527%3A0x1e517ff3f4d70602!2sRue%20Kerstenne%2029%2C%204432%20Ans%2C%20Belgique!5e0!3m2!1sfr!2sfr!4v1672592145102!5m2!1sfr!2sfr" width="800" height="600" style={{"border":"0"}} loading="lazy" title="map"></iframe>
            </div>
        </div>
    </main>

    <div className="relative bg-white px-4 pt-1 pb-20 sm:px-6 lg:px-8 lg:pt-8 lg:pb-28">
        <div className="relative mx-auto max-w-7xl">
            <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-2">
                <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                    <div className="flex flex-1 flex-col justify-between bg-white p-6">
                        <div className="flex-1">
                            <p className="text-sm font-medium text-red-700">
                                Contact
                            </p>
                            <p className="text-xl font-semibold text-stone-900">
                                gsm : 0497/400.491 <br/> tel : 04/239.19.02</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                    <div className="flex flex-1 flex-col justify-between bg-white p-6">
                        <div className="flex-1">
                            <p className="text-sm font-medium text-red-700">
                                Adresse
                            </p>
                            <p className="text-xl font-semibold text-stone-900">
                                29 rue KERSTENNE, 4430 ANS (Belgique)
                                <br/>E-mail : <a href="mailto:info@dijoma.be" className="text-red-700 hover:text-red-800">info@dijoma.be</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="relative mx-auto max-w-7xl pt-16 lg:pt-16">
            <div className="relative">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                    <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center">
                    <a id="avis"></a>
                    <span className="bg-white px-3 text-lg font-medium text-stone-900">Avis</span>
                </div>
            </div><br/><br/>
                <section className="overflow-hidden bg-apple rounded-lg"><br/><br/>
                    <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-12 lg:px-8 lg:py-20">
                        <div className="relative lg:flex lg:items-center">
                            <div className="relative lg:ml-10">
                                <svg className="absolute top-0 left-0 h-36 w-36 -translate-x-8 -translate-y-24 transform text-red-600 opacity-50" stroke="currentColor" fill="none" viewBox="0 0 144 144" aria-hidden="true">
                                    <path stroke-width="2" d="M41.485 15C17.753 31.753 1 59.208 1 89.455c0 24.664 14.891 39.09 32.109 39.09 16.287 0 28.386-13.03 28.386-28.387 0-15.356-10.703-26.524-24.663-26.524-2.792 0-6.515.465-7.446.93 2.327-15.821 17.218-34.435 32.11-43.742L41.485 15zm80.04 0c-23.268 16.753-40.02 44.208-40.02 74.455 0 24.664 14.891 39.09 32.109 39.09 15.822 0 28.386-13.03 28.386-28.387 0-15.356-11.168-26.524-25.129-26.524-2.792 0-6.049.465-6.98.93 2.327-15.821 16.753-34.435 31.644-43.742L121.525 15z" />
                                </svg>
                                <blockquote className="relative">
                                    <div className="text-2xl font-medium leading-9 text-gray-50">
                                        <p>Que vous soyez accueilli par le patron, son fils Dimitri, ou la secrétaire, vous êtes toujours bien reçu, bien conseillé,
                                            le patron fera son possible pour vous aider le plus rapidement possible. Très belle équipe, travail soigné et sérieux. À recommander.</p>
                                    </div>
                                    <footer className="mt-8">
                                        <div className="flex">
                                            <div className="ml-4 lg:ml-0">
                                                <div className="flex items-center">
                                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                                </div>
                                                <div className="text-base font-medium text-gray-50">Colette D.<span className="text-stone-500"> Il y a un an</span></div>
                                            </div>
                                        </div>
                                    </footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>

</>
  )
}