import {useState} from "react";

export function OrderingPage() {


    const items = [
        {
            type: 'wifi',
            title: 'wifi 1',
            orientation: 'LANDSCAPE',
        },
        {
            type: 'analyser',
            title: 'ANALYSER',
            orientation: 'PORTRAIT',
        },
        {
            type: 'text',
            title: 'NOTES',
            orientation: 'PORTRAIT',
        }
    ];

    return OrderIt(items)

}


export function OrderIt(itemss: any[]) {

    const [items, setItems] = useState(itemss)

    function moveUp(item: any, index: number) {
        if (index === 0) return; // Can't move up if already at the top

        const newPosition = index - 1;

        const newItems = [...items];
        newItems.splice(index, 1);
        newItems.splice(newPosition, 0, item);

        setItems(newItems);
    }

    function moveDown(item: any, index: number) {
        if (index === items.length - 1) return; // Can't move down if already at the Bottom

        const newPosition = index + 1;

        const newItems = [...items];
        newItems.splice(index, 1);
        newItems.splice(newPosition, 0, item);

        setItems(newItems);
    }



    return (
        <div style={{ padding: '16px' }}>

            <div style={{ display: 'flex',  gap: '8px', flexWrap: 'wrap' }}>
                {items.map((item, index) => (
                    <div
                        key={index}
                        style={{
                            border: 'medium solid var(--dark-primary-color)',
                            borderRadius: '5px',
                            width: '220px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '6px',
                            padding: '8px',
                            backgroundColor: '#00924ba4'
                        }}
                    >
                        <div style={{ fontWeight: 600 }}>{item.title}</div>
                        <div style={{ display: 'flex'}}>
                            <span>Type: {item.type}</span>
                            <span>Orientation: {item.orientation}</span>
                        </div>
                        <div>
                            <button
                                style={{
                                    backgroundColor: '#8da4ef',
                                    color: '#111',
                                    width: '25px',
                                    height: '25px',

                                }}
                                onClick={() => moveUp(item, index)}
                                aria-label="Move item up"
                                title="Move up"
                            >
                                ↑
                            </button>
                            <button
                                style={{
                                    backgroundColor: '#8da4ef',
                                    color: '#111',
                                    width: '25px',
                                    height: '25px',
                                    marginLeft: '10px'

                                }}
                                onClick={() => moveDown(item, index)}
                                aria-label="Move item down"
                                title="Move down"
                            >
                                ↓
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}