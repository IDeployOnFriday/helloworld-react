import * as React from "react";


export function SearchForm(){
    const[searchTerm, setSearchTerm] = React.useState('cats!');
    return (
        <>
            <h1>hello</h1>
            <form>
                <label htmlFor="search-input">
                    Search:
                </label>
                <input
                    type="text"
                    id="search-input"
                    value={searchTerm}
                    onChange={(event) => {
                        setSearchTerm(event.target.value);
                    }}
                    />
            </form>
            <p>
                search Term : {searchTerm}

            </p>
        </>
    )
}