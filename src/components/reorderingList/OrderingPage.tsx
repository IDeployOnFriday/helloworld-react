

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

    return (
        <div style={{ padding: '16px' }}>
            <div
                style={{
                    display: 'flex',
                    gap: '12px',
                    justifyContent: 'center',
                    marginBottom: '16px',
                }}
            >
                <button
                    style={{
                        backgroundColor: '#8da4ef',
                        color: '#111',
                        padding: '10px 14px',
                        border: '1px solid #d1d5db',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontWeight: 600,
                        boxShadow: '0 1px 2px rgba(0,0,0,0.06)',
                        transition: 'transform 120ms ease, box-shadow 120ms ease',
                    }}
                    onClick={() => console.log('move up')}
                    aria-label="Move item up"
                    title="Move up"
                >
                    Move up ↑
                </button>
                <button
                    style={{
                        backgroundColor: '#8da4ef',
                        color: '#111',
                        padding: '10px 14px',
                        border: '1px solid #d1d5db',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontWeight: 600,
                        boxShadow: '0 1px 2px rgba(0,0,0,0.06)',
                        transition: 'transform 120ms ease, box-shadow 120ms ease',
                    }}
                    onClick={() => console.log('move down')}
                    aria-label="Move item down"
                    title="Move down"
                >
                    Move down ↓
                </button>
            </div>

            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
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
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}>
                            <span>Type: {item.type}</span>
                            <span>Orientation: {item.orientation}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}