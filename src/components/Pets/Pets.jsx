import css from './Pets.module.scss';



const Pets = () => {



    return (
        <>
            <div className="container">
                
                <h1 className={css.pets__title}>Interacting with our pets</h1>


                <ul className={css.pets__list}>

                    <li className={css.pets__item}>
                        <img src="./Rectangle6.png" alt="/Rectangle6.png" className={css.pets__img}/>
                        <p className={css.pets__text}>Rescue pups pose as ghosts in festive photo shoot</p>
                    </li>
                    <li className={css.pets__item}>
                        <img src="./Rectangle7.png" alt="/Rectangle6.png" className={css.pets__img}/>
                        <p className={css.pets__text}>Cat interrupts morning coffee on sunny Washington morning</p>
                    </li>
                    <li className={css.pets__item}>
                        <img src="./Rectangle8.png" alt="/Rectangle6.png" className={css.pets__img}/>
                        <p className={css.pets__text}>New study finds dogs pay more attention to women</p>
                    </li>
                    <li className={css.pets__item}>
                        <img src="./Rectangle9.png" alt="/Rectangle6.png" className={css.pets__img}/>
                        <p className={css.pets__text}>Petting dogs gives health benefit, even if they are not yours</p>
                    </li>

                </ul>

                <button type='button' className={css.pets__btn}>See more</button>
            </div>
        </>
    );
};

export default Pets;