
export default function Child({list}) {

    return (
        <div className="bd">
            <ul>
                {
                    list.map((item) => {
                        return <li key={item}>{item}</li>
                    })
                }
            </ul>
        </div>
    )
}