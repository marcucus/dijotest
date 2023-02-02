import { useState } from 'react';
import { Affichage } from './affichage';
import { Menuiserie } from './menuiserie';
import { Vehicules } from './voiture';

export const Activities: React.FC<{}> = () => {
  const [category, setCategory] = useState('0');

  function handleClick(e:any) {
    setCategory(e);
  }

  const act = [
    {
      id:'1', 
      name:'Affichages', 
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
      description:'Le covering protège la peinture des intempéries et des UV. Cela permet de donner un coup de neuf à son véhicule. Le film adhésif s\'enlève facilement.',
    },
]

return (
<>
<div className="relative py-16">
  <div className="absolute inset-x-0 top-0 hidden h-1/2 lg:block" aria-hidden="true" />
    <div className="mx-auto max-w-7xl bg-white lg:bg-transparent lg:px-8">
      <h1>Cliquez sur les catégories pour voir les photos correspondantes ! </h1>
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
    <div className="max-w-3xl">
     <h1 className=''>
      
     </h1>
    </div>
    <div className=''>

    </div>
</div>

<div className="mx-auto mt-12 grid max-w-md gap-8 px-6 sm:max-w-lg lg:max-w-7xl lg:grid-cols-3 lg:px-8">

</div>

{category==='0' ? 
      <div>test</div> : 
      category==='1' ? 
        <Affichage></Affichage> : 
      category==='2' ? 
       <Menuiserie></Menuiserie> : 
      category==='3' ? 
        <Vehicules></Vehicules> : ''}
</>
  )
}