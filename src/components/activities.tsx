import { useState } from 'react';
import { Affichage } from './affichage';
import { Covering } from './cov';
import { Menuiserie } from './menuiserie';
import { Vehicules } from './voiture';

export const Activities: React.FC<{}> = () => {
  const [category, setCategory] = useState('1');

  function handleClick(e:any) {
    setCategory(e);
  }

  const act = [
    {
      id:'1', 
      name:'Affichage', 
      description:'L\'affichage publicitaire est un excellent moyen pour les entreprises de tous secteurs de diffuser un message marketing à leur clientèle.',
    },
    {
      id:'2', 
      name:'Menuiserie', 
      href:'/activite/menuiserie', 
      description:'L\'ensemble des techniques mises en œuvre pour construire des ouvrages de taille relativement petite par la mise en forme et l\'assemblage de menues pièces de bois pour vous.',
    },
    {
      id:'3', 
      name:'Véhicules', 
      href:'/activite/voiture', 
      description:'Nous créons, imprimons et posons vos marquages sur tout vos véhicules',
    },
]

return (
<>
<div className="relative py-16">
  <div className="absolute inset-x-0 top-0 hidden h-1/2 lg:block" aria-hidden="true" />
    <div className="mx-auto max-w-7xl bg-white lg:bg-transparent lg:px-8">
      <nav className="isolate flex divide-x divide-gray-200 rounded-lg shadow lg:w-5/6 mx-auto" aria-label="Tabs">
        {act.map(actt => ( 
          <button onClick={() => handleClick(actt.id)} aria-current="page" className={
            actt.id==='1' ? "text-gray-900 rounded-l-lg group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-6 text-sm font-medium text-center hover:bg-gray-50 focus:z-10" : 
            actt.id==='2' ? "text-gray-900 group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-6 text-sm font-medium text-center hover:bg-gray-50 focus:z-10" : 
            actt.id==='3' ? "text-gray-900 rounded-r-lg group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-6 text-sm font-medium text-center hover:bg-gray-50 focus:z-10" : ""}>
            <span>{actt.name}</span>
            <span aria-hidden="true" className={category===actt.id ? 'bg-rose-800 absolute inset-x-0 bottom-0 h-0.5' : ''}></span>
          </button>
        ))}
      </nav>
    </div>
</div>

<div className=" bg-white rounded-lg mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div><br/>
     {category==='0' ? 
        <h2 className="text-xl font-bold tracking-tight text-red-800 sm:text-4xl md:text-5xl lg:text-xl xl:text-2xl">
          Pas de catégorie sélectionée !
        </h2> : 
      category==='1' ? 
        <>
          <h2 className="text-xl font-bold tracking-tight text-red-800 sm:text-4xl md:text-5xl lg:text-xl xl:text-2xl">
              Affichage
          </h2><br/>
          <div className='text-stone-900 text-xl h-auto w-auto'>
            {act[0].description}
          </div>
        </> : 
      category==='2' ? 
        <>
          <h2 className="text-xl font-bold tracking-tight text-red-800 sm:text-4xl md:text-5xl lg:text-xl xl:text-2xl">
            Menuiserie
          </h2><br/>
          <div className='text-stone-900 text-xl'>
            {act[1].description}
          </div>
        </> : 
      category==='3' ? 
        <>
          <h2 className="text-xl font-bold tracking-tight text-red-800 sm:text-4xl md:text-5xl lg:text-xl xl:text-2xl">
            Flocage Véhicule
          </h2><br/>
          <div className='text-stone-900 text-xl'>
            {act[2].description}
          </div>
        </> : ''
      }
    </div><br/>
    <div className=''>
    {category==='0' ? 
        <div>Choisissez une catégorie en appuyant sur les boutons correspondant</div> : 
      category==='1' ? 
        <Affichage></Affichage> : 
      category==='2' ? 
        <Menuiserie></Menuiserie> : 
      category==='3' ? 
        <><Vehicules></Vehicules>
        <h2 className="text-xl font-bold tracking-tight text-red-800 sm:text-4xl md:text-5xl lg:text-xl xl:text-2xl">
          Covering Véhicule
        </h2><br/>
        <div className='text-stone-900 text-xl'>
        Le covering protège la peinture des intempéries et des UV. Cela permet de donner un coup de neuf à son véhicule. Le film adhésif s'enlève facilement.
        </div>
        <Covering></Covering></> : ''
      }
    </div>
</div>
<br></br>
</>
  )
}