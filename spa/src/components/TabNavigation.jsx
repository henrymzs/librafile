function TabNavigation({ activeOption, setActiveOption }) {
    const tabs = [
        { id: 'acervo', label: 'Acervo' },
        { id: 'adicionar', label: 'Adicionar' },
        { id: 'buscar', label: 'Buscar' },
    ];

    return (
        <div className="switch-options">
            <div className="options">
                {tabs.map(tab => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveOption(tab.id)}
                        className={activeOption === tab.id ? 'active' : ''}
                    >{tab.label}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default TabNavigation;