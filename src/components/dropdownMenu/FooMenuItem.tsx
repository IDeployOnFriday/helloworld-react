import * as ContextMenu from "@radix-ui/react-context-menu";
import { useState } from "react";



export function FooMenuItem({title}: { title: string }) {

    const [search, setSearch] = useState('');

    const items = ['A', 'BBB', 'CCC', 'DDD', 'EEE',
        'FFF'
        ,'----------------------------- AA ------------------------------------'
        ,'-------------- AAA -----------------------'
        ,'--------- AAAA-------',
        'Ab', 'BcBB', 'cCCC', 'cDDD', 'cEEE',
        'Db', 'dcBB', 'dCCC', 'dDDD', 'dEEE'
    ];
    const filtered = items.filter(item =>
        item.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <ContextMenu.Sub>
            <ContextMenu.SubTrigger className="ContextMenuSubTrigger">{title}</ContextMenu.SubTrigger>
            <ContextMenu.Portal>
                <ContextMenu.SubContent className="ContextMenuSubContent" style={{ minWidth: '200px' ,maxHeight: '400px' ,overflowY: 'auto'}}>
                    <div style={{ padding: '4px' }}>
                        <input
                            type="text"
                            placeholder="Search..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            style={{
                                width: '100%',
                                padding: '6px 8px',
                                border: '1px solid #ccc',
                                borderRadius: '4px',
                                marginBottom: '4px'
                            }}
                            onClick={(e) => e.stopPropagation()}
                            onKeyDown={(e) => e.stopPropagation()}
                        />
                    </div>
                    {filtered.map(item => (
                        <ContextMenu.Item className="ContextMenuItem" key={item}>
                            {item}
                        </ContextMenu.Item>
                    ))}
                    {filtered.length === 0 && (
                        <div style={{ padding: '8px', color: '#999' }}>
                            No results
                        </div>
                    )}
                </ContextMenu.SubContent>
            </ContextMenu.Portal>
        </ContextMenu.Sub>
    );
}





