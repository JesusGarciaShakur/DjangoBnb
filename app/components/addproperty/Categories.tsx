import Image from "next/image";

interface CategoriesProps {
    dataCategory: string;
    setCategory: (category: string) => void;
}

const Categories: React.FC<CategoriesProps> = ({
    dataCategory,
    setCategory
}) => {
    return (
        <>
            <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12">
                <div 
                onClick={() => setCategory('Cabañas')}
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == 'Cabañas' ? 'border-gray-800' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100'`}>
                    <Image src="/icon_cabania.jpg" alt="Category - Cabaña" width={20} height={20} />
                    <span className="text-xs">Cabañas</span>
                </div>
                <div 
                onClick={() => setCategory('Villas')}
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == 'Villas' ? 'border-gray-800' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100'`}>
                    <Image src="/icon_cabania.jpg" alt="Category - Villas" width={20} height={20} />
                    <span className="text-xs">Villas</span>
                </div>
                <div 
                onClick={() => setCategory('Playas')}
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == 'Playas' ? 'border-gray-800' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100'`}>	
                    <Image src="/icon_cabania.jpg" alt="Category - Playas" width={20} height={20} />
                    <span className="text-xs">Playas</span>
                </div>
                <div 
                onClick={() => setCategory('Habitaciones')}
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == 'Habitaciones' ? 'border-gray-800' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100'`}>	
                    <Image src="/icon_cabania.jpg" alt="Category - Habitaciones" width={20} height={20} />
                    <span className="text-xs">Habitaciones</span>
                </div>
            </div>
        </>
    )
}

export default Categories;