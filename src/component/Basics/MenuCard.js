import React from 'react'

const MenuCard = ({menuData}) => {
    return (
        <>
        <section className="main-card--cointainer">
            {menuData.map((curElem) => {
                return (
                    <>
                    <div className="car-container" key={curElem.id}>
                <div className="card">
                    <div className="card-body">
                        <span className="card- card-circle subtle">1</span>
                        <span className="card-author subtle">Breakfast</span>
                        <h2 className="card-title">{curElem.name}</h2>
                        <span className="card-description subtle">
                        {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et velit leo. Vestibulum at dictum justo. Nunc eu nibh eu felis sagittis vestibulum quis et lectus. Curabitur feugiat egestas ullamcorper. Nam aliquet sem non finibus convallis. Praesent in nunc lacus. Duis enim purus, dictum at dignissim sit amet, sodales non mi. Ut lobortis, urna et bibendum scelerisque, velit ex porta libero, sit amet congue odio nunc non turpis. Aenean nec diam venenatis, vestibulum orci quis, fringilla ante. */}
                        {curElem.description}
                        </span>
                        <div className="card-read">Read</div>
                    </div>
                    <img src={curElem.image} alt="images" className="card-media" />

                    <span className="card-tag subtle">Order Now</span>
                </div>
            </div>
            </>
                )
            })}
            </section>
        </>
    )
}

export default MenuCard
