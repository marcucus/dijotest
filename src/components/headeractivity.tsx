import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const nav = [
    {id:1, name:'Accueil', href:'/'},
    {id:2, name:'Activités', href:'/activite'},
    {id:3, name:'Affichages', href:'/activite/affichage'},
    {id:4, name:'Menuiserie', href:'/activite/menuiserie'},
    {id:5, name:'Voitures', href:'/activite/voiture'},
]

export const Header: React.FC<{}> = () => {
    return (
        <>
    <Disclosure as="nav" className="bg-apple">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <a href="/">
                    <div className="text-zinc-300 text-base font-bold" style={{fontFamily: 'Futura,Trebuchet MS,Arial,sans-serif'}}>DIJOMA</div>
                  </a>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="space-x-9 items-center">
                      {nav.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="text-zinc-300 hover:bg-zinc-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        >
                            {item.name}
                        </a>
                      ))}
                  </div>
                </div>
              </div>
              <div className="-mr-2 flex sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-zinc-300 hover:bg-zinc-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden mr-10">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {nav.map((item) => (
                <Disclosure.Button
                  as="a"
                  href={item.href}
                  className="block rounded-md text-zinc-300 hover:bg-zinc-700 hover:text-white px-3 py-2 text-sm font-medium"
                  >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
</>
    )}