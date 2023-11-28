function ListingsForm({addListing}){
    function onSubmit(e){
        e.preventDefault()
        const newListing = {
            description: e.target.description.value,
            image: e.target.image.value,
            location: e.target.location.value
        }
        addListing(newListing)
    }
    return(
        <form onSubmit={(e)=>onSubmit(e)}>
            <input name="description" placeholder="description"></input>
            <input name="image" placeholder="image"></input>
            <input name="location" placeholder="location"></input>
            <button type='submit'>Submit</button>
        </form>
    )
}
export default ListingsForm