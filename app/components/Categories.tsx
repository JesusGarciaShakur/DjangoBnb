import Image from "next/image";

const Categories = () => {
    return (
        <>
            <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12">
                <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                    <Image src="/icon_cabania.jpg" alt="Category - Cabaña" width={20} height={20} />
                    <span className="text-xs">Cabañas</span>
                </div>
                <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                    <Image src="/icon_cabania.jpg" alt="Category - Cabaña" width={20} height={20} />
                    <span className="text-xs">Villas</span>
                </div>
                <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                    <Image src="/icon_cabania.jpg" alt="Category - Cabaña" width={20} height={20} />
                    <span className="text-xs">Playas</span>
                </div>
                <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                    <Image src="/icon_cabania.jpg" alt="Category - Cabaña" width={20} height={20} />
                    <span className="text-xs">Habitaciones</span>
                </div>
            </div>
        </>
    );
};
export default Categories;