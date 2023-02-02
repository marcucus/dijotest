import { DevicePhoneMobileIcon, MapPinIcon, EnvelopeIcon, GlobeEuropeAfricaIcon } from "@heroicons/react/24/outline"
import { Map } from "./map"

export const Contact:React.FC<{}> = () => {
    return (
        <div className="relative mx-auto max-w-7xl lg:pt-16 lg:pb-32">
            <a id="contact" href=" "> </a>
            
            <br/><br/>
                <section className="overflow-hidden rounded-lg shadow-lg">
                    <div className="bg-white pb-24 sm:pb-32">
                    <Map></Map>
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                            <h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
                                Comment nous contacter ? 
                            </h2>
                            <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2">
                                <div key="Numéros de contact">
                                    <dt className="text-base font-semibold leading-7 text-stone-900">
                                    <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-red-700">
                                        <DevicePhoneMobileIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                    </div>
                                    Numéros de contact
                                    </dt>
                                    <dd className="mt-1 text-base leading-7 text-stone-600">GSM : 0497/400.491 <br/> Téléphone : 04/239.19.02
                                    </dd>
                                </div>
                                <div key="Coordonnées">
                                    <dt className="text-base font-semibold leading-7 text-stone-900">
                                    <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-red-700">
                                        <MapPinIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                    </div>
                                    Adresse
                                    </dt>
                                    <dd className="mt-1 text-base leading-7 text-stone-600">29 rue KERSTENNE,  <br/> 4430 ANS (Belgique)
                                    </dd>
                                </div>
                                <div key="Coordonnées">
                                    <dt className="text-base font-semibold leading-7 text-stone-900">
                                    <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-red-700">
                                        <EnvelopeIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                    </div>
                                    Courriel
                                    </dt>
                                    <dd className="mt-1 text-base leading-7 text-stone-600">
                                        <p className="flex-auto font-bold">
                                            <a href="mailto:info@dijoma.be" className="text-red-700 hover:text-red-800">info@dijoma.be</a>
                                        </p>
                                    </dd>
                                </div>
                                <div key="RS">
                                    <dt className="text-base font-semibold leading-7 text-stone-900">
                                    <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-red-700">
                                        <GlobeEuropeAfricaIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                    </div>
                                    Réseaux sociaux
                                    </dt>
                                    <dd className="mt-1 text-base leading-7 text-stone-600">
                                    
                                        <a href="https://www.facebook.com/people/Dijoma-SA/100063531099598/?paipv=0&eav=AfaSJuO9g5IHiS4DFmEB0VsFFRI7JrAhl6rS3lQPmt-saK26Y0mj6qLefrQj1omuZbg" className="text-blue-700 hover:text-blue-900 flex">
                                            <span className="sr-only">Facebook</span>
                                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />
                                            </svg> Facebook
                                        </a>

                                        <a href="https://www.instagram.com/dijoma_sa/" className="text-pink-700 hover:text-pink-900 flex">
                                            <span className="sr-only">Instagram</span>
                                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" />
                                            </svg> Instagram 
                                        </a>
                                    </dd>
                                </div>
                            </dl>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
    )
    }