import React, {useState, useEffect} from "react";
import Heading from "../heading/heading";
import Card from "../card/card";
import './cards-list.scss';
import Button from "../button/button";
import Spinner from '../../components/spiner/spinner';
import ErrorBoundary from "../error-boundary/error-boundary";
import TestServices from '../../services/test-services';
import animation from "../animation/animation";

const CardList = () => {
    const data = {
        head: 'Working with GET request',
        btn: 'Show more',
    }

    const [dataState, setDataState] = useState(null);
    const [preloader, setPreloader] = useState(true);
    const [lastPageState, setLastPageState] = useState(true);
    const [count, setCount] = useState(6);

    const showMore = () => {
        setCount((count) => count + 6);
        setPreloader(true);
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const testServices = new TestServices();
                const dataPage = await testServices.getPageResource(1, count);
                setDataState(dataPage.users);
                setLastPageState(dataPage.links.next_url);
                setPreloader(false);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchData();
        animation('cards_list');
    }, [count]);

    const cardsList = preloader ? <Spinner/> : dataState.map(item => (
        <div key={item.id} className="cards_list__item">
            <Card  userData={item} />
        </div>
    ))

    return (
        <ErrorBoundary>
            <section className='section cards_list'>
                <div className="cards_list__container">
                    <Heading label={data.head}/>
                    <div className='cards_list__wrap'>
                        { cardsList }
                    </div>
                    <div className="cards_list__btn_wrap">
                        <Button
                            type='button'
                            disabledState={ !lastPageState }
                            label={data.btn}
                            onClickBtn={showMore}/>
                    </div>
                </div>
            </section>
        </ErrorBoundary>
    )
}

export default CardList;
