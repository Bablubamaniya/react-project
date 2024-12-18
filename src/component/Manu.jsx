import Pizza from "./Pizza";

const menuBoxStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr"
}

function Menu() {
    return (
        <div className="manu">
            <h2>Our menu</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                incidunt molestiae suscipit magni debitis hic repudiandae
                nostrum pariatur voluptates? At sequi id culpa, provident quidem
                nemo nobis expedita placeat aut.
            </p>
            <div style={menuBoxStyle}>
                <Pizza />
                <Pizza />
                <Pizza />
                <Pizza />
                <Pizza />
                <Pizza />
            </div>
        </div>
    );
}

export default Menu;
