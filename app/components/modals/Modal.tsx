'use client';

import { useCallback, useEffect, useState } from "react";

interface ModalProps {
    label: string;
    close: () => void;
    content: React.ReactElement;
    isOpen: boolean;
}

const Modal: React.FC<ModalProps> = ({
    label,
    content,
    isOpen,
    close
}) => {
    const [showModal, setShowModal] = useState(isOpen);

    useEffect(() => {
        setShowModal(isOpen);
    }, [isOpen]);

    const handleClose = useCallback(() => {
        setShowModal(false);
        setTimeout(() => {
            close();
        }, 300);
    }, [close]);

    if (!isOpen) {
        return null;
    }

    return (
        <div className="flex items-center justify-center fixed inset-0 z-50 bg-black/60 p-4">
            <div className="relative w-full max-w-[700px] max-h-[90vh] bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
                <header className="h-[60px] flex items-center p-6 border-b justify-center relative">
                    <button
                        onClick={handleClose}
                        className="p-3 absolute left-3 hover:bg-gray-300 rounded-full cursor-pointer"
                    >
                        <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <h2 className="text-lg">{label}</h2>
                </header>

                {/* Contenedor con scroll si el contenido es grande */}
                <section className="p-6 overflow-auto flex-1">
                    {content}
                </section>
            </div>
        </div>
    );
};

export default Modal;
