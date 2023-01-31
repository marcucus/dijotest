import a from '../assets/images/affichage/14.jpg';
import m from '../assets/images/menuiserie/8.jpg';
import v from '../assets/images/voitures/IMG-20230130-WA0037.jpg';

export const Activities: React.FC<{}> = () => {

  const act = [
    {
      id:1, 
      name:'Affichages', 
      href:'/activite/affichage', 
      description:'L\'affichage publicitaire est un excellent moyen pour les entreprises de tous secteurs de diffuser un message marketing à leur clientèle.',
      src: a
    },
    {
      id:2, 
      name:'Menuiserie', 
      href:'/activite/menuiserie', 
      description:'L\'ensemble des techniques mises en œuvre pour construire des ouvrages de taille relativement petite par la mise en forme et l\'assemblage de menues pièces de bois pour vous.',
      src: m,
    },
    {
      id:3, 
      name:'Véhicules', 
      href:'/activite/voiture', 
      description:'Le covering protège la peinture des intempéries et des UV. Cela permet de donner un coup de neuf à son véhicule. Le film adhésif s\'enlève facilement.',
      src:v,
    },
]

return (
<>
<div className="mx-auto mt-12 grid max-w-md gap-8 px-6 sm:max-w-lg lg:max-w-7xl lg:grid-cols-3 lg:px-8">
  {act.map(photo => (
    <div className="flex flex-col overflow-hidden rounded-lg shadow-lg bg-apple">
      <a href={photo.href} className="focus:outline-none">
          <div className="flex-shrink-0">
              <img className="h-48 w-full object-cover" src={photo.src} alt=""/>
          </div>
          <div className="flex flex-col overflow-hidden rounded-lg">
              <div className="flex flex-1 flex-col justify-between p-6">
                  <div className="flex-1">
                      <p className="text-sm font-medium text-red-700 italic">
                          { photo.name }
                      </p>
                          <p className="text-xl font-semibold text-gray-100">{ photo.description }</p>
                          <p className="mt-3 text-base text-gray-100"></p>
                  </div>
              </div>
          </div>
      </a>
    </div>
  ))}
</div>
</>
  )
}