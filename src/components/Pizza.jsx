const Image = {
    height: "9rem",
};

const card = {
    display: "flex",
    gap: "1rem",
    padding: "2rem",
};

const main = {
    display: "flex",
    gap: "2rem",
    flexDirection: "column",
};

const count = {
    marginTop: "auto",
};

const detailsStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
};

function Pizza() {
    return (
        <div style={main}>
            <div style={card}>
                <div>
                    <img style={Image} src="./pizzas/focaccia.jpg" alt="" />
                </div>
                <div style={detailsStyle}>
                    <p>PizzaName</p>
                    <p>ing01,ing02,ing03</p>
                    <p style={count}>0</p>
                </div>
            </div>
        </div>
    );
}
export default Pizza;
