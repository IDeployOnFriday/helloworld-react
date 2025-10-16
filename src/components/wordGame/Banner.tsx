
function Banner({status, children}: {status : string, children: any }){
    return (
        <div className={`${status} banner`}>
            {children}
        </div>
    );
}

export default Banner;