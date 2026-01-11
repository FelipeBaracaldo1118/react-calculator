function Display({previous, operation, current}){
    return(
        <div className="display">
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