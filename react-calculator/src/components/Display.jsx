function Display({previous, operation, current}){
    return(
        <div className="displa">
            <div className="previous">
                {previous != null ? `${previous} ${operation ?? ""} `: ""}
            </div>
            <div className="current">
                {current}
            </div>
        </div>
    )
}

export default Display;