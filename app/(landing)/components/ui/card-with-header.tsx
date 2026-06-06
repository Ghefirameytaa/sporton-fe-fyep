type TCardWihHeaderProps = {
    title: string,
    children: React.ReactNode;
}

const CardWithHeader = ({title, children}:TCardWihHeaderProps) => {
    return (
        <div className="bg-white">
            <div className="p-5 py-4 border-b border-gray-200">
                <h2 className="text-lg font-bold">{title}</h2>
            </div>
            {children}
        </div>
        
    )
}

export default CardWithHeader;