

export function OrderingPage() {

    return (
        <div
            style={{
                display: 'flex',
                gap: '12px',
                justifyContent: 'center',
                padding: '16px',
            }}
        >
            <button
                style={{
                    backgroundColor: 'lightgray',
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
                    backgroundColor: 'lightgray',
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
    )
}