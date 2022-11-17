function Filter(props) {
    return (
            <form action="" onChange={ (e) => { props.getType(e.target.value) }}>
                <label >
                    <input name="group1" type="radio" value="all"/>
                    <span>All</span>
                </label>
                <label className="radio">
                    <input name="group1" type="radio" value="movie" />
                    <span>Movies</span>
                </label>
                <label  className="radio">
                    <input name="group1" type="radio" value="series" />
                    <span>Game</span>
                </label>
            </form>
    )

}

export default Filter;