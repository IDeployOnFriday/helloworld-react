import React from 'react';

function SignupForm() {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [city, setCity] = React.useState('');
    const [postalCode, setPostalCode] = React.useState('');

    React.useEffect(() => {
        console.log({email});
    }, [email]);

    React.useEffect(() => {
        console.log({name});
    }, [name]);

    return (
        <form>
            <Field
                id="name"
                label="Preferred Name"
                grow={1}
                value={name}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setName(event.target.value);
                }}
            />
            <Field
                id="email"
                type="email"
                label="Email Address"
                grow={1}
                value={email}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setEmail(event.target.value);
                }}
            />
            <div className="row">
                <Field
                    id="city"
                    label="City"
                    grow={2}
                    value={city}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setCity(event.target.value);
                    }}
                />
                <Field
                    id="postal-code"
                    label="Postal Code"
                    grow={1}
                    value={postalCode}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setPostalCode(event.target.value);
                    }}
                />
            </div>
            <button>Sign up</button>
        </form>
    );
}

type FieldProps = {
    id: string;
    label: string;
    type?: string;
    grow?: number;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function Field({ id, label, type = 'text', grow, value, onChange }: FieldProps) {
    // React's CSSProperties doesn't know about custom CSS variables like `--grow`.
    // Cast the style object to allow the CSS variable while keeping type safety for other props.
    const style = { ['--grow' as any]: grow } as React.CSSProperties;

    return (
        <div className="field" style={style}>
            <label htmlFor={id}>{label}</label>
            <input type={type} id={id} value={value} onChange={onChange} />
        </div>
    );
}

export default SignupForm;