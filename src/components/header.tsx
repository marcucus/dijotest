import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const nav = [
    {id:1, name:'Accueil', href:'/'},
    {id:2, name:'Réalisations', href:'/activite'},
    {id:3, name:'Informations', href:'/#informations'},
    {id:4, name:'Localisation', href:'/#localisation'},
    {id:5, name:'Contact', href:'/#contact'},
    {id:6, name:'Avis', href:'/#avis'}
];

export const Header: React.FC<{}> = () => {
    return (
        <>

    <Disclosure as="nav" className="bg-apple z-50 fixed w-full shadow-lg">
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
                    
                <div className="hidden lg:ml-6 lg:block">
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
              <div className="-mr-2 flex lg:hidden">
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

          <Disclosure.Panel className="lg:hidden mr-10">
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

    {/*<Popover className="relative bg-apple">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="/">
                <div className="text-zinc-300 text-base font-bold" style={{fontFamily: 'Futura,Trebuchet MS,Arial,sans-serif'}}>DIJOMA</div>
            </a>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-10 md:flex">
          {nav.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-zinc-300 hover:bg-zinc-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                        {item.name}
                    </a>
                  ))}
          </Popover.Group>
          
          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
      </Transition>
          </Popover>*/}
</>
    )}